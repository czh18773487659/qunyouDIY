game.import('character', function(lib, game, ui, get, ai, _status){
    var kuangshen={
        name:'kuangshen',
        connect:false,
        characterSort:{
            kuangshen:{
                ksrefresh:["ks_re_shen_zhangjiao","ks_re_gaoshun","ks_re_menghuo","ks_re_xunyou","ks_re_caoren"],
                fengheguai:["ks_fh_hezhuran","ks_fh_shen_huanggai","ks_fh_guanzhang"],
                boss:["ks_boss_huanggai","ks_boss_zhangchunhua"],
            },
        },
        character:{
            ks_1: ["male", "shen", Infinity, ["ks_ceshi"],
                []
            ],

            //refresh
            ks_re_shen_zhangjiao:["male","shen",3,["ks_re_tiandao","ks_re_qulei","ks_re_cedian","ks_re_zhu_huangtian"],
                ["zhu"]
            ],
            ks_re_gaoshun:["male","qun",4,["ks_re_zhanjiang","ks_re_xianzhen"],
                []
            ],
            ks_re_menghuo:["male","shu",3,["ks_re_huoshou","ks_re_zaiqi"],
                ["zhu"]
            ],
            ks_re_xunyou:["male","wei",3,["ks_re_qice","ks_re_zhiyu"],
                []
            ],
            ks_re_caoren:["male","wei",4,["ks_re_jushou","ks_re_jiewei"],
                []
            ],



            //fengheguai
            ks_fh_hezhuran:["male","shen",3,["ks_fh_zhendu","olddanshou"],
                ["forbidai"]
            ],
            ks_fh_shen_huanggai:["male","shen",3,["xinzhanyi","zhenlie","xindangxian","zhaxiang"],
                []
            ],
            ks_fh_guanzhang:["male","shu",3,["fuhun","retieji","tiandu"],
                []
            ],



            //boss
            ks_boss_huanggai:["male","shen","2/5/4",["ks_boss_kurou","ks_boss_zhaxiang","ks_re_zaiqi"],
                ["boss","hiddenboss","bossallowed"]
            ],
            ks_boss_zhangchunhua:["female","shen",1,["ks_boss_juejing15","relonghun"],
                ["boss","hiddenboss","bossallowed"]
            ],
        },
        characterIntro:{},
        characterTitle:{},
        perfectPair:{},
        skill:{
            //ks_1测试
            "ks_ceshi":{
                trigger:{
                    global:'phaseBefore',
                    player:'enterGame',
                },
                forced:true,
                direct:true,
                charlotte:true,
                filter:function(event,player){
                    return event.name!='phase'||game.phaseNumber==0;
                },
                content:function(){
                    'step 0'
                    game.me.qunyou_chooseNumber([1,Infinity],5,'请输入'+get.translation(player)+'的体力值',true,function(){return {num:5,bool:true}});
                    'step 1'
                    player.maxHp=result.num;
                    player.changeHp(result.num,false);
                    'step 2'
                    var length=0;
                    Object.keys(lib.cardPile).forEach(i=>length+=lib.cardPile[i].length);
                    game.me.qunyou_chooseNumber([0,length],2,'请输入'+get.translation(player)+'摸牌阶段的摸牌数',true,function(){return {num:2,bool:true}});
                    'step 3'
                    player.addMark("ks_ceshi_yingzi",result.num,false);
                },
                group:["ks_ceshi_yingzi"],
                subSkill:{
                    yingzi:{
                        trigger:{player:'phaseDrawBegin2'},
                        frequent:true,
                        mark:true,
                        intro:{
                            content:"摸牌阶段摸牌数：#"
                        },
                        filter:function(event,player){
                            return !event.numFixed;
                        },
                        content:function(){
                            trigger.num+=player.countMark("ks_ceshi_yingzi");
                            trigger.num-=2;
                        },
                        ai:{
                            threaten:1.3
                        }
                    }
                }
            },

            //ks_re_shen_zhangjiao 神张角
            "ks_re_tiandao":{
                audio:"ext:群友DIY/audio/kuangshen:3",
                unique:true,
                trigger:{
                    global:"judgeAfter",
                },
                direct:true,
                disableReason:['ks_re_zhu_huangtian_effect'],
                filter:function(event,player){
                    return !lib.skill.ks_re_tiandao.disableReason.contains(event.getParent().name);
                },
                locked:true,
                judgeCheck:function(card,bool){
                    var player=_status.event.player;
                    var suit=get.suit(card);
                    var eff=0;
                    switch(suit){
                        case 'spade':eff=(game.hasPlayer((current)=>(current.hp==1&&get.attitude(player,current)<0)))?2.5:1.5;break;
                        case 'heart':if(player.hp==1&&!player.countCards('hs',['tao','jiu'])) eff=4;
                                    else eff=(player.getDamagedHp()/(player.maxHp-1))*3;break;
                        case 'club':if(game.hasPlayer((current)=>(current.countDiscardableCards(player,'he')>=2&&get.attitude(player,current)<0))) eff=2.5;
                                    else if(game.hasPlayer((current)=>(current.countDiscardableCards(player,'he')>=1&&get.attitude(player,current)<0))) eff=1;break;
                        case 'diamond':eff=(player.countCards('h')<4)?2.5:1.5;break;
                    };
                    return eff;
                },
                content:function(){              
                    'step 0'
                    event.suit=trigger.result.suit;
                    event.count=0;
                    'step 1'
                    switch(event.suit){
                        case 'heart':player.recover();player.logSkill('ks_re_tiandao');break;
                        case 'diamond':player.draw(2);player.logSkill('ks_re_tiandao');break;
                        case 'club':event.count=2;break;
                        case 'spade':player.chooseTarget('对一名角色造成1点雷电伤害').ai=function(target){
                            var player=_status.event.player;
                            return get.damageEffect(target,player,player,'thunder')};break;
                    };
                    'step 2'
                    if(event.suit=='spade'&&result.targets&&result.targets.length){
                        player.logSkill('ks_re_tiandao',result.targets);
                        result.targets[0].damage(1,'thunder');
                        event.finish();
                    };
                    'step 3'
                    if(event.suit=='club'){
                        player.chooseTarget('弃置一名角色至多两张牌',function(card,player,target){
                            return target.countDiscardableCards(player,'he');
                        }).set('ai',function(target){
                            return -get.attitude(_status.event.player,target);
                        });
                    };
                    'step 4'
                    if(!result.targets) event.finish();
                    event.targets=result.targets;
                    'step 5'
                    if(!event.logged){
                        player.logSkill('ks_re_tiandao',event.targets);
                        event.logged=true;
                    }
                    else player.line(event.targets[0],'green');
                    player.discardPlayerCard(event.targets[0],'he');
                    if(--event.count>0) event.redo();
                },
                group:['ks_re_tiandao_rejudge'],
                subSkill:{
                    rejudge:{
                        audio:"ext:群友DIY/audio/kuangshen:2",
                        trigger:{
                            global:"judge",
                        },
                        direct:true,
                        filter:function(event,player){
                            return player.countCards('hes')>0;
                        },
                        content:function(){
                            "step 0"
                            player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                            get.translation(trigger.player.judging[0])+'，'+get.prompt('ks_re_tiandao'),'hes',function(card){
                                var player=_status.event.player;
                                var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                                if(mod2!='unchanged') return mod2;
                                var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
                                if(mod!='unchanged') return mod;
                                return true;
                            }).set('ai',function(card){
                                var trigger=_status.event.getTrigger();
                                var player=_status.event.player;
                                var judging=_status.event.judging;
                                var result=trigger.judge(card)-trigger.judge(judging);
                                var checkx=lib.skill.ks_re_tiandao.judgeCheck(card,true)-lib.skill.ks_re_tiandao.judgeCheck(judging);
                                var attitude=get.attitude(player,trigger.player);
                                if(attitude>=0){
                                    return result+checkx-get.value(card)/2;
                                }
                                else{
                                    return -result+checkx-get.value(card)/2;
                                }
                            }).set('judging',trigger.player.judging[0]);
                            "step 1"
                            if(result.bool){
                                player.respond(result.cards,'ks_re_tiandao_rejudge','highlight','noOrdering');
                            }
                            else{
                                event.finish();
                            }
                            "step 2"
                            if(result.bool){
                                if(trigger.player.judging[0].clone){
                                    trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                    game.broadcast(function(card){
                                        if(card.clone){
                                            card.clone.classList.remove('thrownhighlight');
                                        }
                                    },trigger.player.judging[0]);
                                    game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
                                }
                                game.cardsDiscard(trigger.player.judging[0]);
                                trigger.player.judging[0]=result.cards[0];
                                trigger.orderingCards.addArray(result.cards);
                                game.log(trigger.player,'的判定牌改为',result.cards[0]);
                                game.delay(2);
                            }
                        },
                        ai:{
                            rejudge:true,
                            tag:{
                                rejudge:1,
                            },
                        },
                    },
                },
            },
            "ks_re_qulei":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                content:function(){
                    'step 0'
                    event.num=trigger.num;		
                    'step 1'
                    player.judge();
                    'step 2'	
                    if(--event.num>0) player.chooseBool(get.prompt2("ks_re_qulei")).set('frequentSkill',"ks_re_qulei");
                    else event.finish();
                    'step 3'
                    if(result.bool){
                        player.logSkill("ks_re_qulei");
                        event.goto(1);
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target){
                            if(get.tag(card,'damage')){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                if(!target.hasFriend()) return;
                                var num=get.tag(card,'damage');
                                if(target.hp>=4) return [1,num*2];
                                if(target.hp==3) return [1,num*1.5];
                                if(target.hp==2) return [1,num*0.5];
                            };
                        },
                    },
                    threaten:0.7,
                },
            },
            "ks_re_cedian":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                enable:"phaseUse",
                position:'hes',
                filterCard:function(card,player){
                    return !player.getStorage('ks_re_cedian_suit').contains(get.suit(card));
                },
                check:function(card){
                    return lib.skill.ks_re_tiandao.judgeCheck(card,true)*4-get.value(card);
                },
                discard:false,
                delay:false,
                loseTo:"cardPile",
                insert:true,
                content:function(){
                    'step 0'
                    player.judge();
                    'step 1'
                    player.addTempSkill('ks_re_cedian_suit',{player:'phaseUseAfter'});
                    player.storage.ks_re_cedian_suit.push(get.suit(cards,player));
                    player.storage.ks_re_cedian_suit.sort(function(a,b){
                        return lib.suit.indexOf(b)-lib.suit.indexOf(a);
                    });
                    player.syncStorage('ks_re_cedian_suit');
                    'step 2'
                    if(game.HasExtension('十周年UI')){
                        game.broadcastAll(function(player){
                            var list='';
                            for(var suit of player.getStorage('ks_re_cedian_suit')) list+=get.translation(suit);
                            if(player.marks.ks_re_cedian_suit) player.marks.ks_re_cedian_suit.firstChild.innerHTML=list;
                        },player);
                    };
                },
                ai:{
                    order:8,
                    result:{
                        player:1,
                    },
                },
                subSkill:{
                    suit:{
                        init:function(player){
                            player.storage.ks_re_cedian_suit=[];
                        },
                        charlotte:true,
                        onremove:true,
                        mark:true,
                        intro:{
                            markcount:function(storage){
                                if(game.HasExtension('十周年UI')) return undefined;
                                return storage.length;
                            },
                            content:"本阶段已选择过$花色的牌",
                        },
                        sub:true,
                    },
                },
            },
            "ks_re_zhu_huangtian":{
                unique:true,
                global:"ks_re_zhu_huangtian_effect",
                audio:"ext:群友DIY/audio/kuangshen:2",
                zhuSkill:true,
                subSkill:{
                    effect:{
                        enable:"phaseUse",
                        usable:1,
                        prompt:function(){
                            var player=_status.event.player;
                            var list=game.filterPlayer(function(target){
                                return target.hasZhuSkill('ks_re_zhu_huangtian',player);
                            });
                            var str='将一张牌置于牌堆顶并进行一次判定。'
                            str+='然后'+get.translation(list)+'可以弃一张牌，令你执行〖天道②〗的对应效果。';
                            return str;
                        },
                        filter:function(event,player){
                            if(player.countCards('hes')==0) return false;
                            return game.hasPlayer(function(target){
                                return target!=player&&target.group==player.group&&target.hasZhuSkill('ks_re_zhu_huangtian',player);
                            });
                        },
                        filterTarget:function(card,player,target){
                            return target!=player&&target.group==player.group&&target.hasZhuSkill('ks_re_zhu_huangtian',player);
                        },
                        selectTarget:-1,
                        multitarget:true,
                        filterCard:true,
                        check:function(card){
                            return lib.skill.ks_re_tiandao.judgeCheck(card,true)*4-get.value(card);
                        },
                        position:'hes',
                        discard:false,
                        delay:false,
                        loseTo:"cardPile",
                        insert:true,
                        direct:true,
                        clearTime:true,
                        prepare:function(cards,player,targets){
                            for(var i of targets) i.logSkill('ks_re_zhu_huangtian');
                        },
                        content:function(){
                            "step 0"
                            player.judge();
                            "step 1"
                            event.suit=result.suit;
                            event.count=0;
                            event.num=0
                            "step 2"
                            var str="是否令"+get.translation(player);
                            switch(event.suit){
                                case 'spade':str+='对一名角色造成1点雷电伤害？';break;
                                case 'heart':str+='回复1点体力？';break;
                                case 'club':str+='弃置一名角色至多两张牌？';break;				
                                case 'diamond':str+='摸两张牌？';break;
                            };
                            var next=targets[event.num].chooseBool(str);
                            next.set('ai',function(){
                                return get.attitude(targets[event.num],player)>=0;
                            });
                            'step 3'
                            if(!result.bool) event.goto(8);
                            switch(event.suit){
                                case 'heart':player.recover();player.logSkill('ks_re_tiandao');break;
                                case 'diamond':player.draw(2);player.logSkill('ks_re_tiandao');break;
                                case 'club':event.count=2;break;
                                case 'spade':player.chooseTarget('对一名角色造成1点雷电伤害').ai=function(target){
                                    var player=_status.event.player;
                                    return get.damageEffect(target,player,player,'thunder')};break;
                            };
                            'step 4'
                            if(event.suit=='spade'&&result.targets&&result.targets.length){
                                player.logSkill('ks_re_tiandao',result.targets);
                                result.targets[0].damage(1,'thunder');
                                event.finish();
                            };
                            'step 5'
                            if(event.suit=='club'){
                                player.chooseTarget('弃置一名角色至多两张牌',function(card,player,target){
                                    return target.countDiscardableCards(player,'he');
                                }).set('ai',function(target){
                                    return -get.attitude(_status.event.player,target);
                                });
                            };
                            'step 6'
                            if(!result.targets) event.finish();
                            event.targets=result.targets;
                            'step 7'
                            if(!event.logged){
                                player.logSkill('ks_re_tiandao',event.targets);
                                event.logged=true;
                            }
                            else player.line(event.targets[0],'green');
                            player.discardPlayerCard(event.targets[0],'hej');
                            if(--event.count>0) event.redo();
                            'step 8'
                            if(++event.num<targets.length) event.goto(2);
                        },
                        ai:{
                            order:8,
                            expose:0.3,
                            result:{
                                player:function(player,target){
                                    if(get.attitude(player,target)>0) return 8;
                                    return 0;
                                },
                            },
                        },
                        sub:true,
                    },
                },
            },

            //ks_re_gaoshun 高顺改
            "ks_re_zhanjiang":{
                audio:"ext:群友DIY/audio/kuangshen:true",
                enable:"phaseUse",
                filterTarget:function(card,player,target){
                    return target!=player;
                },
                filter:function(event,player){
                    return player.countCards('hes')>0&&!game.hasPlayer((current)=>current.hasSkill('ks_re_xianzhen_mark'));
                },
                filterCard:true,
                check:function(card){
                    return get.number(card)-get.value(card);
                },
                position:'hes',
                discard:false,
                delay:false,
                lose:false,
                insert:true,
                content:function(){
                    "step 0"
                    if(!player.canCompare(target)){
                        player.discard(cards);
                        event.goon=true;
                    }
                    else{
                        var next=player.chooseToCompare(target);
                        if(!next.fixedResult) next.fixedResult={};
                        next.fixedResult[player.playerid]=cards[0];
                    };
                    "step 1"
                    if(!event.goon) event.goon=result.bool;
                    "step 2"
                    if(event.goon){
                        target.addTempSkill('ks_re_xianzhen_mark');
                        game.playAudio('..','extension','狂神的奇妙扩展/audio/skill',"ks_re_zhanjiang_win");
                        player.useCard({name:'sha',isCard:true},target,false);
                    }
                    else{
                        game.playAudio('..','extension','狂神的奇妙扩展/audio/skill',"ks_re_zhanjiang_lose");
                        var evt=_status.event.getParent('phase');
                        if(evt){
                            game.resetSkills();
                            _status.event=evt;
                            _status.event.finish();
                        };
                    };
                },
                ai:{
                    order:function(name,player){
                        var cards=player.getCards('h');
                        if(player.countCards('h','sha')==0){
                            return 1;
                        }
                        for(var i=0;i<cards.length;i++){
                            if(cards[i].name!='sha'&&get.number(cards[i])>11&&get.value(cards[i])<7){
                                return 9;
                            }
                        }
                        return get.order({name:'sha'})-1;
                    },
                    result:{
                        player:function(player){
                            if(player.countCards('h','sha')>0) return 0;
                            var num=player.countCards('h');
                            if(num>player.hp) return 0;
                            if(num==1) return -2;
                            if(num==2) return -1;
                            return -0.7;
                        },
                        target:function(player,target){
                            var num=target.countCards('h');
                            if(num==1) return -1;
                            if(num==2) return -0.7;
                            return -0.5
                        },
                    },
                    threaten:1.3,
                },
            },
            "ks_re_xianzhen":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                filter:function(event,player){
                    return event.target.hasSkill('ks_re_xianzhen_mark');
                },
                content:function(){
                    trigger.directHit.addArray(game.players);
                },
                mod:{
                    playerEnabled:function(card,player,target){
                        if(player==_status.currentPhase&&player!=target&&!target.hasSkill('ks_re_xianzhen_mark')&&(!get.info(card)||!get.info(card).singleCard||!ui.selected.targets.length)) return false;
                    },
                    targetInRange:function(card,player,target){
                        if(target.hasSkill('ks_re_xianzhen_mark')) return true;
                    },
                    cardUsableTarget:function(card,player,target){
                        if(target.hasSkill('ks_re_xianzhen_mark')) return true;
                    },
                },
                ai:{
                    unequip:true,
                    "directHit_ai":true,
                    skillTagFilter:function(player,tag,arg){
                        return arg.target.hasSkill('ks_re_xianzhen_mark');
                    },
                },
                group:["ks_re_xianzhen_jiu"],
                subSkill:{
                    mark:{
                        mark:true,
                        charlotte:true,
                        intro:{
                            content:function(storage,player,skill){
                                var list=player.getSkills(null,false,false).filter(function(i){
                                    return lib.skill.ks_re_xianzhen_mark.skillBlocker(i,player);
                                });
                                var str="<li>不能使用【酒】<br>";
                                if(list.length) str+= '<li>失效技能：'+get.translation(list);
                                else str+= '<li>无失效技能';
                                return str;
                            }
                        },
                        init:function(player,skill){
                            player.addSkillBlocker(skill);
                        },
                        onremove:function(player,skill){
                            player.removeSkillBlocker(skill);
                        },
                        skillBlocker:function(skill,player){
                            return !lib.skill[skill].charlotte&&!get.is.locked(skill,player);
                        },
                        mod:{
                            cardEnabled:function(card,player){
                                if(card.name=='jiu') return false;
                            },
                            cardSavable:function(card,player){
                                if(card.name=='jiu') return false;
                            },
                        },
                        sub:true,
                    },
                    jiu:{
                        trigger:{
                            player:"useCard1",
                        },
                        forced:true,
                        filter:function(event,player){
                            return event.card&&event.card.name=='sha'&&event.cards&&event.cards.length==1&&get.name(event.cards[0])=='jiu';
                        },
                        content:function(){
                            trigger.baseDamage++;
                        },
                        mod:{
                            cardname:function(card){
                                if(card.name=='jiu'||get.subtype(card,false)=='equip1'||get.subtype(card,false)=='equip4') return 'sha';
                            },
                            cardnumber:function(card){
                                if(card.name=='jiu'||get.subtype(card,false)=='equip1'||get.subtype(card,false)=='equip4') return 13;
                            },
                            aiValue:function(player,card,num){
                                if(card.name=='jiu') return 7.6;
                            },
                        },
                        sub:true,
                    },
                },
            },
            
            //ks_re_menghuo 孟获改
            "ks_re_huoshou":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:"phaseZhunbeiEnd",
                },
                content:function(){
                    "step 0"
                    if(player.hp>1){
                        player.addTempSkill('ks_re_huoshou_keep');
                        player.addMark('ks_re_huoshou_keep',player.hp-1,false);
                        player.loseHp(player.hp-1);
                    };
                    "step 1"
                    if(player.countCards('j')>0){
                        player.discardPlayerCard(player.countCards('j'),player,'j',true);
                    };
                },
                subSkill:{
                    keep:{
                        charlotte:true,
                        onremove:true,
                        mark:true,
                        intro:{
                            content:"出杀次数+1；手牌上限+#",
                        },
                        mod:{
                            maxHandcard:function(player,num){
                                return num+=player.countMark('ks_re_huoshou_keep');
                            },
                            cardUsable:function (card,player,num){
                                if(card.name=='sha') return num+=1;
                            },
                        },
                        sub:true,
                    },
                },
            },
            "ks_re_zaiqi":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                frequent:true,
                filter:function(event,player){
                    return !event.numFixed&&player.hp<player.maxHp;
                },
                content:function(){
                    "step 0"
                    player.draw(player.getDamagedHp());
                    player.logSkill('ks_re_zaiqi');
                    "step 1"
                    player.chooseCard("每弃置一张黑色牌，你回复1点体力；每弃置一张红色牌，你摸两张牌。",'he',player.getDamagedHp(),true);
                    "step 2"
                    event.num=0;
                    for(var i=0;i<result.cards.length;i++){
                        if(get.color(result.cards[i])=='black'){
                            event.num++;
                        }
                    };
                    player.discard(result.cards);
                    "step 3"
                    if(event.num){
                        player.recover(event.num);
                    };
                    if(result.cards.length-event.num){
                        player.draw((result.cards.length-event.num)*2);
                    };
                },
                ai:{
                    threaten:function(player,target){
                        if(target.hp==1) return 2;
                        if(target.hp==2) return 1.5;
                        return 1;
                    },
                },
            },
            
            //ks_re_xunyou 荀攸改
            "ks_re_qice":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:["useCard2"],
                },
                direct:true,
                filter:function(event,player){
                    return !get.info(event.card).notarget&&(event.skill=='ks_re_qice_effect_backup'||event.skill=='ks_re_zhiyu_x');
                },
                content:function(){
                    'step 0'
                    event.num=Math.floor(trigger.cards.length/2);
                    if(event.num==0) event.finish();
                    'step 1'
                    var goon=false;
                    var info=get.info(trigger.card);
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                            goon=true;break;
                        };
                    };
                    if(goon){
                        player.chooseTarget('是否增加至多'+event.num+'名'+get.translation(trigger.card)+'的目标？',[1,event.num],function(card,player,target){
                            var trigger=_status.event;
                            if(trigger.targets.contains(target)) return false;
                            return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
                        }).set('ai',function(target){
                            var trigger=_status.event.getTrigger();
                            var player=_status.event.player;
                            return get.effect(target,trigger.card,player,player);
                        }).set('targets',trigger.targets).set('card',trigger.card);
                    }
                    else{
                        if(!info.multitarget&&trigger.targets&&trigger.targets.length>1){
                            event.goto(4);
                        }
                    }
                    'step 2'
                    if(result.bool){
                        if(!event.isMine()) game.delayx();
                            event.targets=result.targets;
                    }
                    else{
                        event.goto(4);
                    }
                    'step 3'
                    if(event.targets){
                        player.logSkill('ks_re_qice',event.targets);
                        trigger.targets.addArray(event.targets);
                    }
                    event.finish();
                    'step 4'
                    player.chooseTarget('是否减少至多'+event.num+'名'+get.translation(trigger.card)+'的目标？',[1,event.num],function(card,player,target){
                        return _status.event.targets.contains(target);
                    }).set('ai',function(target){
                        var trigger=_status.event.getTrigger();
                        return -get.effect(target,trigger.card,trigger.player,_status.event.player);
                    }).set('targets',trigger.targets);
                    'step 5'
                    if(result.bool){
                        event.targets=result.targets;
                        if(event.isMine()){
                            player.logSkill('ks_re_qice',event.targets);
                            event.finish();
                        };
                        for(var i=0;i<result.targets.length;i++){
                            trigger.targets.remove(result.targets[i]);
                        };
                        game.delay();
                    }
                    else{
                        event.finish();
                    };
                    'step 6'
                    player.logSkill('ks_re_qice',event.targets);
                },
                
                group:['ks_re_qice_effect'],
                subSkill:{
                    disable:{
                        mark:true,
                        intro:{
                            content:"本回合已使用〖奇策〗",
                        },
                        sub:true,
                    },
                    effect:{
                        enable:"chooseToUse",
                        filter:function(event,player){
                            if(!player.countCards('h')||player.hasSkill('ks_re_qice_disable')) return false;
                            for(var i of lib.inpile){
                                if(get.type(i)=='trick'&&event.filterCard({name:i},player,event)) return true;
                            }
                            return false;
                        },
                        hiddenCard:function(player,name){
                            return get.type(name)=='trick'&&player.countCards('h')>0&&!player.hasSkill('ks_re_qice_disable');
                        },
                        chooseButton:{
                            dialog:function(event,player){
                                var list=[];
                                for(var i=0;i<lib.inpile.length;i++){
                                    if(get.type(lib.inpile[i])=='trick') list.push(['锦囊','',lib.inpile[i]]);
                                }
                                return ui.create.dialog(get.translation('ks_re_qice'),[list,'vcard']);
                            },
                            filter:function(button,player){
                                if(!get.info({name:button.link[2]}).notarget&&!player.hasUseTarget({name:button.link[2]})) return false;
                                return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
                            },
                            check:function(button){
                                var player=_status.event.player;
                                var recover=0,lose=1,players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
                                        return (button.link[2]=='juedou')?2:-1;
                                    }
                                    if(!players[i].isOut()){
                                        if(players[i].hp<players[i].maxHp){
                                            if(get.attitude(player,players[i])>0){
                                                if(players[i].hp<2){
                                                    lose--;
                                                    recover+=0.5;
                                                }
                                                lose--;
                                                recover++;
                                            }
                                            else if(get.attitude(player,players[i])<0){
                                                if(players[i].hp<2){
                                                    lose++;
                                                    recover-=0.5;
                                                }
                                                lose++;
                                                recover--;
                                            }
                                        }
                                        else{
                                            if(get.attitude(player,players[i])>0){
                                                lose--;
                                            }
                                            else if(get.attitude(player,players[i])<0){
                                                lose++;
                                            }
                                        }
                                    }
                                }
                                if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
                                if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
                                return (button.link[2]=='wuzhong')?1:-1;
                            },
                            backup:function(links,player){
                                return {
                                    filterCard:true,
                                    selectCard:-1,
                                    position:'h',
                                    audio:['ks_re_qice',2],
                                    popname:true,
                                    viewAs:{name:links[0][2]},
                                    onuse:function(event,player){
                                        player.addTempSkill('ks_re_qice_disable');
                                    },
                                }
                            },
                            
                            prompt:function(links,player){
                                return '将全部手牌当作'+get.translation(links[0][2])+'使用';
                            },
                        },
                        ai:{
                            order:1,
                            result:{
                                player:function(player){
                                    var num=0;
                                    var cards=player.getCards('h');
                                    if(cards.length>=3&&player.hp>=3) return 0;
                                    for(var i=0;i<cards.length;i++){
                                        num+=Math.max(0,get.value(cards[i],player,'raw'));
                                    }
                                    num/=cards.length;
                                    num*=Math.min(cards.length,player.hp);
                                    return 12-num;
                                },
                            },
                            threaten:1.6,
                        },
                        sub:true,
                    },
                },	
            },
            "ks_re_zhiyu":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                preHidden:true,
                content:function(){
                    'step 0'
                    event.num=trigger.num;
                    "step 1"
                    player.draw(2);
                    player.chooseToDiscard(1,'he',true);
                    "step 2"
                    if(!player.countCards('h')){
                        if(trigger.source&&trigger.source.countCards('hej')>0) event.goto(4);
                        else event.goto(9);
                    }
                    else player.showHandcards();
                    "step 3"
                    var cards=player.getCards('h');
                    var color=get.color(cards[0],player);
                    for(var i=1;i<cards.length;i++){
                        if(get.color(cards[i],player)!=color) event.goto(9);
                    };
                    "step 4"
                    var list1=[];
                    if(trigger.source&&trigger.source.countCards('hej')>0) list1.push('选项一');
                    if(player.countCards('h')>=player.hp&&player.hasSkill('ks_re_qice')&&!player.hasSkill('ks_re_qice_disable')){
                        list1.push('选项二');
                    };
                    if(list1.length<2) event.control=list1[0];
                    else{
                        player.chooseControl(list1,'cancel2').set('choiceList',[
                            '弃置'+get.translation(trigger.source)+'区域内的一张牌',
                            '若你的手牌数不小于体力值且本回合未发动过〖'+get.translation('ks_re_qice')+'〗，立即发动一次〖'+get.translation('ks_re_qice')+'〗',
                        ]);
                    };
                    "step 5"
                    if(result.control) event.control=result.control;
                    if(event.control=='cancel2') event.goto(9);
                    "step 6"
                    if(event.control=='选项一'&&trigger.source&&trigger.source.countCards('hej')>0){
                        player.line(trigger.source,'green');
                        player.discardPlayerCard(trigger.source,'hej');
                        event.goto(9);
                    };
                    "step 7"
                    if(event.control=='选项二'&&player.countCards('h')>=player.hp&&player.hasSkill('ks_re_qice')&&!player.hasSkill('ks_re_qice_disable')){
                        var list2=[];
                        for(var i=0;i<lib.inpile.length;i++){
                            if(get.type(lib.inpile[i])=='trick') list2.push(['锦囊','',lib.inpile[i]]);
                        };
                        var next=player.chooseButton([get.translation('ks_re_qice'),[list2,'vcard']]);
                        next.set('filterButton',function(button){
                            return player.hasUseTarget({name:button.link[2]});
                        });
                        next.set('check',function(button){
                            var player=_status.event.player;
                            var recover=0,lose=1,players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
                                    return (button.link[2]=='juedou')?2:-1;
                                }
                                if(!players[i].isOut()){
                                    if(players[i].hp<players[i].hp){
                                        if(get.attitude(player,players[i])>0){
                                            if(players[i].hp<2){
                                                lose--;
                                                recover+=0.5;
                                            }
                                            lose--;
                                            recover++;
                                        }
                                        else if(get.attitude(player,players[i])<0){
                                            if(players[i].hp<2){
                                                lose++;
                                                recover-=0.5;
                                            }
                                            lose++;
                                            recover--;
                                        }
                                    }
                                    else{
                                        if(get.attitude(player,players[i])>0){
                                            lose--;
                                        }
                                        else if(get.attitude(player,players[i])<0){
                                            lose++;
                                        }
                                    }
                                }
                            };
                            if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
                            if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
                            return (button.link[2]=='wuzhong')?1:-1;
                        });
                    };
                    "step 8"
                    if(result.bool==false) event.goto(4);
                    else{
                        player.addTempSkill('ks_re_qice_disable');
                        lib.skill.ks_re_zhiyu_x.viewAs={name:result.links[0][2]};
                        lib.skill.ks_re_zhiyu_x.prompt='将所有手牌当'+get.translation(result.links[0][2])+'使用';
                        var next=player.chooseToUse();
                            next.logSkill='ks_re_qice_effect';
                            next.set('norestore',true);
                            next.set('_backupevent','ks_re_zhiyu_x');
                            next.backup('ks_re_zhiyu_x');
                    };
                    'step 9'	
                    if(--event.num>0){
                        player.chooseBool(get.prompt2("ks_re_zhiyu")).set('frequentSkill',"ks_re_zhiyu");
                    }
                    else{
                        event.finish();
                    };
                    'step 10'
                    if(result.bool){
                        player.logSkill("ks_re_zhiyu");
                        event.goto(1);
                    };
                },
                ai:{
                    "maixie_defend":true,
                    threaten:0.9,
                },
                subSkill:{
                    x:{
                        filterCard:true,
                        selectCard:-1,
                        position:'h',
                        popname:true,
                        sub:true,
                    },
                },
            },
            
            //ks_re_caoren 曹仁改
            "ks_re_jushou":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                content:function(){
                    player.turnOver();
                },
                group:["ks_re_jushou_effect"],
                subSkill:{
                    effect:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,
                        content:function(){
                            "step 0"
                            player.draw(2+player.storage.disableEquip.length);
                            player.logSkill('ks_re_jushou');
                            "step 1"
                            if(player.storage.disableEquip.length>0){
                            player.chooseCard("弃置至多"+player.storage.disableEquip.length+"张手牌并恢复等量已废除的装备栏",'h',[0,player.storage.disableEquip.length],true);
                            };
                            "step 2"
                            event.cards=result.cards;
                            player.$throw(event.cards);
                            player.lose(event.cards,ui.ordering);
                            if(event.cards.length==0) event.finish();
                            for(var i=0;i<event.cards.length;i++){
                                player.chooseToEnable();
                            };
                            "step 3"
                            for(var j=0;j<event.cards.length;j++){
                                if(get.type(event.cards[j])=='equip'&&!player.isDisabled(get.subtype(event.cards[j]))){
                                    player.chooseUseTarget(event.cards[j],true,'nopopup');
                                };
                            };
                        },
                        sub:true,
                    },
                },
            },
            "ks_re_jiewei":{
                audio:"ext:群友DIY/audio/kuangshen:2",	
                group:['ks_re_jiewei_shan','ks_re_jiewei_tao','ks_re_jiewei_wuxie','ks_re_jiewei_directwuxie','ks_re_jiewei_sha'],
                subSkill:{
                    shan:{
                        enable:"chooseToUse",
                        viewAs:{
                            name:"shan",
                            isCard:true,
                        },
                        mark:false,
                        filterCard:function(){return false},
                        viewAsFilter:function(player){
                            if(player.hasSkill('ks_re_jiewei_disable1')) return false;
                            if(player.storage.disableEquip.length>4) return false;
                            return true;
                        },
                        onuse:function(event,player){
                            player.addTempSkill('ks_re_jiewei_disable1');
                        },
                        selectCard:-1,
                        prompt:"废除一个装备栏，视为使用一张【闪】",
                        precontent:function(){
                            player.chooseToDisable();
                            player.logSkill('ks_re_jiewei');
                        },
                        ai:{
                            skillTagFilter:function(player){
                                if(player.hasSkill('ks_re_jiewei_disable1')) return false;
                            },
                            respondShan:true,
                            basic:{
                                useful:[7,5.1,2],
                                value:[7,5.1,2],
                            },
                            result:{
                                player:1,
                            },
                        },
                        sub:true,
                    },
                    tao:{
                        enable:"chooseToUse",
                        viewAs:{
                            name:"tao",
                            isCard:true,
                        },
                        mark:false,
                        filterCard:function(){return false},
                        viewAsFilter:function(player){
                            if(player.hasSkill('ks_re_jiewei_disable1')) return false;
                            if(player.storage.disableEquip.length>4) return false;
                            return true;
                        },
                        onuse:function(event,player){
                            player.addTempSkill('ks_re_jiewei_disable1');
                            player.logSkill('ks_re_jiewei');
                        },
                        selectCard:-1,
                        prompt:"废除一个装备栏，视为使用一张【桃】",
                        precontent:function(){
                            player.chooseToDisable();
                        },
                        ai:{
                            recover:1,
                            save:1,
                            skillTagFilter:function(player){
                                if(player.hasSkill('ks_re_jiewei_disable1')) return false;
                            },
                            threaten:1.5,
                            basic:{
                                order:function(card,player){
                                    if(player.hasSkillTag('pretao')) return 5;
                                    return 2;
                                },
                                useful:[6.5,4,3,2],
                                value:[6.5,4,3,2],
                            },
                        },
                        sub:true,
                    },
                    wuxie:{
                        enable:"chooseToUse",
                        viewAs:{
                            name:"wuxie",
                            isCard:true,
                        },
                        mark:false,
                        filterCard:function(){return false},
                        viewAsFilter:function(player){
                            if(player.hasSkill('ks_re_jiewei_disable1')) return false;
                            if(player.storage.disableEquip.length>4) return false;
                            return true;
                        },
                        onuse:function(event,player){
                            player.addTempSkill('ks_re_jiewei_disable1');
                        },
                        selectCard:-1,
                        prompt:"废除一个装备栏，视为使用一张不可响应的【无懈可击】",
                        precontent:function(){
                            player.chooseToDisable();
                            player.logSkill('ks_re_jiewei');
                        },
                        ai:{
                            skillTagFilter:function(player){
                                if(player.hasSkill('ks_re_jiewei_disable1')) return false;
                            },
                            threaten:1.5,
                        },
                        sub:true,
                    },
                    directwuxie:{
                        trigger:{
                            player:'useCard1',
                        },
                        direct:true,
                        filter:function (event,player){
                            return event.skill=='ks_re_jiewei_wuxie';
                        },
                        content:function(){
                            trigger.directHit.addArray(game.players);
                        },
                        sub:true,
                    },
                    disable1:{
                        mark:true,
                        intro:{
                            content:"本回合已使用【闪】/【桃】/【无懈可击】",
                        },
                        sub:true,
                    },
                    sha:{
                        audio:"ext:群友DIY/audio/kuangshen:2",	
                        trigger:{
                            global:"damageEnd",
                        },
                        direct:true,
                        filter:function(event,player){
                            return !player.hasSkill('ks_re_jiewei_disable2')&&player.storage.disableEquip.length<5&&event.source&&event.source!=player;
                        },
                        content:function(){
                            'step 0'
                            player.chooseBool("废除一个装备栏，视为对"+get.translation(trigger.source)+"使用一张【杀】");
                            'step 1'
                            if(result.bool){
                                player.chooseToDisable();
                                player.logSkill('ks_re_jiewei_sha');
                                player.useCard({name:'sha',isCard:true},trigger.source,false);
                                player.addTempSkill('ks_re_jiewei_disable2');
                            };
                        },
                        ai:{
                            "maixie_defend":true,
                        },
                        sub:true,
                    },
                    disable2:{
                        mark:true,
                        intro:{
                            content:"本回合已使用【杀】",
                        },
                        sub:true,
                    },
                },
            },
            
            //ks_fh_hezhuran 何朱然
            "ks_fh_zhendu":{
                audio:"ext:群友DIY/audio/kuangshen:true",
                trigger:{
                    global:"phaseBegin",
                },
                filter:function(event,player){
                    return event.player!=player&&event.player.isAlive()&&player.countCards('h')>0;
                },
                direct:true,
                preHidden:true,
                content:function(){
                    "step 0"
                    var nono=(get.attitude(player,trigger.player)>0);
                    var next=player.chooseToDiscard(get.prompt2('ks_fh_zhendu',trigger.player));
                    next.set('ai',function(card){
                        if(_status.event.nono) return -1;
                        return 13-get.useful(card);
                    });
                    next.set('logSkill',['ks_fh_zhendu',trigger.player]);
                    next.set('nono',nono);
                    next.setHiddenSkill('ks_fh_zhendu');
                    "step 1"
                    if(result.bool&&(!trigger.player.hasSkill('baiban'))){
                        trigger.player.addTempSkill('baiban',"damageAfter");
                    };
                    "step 2"
                    if(result.bool) trigger.player.damage();
                },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            
            //ks_boss_huanggai BOSS黄盖
            "ks_boss_kurou":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:"phaseZhunbeiEnd",
                },
                content:function(){
                    "step 0"
                    if(player.hp>1){
                        player.loseHp(player.hp-1);
                    };
                    "step 1"
                    if(player.countCards('j')>0){
                        player.discardPlayerCard(player.countCards('j'),player,'j',true);
                    };
                },
            },
            "ks_boss_zhaxiang":{
                audio:"ext:群友DIY/audio/kuangshen:2",
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                locked:false,
                content:function(){
                    event.num=trigger.num;
                    player.draw(event.num*2);
                    player.changeHujia(event.num*2);
                    if(_status.currentPhase==player){
                        player.addTempSkill("ks_boss_zhaxiang_directHit");
                        player.addMark("ks_boss_zhaxiang_directHit",event.num,false);
                    };
                },
                mod:{
                    cardUsable:function(card,player,num){
                        if(card.name=='sha') return num+player.countMark("ks_boss_zhaxiang_directHit");
                    },
                    maxHandcard:function(player,num){
                        return num+player.hujia;
                    },
                },
                ai:{
                    maihp:true,
                    effect:function(card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkillTag('jueqing',false,target)) return [1,1];
                            return 1.2;
                        }
                        if(get.tag(card,'loseHp')){
                            if(target.hp<=1) return;
                            var using=target.isPhaseUsing();
                            if(target.hp<=2) return [1,player.countCards('h')<=1&&using?3:0];
                            if(using&&target.countCards('h',{name:'sha',color:'red'})) return [1,3];
                            return [1,(target.countCards('h')<=target.hp||using&&game.hasPlayer(function(current){
                                return current!=player&&get.attitude(player,current)<0&&player.inRange(current);
                            }))?3:2]
                        }
                    },
                },
                subSkill:{
                    directHit:{
                        trigger:{
                            player:"useCard",
                        },
                        onremove:true,
                        mark:true,
                        intro:{
                            content:function(storage,player){
                                var str='<li>出杀次数：'+player.getCardUsable({name:'sha'})+'/'+(player.getCardUsable({name:'sha'})+player.countUsed({name:'sha'}));
                                str+='<br><li>使用【杀】无距离限制且不能被响应';
                                return str;
                            },
                        },
                        forced:true,
                        filter:function(event,player){
                            return event.card&&event.card.name=='sha';
                        },
                        content:function(){
                            trigger.directHit.addArray(game.players);
                            player.logskill("ks_boss_zhaxiang");
                        },
                        ai:{
                            "directHit_ai":true,
                            skillTagFilter:function(player,tag,arg){
                                return arg.card.name=='sha';
                            },
                        },
                        mod:{
                            targetInRange:function(card,player,target){
                                if(card.name=='sha') return true;
                            },
                        },
                        sub:true,
                    },
                },
            },

            //ks_boss_zhangchunhua 神张春华
            "ks_boss_juejing15":{
                trigger:{
                    player:"phaseDrawBefore",
                },
                forced:true,
                content:function(){
                    trigger.cancel();
                },
                ai:{
                    noh:true,
                    nogain:true,
                },
                mod:{
                    globalFrom:function(from,to,distance){
                        return distance=1;
                    },
                },
                group:["juejing15_1","juejing15_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"loseAfter",
                            global:["phaseBefore","equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                        },
                        forced:true,
                        filter:function(event,player){
                            if(event.name=='gain'&&event.player==player) return player.countCards('h')>15;
                            var evt=event.getl(player);
                            if(!evt||!evt.hs||evt.hs.length==0||player.countCards('h')>=15) return false;
                            var evt=event;
                            for(var i=0;i<15;i++){
                                evt=evt.getParent('boss_juejing2');
                                if(evt.name!='boss_juejing2') return true;
                            }
                            return false;
                        },
                        content:function(){
                            var num=15-player.countCards('h');
                            if(num>0) player.draw(num);
                            else if(num<0) player.chooseToDiscard('h',true,-num);
                        },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            global:["gameStart"],
                        },
                        forced:true,
                        content:function(){
                            player.disableEquip('equip1');
                            player.disableEquip('equip2');
                            player.disableEquip('equip3');
                            player.disableEquip('equip4');
                            player.disableEquip('equip5');
                            player.disableJudge();
                        },
                        sub:true,
                    },
                },
            },
        },
        translate:{
            //武将包
            ksrefresh:"界限突破·改",
            fengheguai:"缝合怪",
            boss:"Boss",

            
            //武将
            ks_1: "测试",
            //refresh
            ks_re_shen_zhangjiao:"神张角",
            ks_re_gaoshun:"高顺改",
            ks_re_menghuo:"孟获改",
            ks_re_xunyou:"荀攸改",
            ks_re_caoren:"曹仁改",
            //fengheguai
            ks_fh_hezhuran:"何朱然",
            ks_fh_shen_huanggai:"神黄盖",
            ks_fh_guanzhang:"关兴张苞改",
            //boss
            ks_boss_huanggai:"BOSS黄盖",
            ks_boss_zhangchunhua:"BOSS张春华",
            
            
            //技能

            //ks_1 测试
            "ks_ceshi": "测试",
            "ks_ceshi_info": "可以改变体力和摸牌数（测试、评级用）。之后还会更新各项功能。",

            //ks_re_shen_zhangjiao 神张角
            "ks_re_tiandao":"天道",
            "ks_re_tiandao_info":"①在一张判定牌生效前，你可以打出一张牌代替之。②当一张判定牌生效后，若判定结果为：♥你回复1点体力；♦︎你摸两张牌；♣你可以弃置一名角色至多两张牌；♠你可以对一名角色造成1点雷电伤害。",
            "ks_re_qulei":"驱雷",
            "ks_re_qulei_info":"当你受到1点伤害后，你可以进行一次判定。",
            "ks_re_cedian":"策电",
            "ks_re_cedian_info":"出牌阶段每种花色限一次，你可以将一张牌置于牌堆顶，然后进行一次判定。",
            "ks_re_zhu_huangtian":"黄天",
            "ks_re_zhu_huangtian_info":"主公技，其他与你相同势力的角色出牌阶段限一次，其可以将一张牌置于牌堆顶并进行一次判定(不触发〖天道②〗)，然后你可以令其执行〖天道②〗的对应效果。",
            
            //ks_re_gaoshun 高顺改
            "ks_re_zhanjiang":"斩将",
            "ks_re_zhanjiang_info":"出牌阶段，若场上没有拥有“陷阵”标记的角色，你可以与一名角色拼点，若其无法拼点，你弃一张牌并视为你赢。若你赢，其获得“陷阵”标记直到回合结束，然后你视为对其使用一张【杀】；若你没赢，你结束当前回合。",
            "ks_re_xianzhen":"陷阵",
            "ks_re_xianzhen_info":"锁定技，①你的【酒】、武器和进攻马均视为点数为K的【杀】，你使用的由【酒】转化的【杀】伤害+1；②你的回合内，你不能对没有“陷阵”标记的其他角色使用牌；③你对拥有“陷阵”标记的角色使用牌没有次数和距离限制，无视其防具且不可被响应；④拥有“陷阵”标记的角色非锁定技失效且无法使用【酒】。",
            
            //ks_re_menghuo 孟获改
            "ks_re_huoshou":"祸首",
            "ks_re_huoshou_info":"准备阶段结束时，你可以弃置你判定区内的所有牌，然后若你的体力值大于1，则你失去体力至1点并执行以下效果：①本回合你可以额外使用一张杀；②本回合你的手牌上限+X（X为你以此法失去的体力值）。",
            "ks_re_zaiqi":"再起",
            "ks_re_zaiqi_info":"摸牌阶段结束时，若你已受伤，则你可以摸X张牌并弃等量的牌（X为你已损失的体力值），然后你每以此法弃置一张黑色牌，你回复1点体力；每以此法弃置一张红色牌，你摸两张牌。",
            
            //ks_re_xunyou 荀攸改
            "ks_re_qice":"奇策",
            "ks_re_qice_info":"每回合限一次，你可以将所有的手牌（至少一张）当做任意一张普通锦囊牌使用，且你可以为此牌增加或减少至多X名目标（X为你以此法使用牌数的一半且向下取整）。",
            "ks_re_zhiyu":"智愚",
            "ks_re_zhiyu_info":"当你受到一点伤害后，你可以摸两张牌并弃一张牌，然后展示所有手牌。若颜色均相同，你可以选择一项：1、弃置伤害来源区域内的一张牌；2、若你的手牌数不小于体力值且本回合未发动过〖奇策〗，你可以立即发动一次〖奇策〗。",
            
            //ks_re_caoren 曹仁改
            "ks_re_jushou":"据守",
            "ks_re_jushou_info":"准备阶段，你可以翻面。当你翻面时，你可以摸2+X张牌并弃置至多X张手牌(X为你已废除的装备栏数)，并恢复等量已废除的装备栏，然后若弃置的牌中有装备牌，改为使用之。",
            "ks_re_jiewei":"解围",
            "ks_re_jiewei_info":"每回合每项限一次：1、你可以废除一个装备栏，视为使用一张【闪】/【桃】/不可被响应的【无懈可击】；2、当一名角色受到伤害后，若伤害来源不为你，你可以废除一个装备栏，视为对伤害来源使用一张无距离限制的【杀】。",
            
            //ks_fh_hezhuran 何朱然
            "ks_fh_zhendu":"鸩毒改",
            "ks_fh_zhendu_info":"一名其他角色的回合开始时，你可以弃置一张手牌并对其造成一点伤害，且直到此伤害结算结束该角色的所有技能失效。",
            
            //ks_boss_huanggai BOSS黄盖
            "ks_boss_kurou":"苦肉",
            "ks_boss_kurou_info":"准备阶段结束时，你可以失去体力至1点，然后弃置你判定区内的所有牌。",
            "ks_boss_zhaxiang":"诈降",
            "ks_boss_zhaxiang_info":"每当你失去1点体力后，你获得两点护甲并摸两张牌，然后你本回合使用【杀】无距离限制且不能被响应，你可以额外使用一张【杀】；你的手牌上限+X（X为你拥有的护甲值）。",
            
            //ks_boss_zhangchunhua 神张春华
            "ks_boss_juejing15":"绝境改",
            "ks_boss_juejing15_info":"锁定技，①游戏开始时，你废除你的判定区和装备区，你使用牌无距离限制；②摸牌阶段开始前，你跳过此阶段；③当你获得牌/失去手牌后，若你的手牌数大于15/小于15，则你将手牌摸至15张/弃置至15张。",
        },
        dynamicTranslate:{},
    };

    if(lib.device||lib.node){
        for(var i in kuangshen.character) kuangshen.character[i][4].push('ext:群友DIY/image/kuangshen/'+i+'.jpg');
    }
    else{
        for(var i in kuangshen.character) kuangshen.character[i][4].push('db:extension-群友DIY/image/kuangshen/:'+i+'.jpg');
    }

    lib.config.all.characters.push('kuangshen');	
    if(!lib.config.characters.contains('kuangshen')) lib.config.characters.push('kuangshen');
    lib.translate['kuangshen_character_config']='<span width="78" height="25">狂神的扩展</span>';

    return kuangshen;
});