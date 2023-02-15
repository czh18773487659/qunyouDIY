game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "群友DIY2023",

        content: function (config, pack) {
            if (lib.rank.rarity.junk) {
                lib.rank.rarity.junk.addArray([]);
            }
            if (lib.rank.rarity.common) {
                lib.rank.rarity.common.addArray(["qunyou_xiefuren"]);
            }
            if (lib.rank.rarity.rare) {
                lib.rank.rarity.rare.addArray(["qunyou_202301_caozhang","qunyou_202302_liubei","qunyou_202302_dailaidongzhu"]);
            }
            lib.rank.rarity.epic.addArray(["qunyou_weidan", "qunyou_luzhi", "qunyou_202301_pujing", "qunyou_202301_fengji","qunyou_202301_donghe","qunyou_202302_jiangwei"]);
            lib.rank.rarity.legend.addArray(["qunyou_huangyueying", "qunyou_qun_huangyueying", "qunyou_xietiao", "qunyou_202301_gansidui", "qunyou_mou_zhanghe"]);

            //阵亡配音
            lib.skill._dieAudio={
                trigger:{global:'dieBegin'},							
                priority:2,
                forced:true,
                unique:true,    
                content:function (){			
                    game.playAudio('..','extension','群友DIY2023/audio/die',trigger.player.name);
                },
            };
        },
        precontent: function (qunyou) {
            if (qunyou.enable) {
                game.import('character', function () {
                    var qunyou = {
                        name: 'qunyou', //武将包命名（必填）
                        connect: false, //该武将包是否可以联机（必填）
                        //武将分栏
                        characterSort: {
                            qunyou: {
                                "yuandan": ["qunyou_xiefuren", "qunyou_weidan", "qunyou_luzhi", "qunyou_huangyueying", "qunyou_qun_huangyueying", "qunyou_xietiao"],
                                "month1": ["qunyou_202301_gansidui", "qunyou_202301_pujing", "qunyou_202301_caozhang", "qunyou_202301_fengji", "qunyou_mou_zhanghe","qunyou_202301_donghe"],
                                "month2": ["qunyou_202302_jiangwei","qunyou_202302_liubei","qunyou_202302_dailaidongzhu"],
                            },
                        },
                        character: {
                            "qunyou_huangyueying": ["female", "shu", 3, ["qunyou_jizhi", "qunyou_qicai"],
                                []
                            ],
                            "qunyou_qun_huangyueying": ["female", "qun", 3, ["qunyou_yanrong", "qunyou_zhice"],
                                []
                            ],
                            "qunyou_luzhi": ["male", "qun", 3, ["qunyou_mingren", "qunyou_shouye", "qunyou_fenghan"],
                                []
                            ],
                            "qunyou_xiefuren": ["female", "wu", 1, ["qunyou_xinyou", "qunyou_guiwang", "qunyou_juexiang"],
                                []
                            ],
                            "qunyou_weidan": ["male", "wei", 3, ["qunyou_chengwen", "qunyou_dengjie", "qunyou_zhuanzhang"],
                                []
                            ],
                            "qunyou_xietiao": ["female", "wu", 3, ["qunyou_piaomiao", "qunyou_yunque"],
                                []
                            ],
                            "qunyou_202301_gansidui": ["male", "qun", 4, ["qunyou_202301_gansi"],
                                []
                            ],
                            "qunyou_202301_pujing": ["male", "qun", 3, ["qunyou_202301_jiemou", "qunyou_202301_yunyou", "qunyou_202301_duhua"],
                                []
                            ],
                            "qunyou_202301_caozhang": ["male", "wei", 4, ["qunyou_202301_xiongwu", "qunyou_202301_jiangchi"],
                                []
                            ],
                            "qunyou_202301_fengji": ["male", "qun", 3, ["qunyou_202301_jiebi", "qunyou_202301_zishi"],
                                []
                            ],
                            "qunyou_mou_zhanghe": ["male", "wei", 4, ["qunyou_shibian", "qunyou_liaodi"],
                                []
                            ],
                            "qunyou_202301_donghe": ["male", "shu", 3, ["qunyou_202301_hezhi", "qunyou_202301_minxi"],
                                []
                            ],
                            "qunyou_202302_jiangwei": ["male", "shu", 4, ["qunyou_202302_tiaoxin", "qunyou_202302_huzhen","qunyou_202302_jizhi"],
                                []
                            ],
                            "qunyou_202302_liubei": ["male", "shu", 4, ["qunyou_202302_renwang", "qunyou_202302_renze","qunyou_202302_jiangqi"],
                                ["zhu"]
                            ],
                            "qunyou_202302_dailaidongzhu":["male", "qun", 4, ["qunyou_202302_manyi", "qunyou_202302_weixiang","qunyou_202302_panqin"],
                                ['doublegroup:qun:shu']
                            ],
                        },
                        skill: {
                            //qunyou_huangyueying
                            "qunyou_jizhi":{
                                trigger:{
                                    global:"useCard",
                                },
                                frequent:true,
                                filter:function (event,player){
                                    var type=get.type(event.card,'trick');
                                    return type=='trick'&&event.card.isCard;
                                },
                                content:function (){
                                    player.draw();
                                },
                                onremove:function(player){
                                    player.removeGaintag('qunyou_jizhi');
                                },
                                ai:{
                                    threaten:1.4,
                                    noautowuxie:true,
                                },
                                mod:{
                                    ignoredHandcard:function (card,player){
                                        if(card.hasGaintag('qunyou_jizhi')) return true;
                                    },
                                    cardDiscardable:function (card,player,name){
                                        if(name=='phaseDiscard'&&card.hasGaintag('qunyou_jizhi')) return false;
                                    },
                                },
                                group:["qunyou_jizhi_reset","qunyou_jizhi_count"],
                                subSkill:{
                                    reset:{
                                        trigger:{
                                            global:["phaseAfter"],
                                        },
                                        silent:true,
                                        priority:10,
                                        forced:true,
                                        popup:false,
                                        content:function (){
                                            player.removeGaintag('qunyou_jizhi');
                                        },
                                        sub:true,
                                    },
                                    count:{
                                        trigger:{player:'gainBegin'},
                                        forced:true,
                                        silent:true,
                                        filter:function(event,player){
                                            return event.getParent(2).name=="qunyou_jizhi";
                                        },
                                        content:function(){
                                            trigger.gaintag.add('qunyou_jizhi');
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_qicai":{
                                mod:{
                                    targetInRange:function (card,player,target,now){
                                        var type=get.type(card);
                                        if(type=='trick'||type=='delay') return true;
                                    },
                                    canBeDiscarded:function (card){
                                        if(get.position(card)=='e'&&['equip2','equip5'].contains(get.subtype(card))) return false;
                                    },
                                },
                                trigger:{
                                    player:"useCard2",
                                },
                                direct:true,
                                filter:function (event,player){
                                    if(get.type(event.card)!='trick') return false;
                                    var info=get.info(event.card);
                                    if(info.notarget) return false;
                                    return true;
                                },
                                content:function (){
                                    'step 0'
                                    var goon=false;
                                    var info=get.info(trigger.card);
                                    var players=game.filterPlayer();
                                    for(var i=0;i<players.length;i++){
                                        if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                                            goon=true;break;
                                        };
                                    };
                                    if(goon){
                                        player.chooseTarget('是否增加任意名'+get.translation(trigger.card)+'的目标？',[1,Infinity],function(card,player,target){
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
                                            event.goto(3);
                                        }
                                    }
                                    'step 1'
                                    if(result.bool){
                                        if(!event.isMine()) game.delayx();
                                            event.targets=result.targets;
                                    }
                                    else{
                                        event.goto(3);
                                    }
                                    'step 2'
                                    if(event.targets){
                                        player.logSkill('qunyou_qicai',event.targets);
                                        trigger.targets.addArray(event.targets);
                                    }
                                    event.finish();
                                    'step 3'
                                    player.chooseTarget('是否减少任意名'+get.translation(trigger.card)+'的目标？',[1,Infinity],function(card,player,target){
                                        return _status.event.targets.contains(target);
                                    }).set('ai',function(target){
                                        var trigger=_status.event.getTrigger();
                                        return -get.effect(target,trigger.card,trigger.player,_status.event.player);
                                    }).set('targets',trigger.targets);
                                    'step 4'
                                    if(result.bool){
                                        event.targets=result.targets;
                                        if(event.isMine()){
                                            player.logSkill('qunyou_qicai',event.targets);
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
                                    'step 5'
                                    player.logSkill('qunyou_qicai',event.targets);
                                },
                            },

                            //qunyou_qun_huangyueying
                            "qunyou_yanrong":{
                                trigger:{
                                    target:"useCardToTargeted",
                                },
                                forced:true,
                                preHidden:true,
                                filter:function (event,player){
                                    return !event.player.hasSkill("qunyou_yanrong_mark")&&event.player!=player;
                                },
                                content:function (){
                                    "step 0"
                                    trigger.getParent().excluded.add(player);
                                    trigger.player.chooseToDiscard(1,'he',true);
                                    trigger.player.discardPlayerCard(player,true,'he');
                                    trigger.player.addSkill("qunyou_yanrong_mark");
                                },
                                group:["qunyou_yanrong_draw","qunyou_yanrong_add"],
                                subSkill:{
                                    mark:{
                                        mark:true,
                                        direct:true,
                                        marktext:"掩",
                                        intro:{
                                            content:"已触发掩容",
                                            name:"掩容",
                                        },
                                        sub:true,
                                    },
                                    draw:{
                                        forced:true,
                                        popup:false,
                                        trigger:{
                                            player:"useCardToPlayer",
                                        },
                                        filter:function (event,player){
                                            return !event.target.hasSkill("qunyou_yanrong_mark");
                                        },
                                        content:function (){
                                            player.draw();
                                        },
                                        sub:true,
                                    },
                                    add:{
                                        trigger:{
                                            player:"useCard2",
                                        },
                                        direct:true,
                                        filter:function (event,player){
                                            if(get.type(event.card)!='trick') return false;
                                            var info=get.info(event.card);
                                            if(info.allowMultiple==false||info.notarget) return false;
                                            return game.hasPlayer(function(current){
                                                return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current)&&!current.hasSkill("qunyou_yanrong_mark");
                                            });
                                        },
                                        content:function (){
                                            'step 0'
                                            var prompt2='为'+get.translation(trigger.card)+'增加一个目标';
                                            var next=player.chooseTarget(get.prompt('qunyou_qicai'),function(card,player,target){
                                                var player=_status.event.player;
                                                if(_status.event.targets.contains(target)) return false;
                                                if(target.hasSkill("qunyou_yanrong_mark")) return false;
                                                return lib.filter.targetEnabled2(_status.event.card,player,target)&&lib.filter.targetInRange(_status.event.card,player,target);
                                            });
                                            next.set('prompt2',prompt2);
                                            next.set('ai',function(target){
                                                var trigger=_status.event.getTrigger();
                                                var player=_status.event.player;
                                                return get.effect(target,trigger.card,player,player)*(_status.event.targets.contains(target)?-1:1);
                                            });
                                            next.set('targets',trigger.targets).set('card',trigger.card);
                                            'step 1'
                                            if(result.bool){
                                                if(!event.isMine()&&!event.isOnline()) game.delayx();
                                                event.targets=result.targets;
                                            };
                                            'step 2'
                                            if(event.targets){
                                                player.logSkill('qunyou_qicai',event.targets);
                                                trigger.targets.addArray(event.targets);
                                            };
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_zhice":{
                                enable:"phaseUse",
                                filter:function (event,player){
                                    return game.hasPlayer(function(current){
                                        return !current.hasSkill("qunyou_yanrong_mark")
                                        &&!current.hasSkill('qunyou_zhice_reset')
                                        &&current.countDiscardableCards(player,'he')>1;
                                    });
                                },
                                filterTarget:function(card,player,target){
                                    return !target.hasSkill("qunyou_yanrong_mark")
                                    &&!target.hasSkill('qunyou_zhice_reset')
                                    &&target.countDiscardableCards(player,'he')>1;
                                },
                                init:function (player){
                                    if(!player.storage.qunyou_zhice_jinnang) player.storage.qunyou_zhice_jinnang=[];
                                },
                                content:function(){
                                    "step 0"
                                    player.discardPlayerCard(target,2,true);
                                    target.addTempSkill('qunyou_zhice_reset');
                                    "step 1"
                                    var list1=[];
                                    var bool=false;
                                    for(var i of lib.inpile){
                                        if(get.type(i)=='trick'&&player.hasUseTarget({name:i,isCard:true})&&!player.storage.qunyou_zhice_jinnang.contains(i)) bool=true;
                                    };
                                    list1.push('摸一张牌');
                                    if(bool) list1.push('视为使用一张未因此使用过的普通锦囊牌');
                                    list1.push('cancel2');
                                    player.chooseControl(list1);
                                    "step 2"
                                    event.control=result.control;
                                    if(event.control=='cancel2') event.finish;
                                    "step 3"
                                    if(event.control=='摸一张牌'){
                                        player.draw();
                                        player.logSkill('qunyou_zhice');
                                    };
                                    "step 4"
                                    if(event.control=='视为使用一张未因此使用过的普通锦囊牌'){
                                        var list2=[];
                                        for(var i of lib.inpile){
                                            if(get.type(i)=='trick'&&!player.storage.qunyou_zhice_jinnang.contains(i)) list2.push(['锦囊','',i]);
                                        };
                                        var next=player.chooseButton(['视为使用一张未因此使用过的普通锦囊牌',[list2,'vcard']]);
                                        next.set('filterButton',function(button){
                                            return player.hasUseTarget({name:button.link[2],isCard:true})
                                        });
                                        next.set('check',function(button){
                                            return _status.event.player.getUseValue({name:button.link[2],isCard:true});
                                        });
                                    };
                                    "step 5"
                                    if(result.links[0][2]){
                                        lib.skill.qunyou_zhice_x.viewAs={name:result.links[0][2],isCard:true};
                                        lib.skill.qunyou_zhice_x.prompt='请选择'+get.translation(result.links[0][2])+'的目标';
                                        var next=player.chooseToUse();
                                            next.logSkill='qunyou_zhice';
                                            next.set('norestore',true);
                                            next.set('_backupevent','qunyou_zhice_x');
                                            next.backup('qunyou_zhice_x');
                                        player.storage.qunyou_zhice_jinnang.push(result.links[0][2]);
                                    };
                                },
                                subSkill:{
                                    x:{
                                        filterCard:()=>false,
                                        selectCard:-1,
                                        popname:true,
                                        sub:true,
                                    },
                                    reset:{
                                        marktext:"智",
                                        intro:{
                                            content:"本回合已被智策弃牌",
                                            name:"智策",
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_mingren":{
                                marktext:"任",
                                intro:{
                                    content:"expansion",
                                    markcount:"expansion",
                                },
                                onremove:function (player,skill){
                                    var cards=player.getExpansions(skill);
                                    if(cards.length) player.loseToDiscardpile(cards);
                                },
                                trigger:{
                                    player:"phaseBegin",
                                },
                                frequent:true,
                                filter:function (event,player){
                                    return !player.getExpansions('qunyou_mingren').length;
                                },
                                content:function (){
                                    'step 0'
                                    player.draw(2);
                                    'step 1'
                                    if(player.countCards('h')<2) event.finish();
                                    else player.chooseCard('h',2,'将两张手牌置于武将牌上，称为“任”',true).set('ai',function(card){
                                        return 6-get.value(card);
                                    });
                                    'step 2'
                                    if(result.bool){
                                        player.addToExpansion(result.cards,player,'give','log').gaintag.add('qunyou_mingren');
                                    };
                                },
                                mod:{
                                    maxHandcard:function (player,num){
                                    return num+player.getExpansions('qunyou_mingren').length;
                                    },
                                },
                                group:"qunyou_mingren_jieshu",
                                subSkill:{
                                    jieshu:{
                                        trigger:{
                                            player:"phaseJieshuBegin",
                                        },
                                        filter:function (event,player){
                                            return player.countCards('h')>0&&player.getExpansions('qunyou_mingren').length>0;
                                        },
                                        direct:true,
                                        content:function (){
                                            "step 0"
                                            var cards=player.getExpansions('qunyou_mingren');
                                            if(!cards.length||!player.countCards('h')){
                                                event.finish();
                                                return;
                                            }
                                            var next=player.chooseToMove('明任：是否交换“任”和手牌？');
                                            next.set('list',[
                                                [get.translation(player)+'（你）的任',cards],
                                                ['手牌区',player.getCards('h')],
                                            ]);
                                            next.set('filterMove',function(from,to){
                                                return typeof to!='number';
                                            });
                                            next.set('processAI',function(list){
                                                var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
                                                    return get.value(a)-get.value(b);
                                                }),cards2=cards.splice(0,player.getExpansions('qixing').length);
                                                return [cards2,cards];
                                            });
                                            "step 1"
                             
                                           if(result.bool){
                                                var pushs=result.moved[0],gains=result.moved[1];
                                                pushs.removeArray(player.getExpansions('qunyou_mingren'));
                                                gains.removeArray(player.getCards('h'));
                                                if(!pushs.length||pushs.length!=gains.length) return;
                                                player.addToExpansion(pushs,player,'giveAuto').gaintag.add('qunyou_mingren');
                                                game.log(player,'将',pushs,'作为“任”置于武将牌上');
                                                player.gain(gains,'gain2');
                                            };
                                        },
                                        sub:true,
                                    },
                                },
                            },

                            //qunyou_luzhi
                            "qunyou_shouye":{
                                enable:["chooseToUse","chooseToRespond"],
                                hiddenCard:function (player,name){
                                    if(get.type(name)=='basic'&&lib.inpile.contains(name)&&!player.storage.qunyou_shouye.contains(i)) return true;
                                },
                                init:function (player){
                                    if(!player.storage.qunyou_shouye) player.storage.qunyou_shouye=[];
                                },
                                filter:function (event,player){
                                    if(event.responded||(player.countCards('h')+player.getExpansions('qunyou_mingren').length< 2)) return false;
                                    for(var i of lib.inpile){
                                        if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)&&!player.storage.qunyou_shouye.contains(i)) return true;
                                    };
                                    return false;
                                },
                                chooseButton:{
                                    dialog:function (event,player){
                                        var list=[];
                                        for(var i of lib.inpile){
                                            if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)&&!player.storage.qunyou_shouye.contains(i)){
                                                list.push(['基本','',i]);
                                                if(i=='sha'){
                                                    for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                                                };
                                            };
                                        };
                                        return ui.create.dialog('授业',[list,'vcard'],'hidden');
                                    },
                                    check:function (button){
                                        if(button.link[2]=='shan') return 3;
                                        var player=_status.event.player;
                                        if(button.link[2]=='jiu'){
                                            if(player.getUseValue({name:'jiu'})<=0) return 0;
                                            if(player.countCards('h','sha')) return player.getUseValue({name:'jiu'});
                                        };
                                        return player.getUseValue({name:button.link[2],nature:button.link[3]})/4;
                                    },
                                    backup:function (links,player){
                                        return {
                                            selectCard:-1,
                                            filterCard:()=>false,
                                            viewAs:{
                                                name:links[0][2],
                                                nature:links[0][3],
                                                suit:'none',
                                                number:null,
                                                isCard:true,
                                            },
                                            precontent:function(){
                                                "step 0"
                                                player.chooseTarget("选择移交牌的对象",1,true,function(card,player,target){
                                                    return target!=player
                                                }).set('ai',function(target){
                                                    return get.attitude(player,target)+0.5;
                                                });
                                                "step 1"
                                                event.target=result.targets[0];
                                                var list = player.getExpansions('qunyou_mingren');
                                                list.push(get.copy(player.getCards('h')));
                                                player.chooseCardButton("请移交2张牌",2,player.getExpansions('qunyou_mingren').concat(get.copy(player.getCards('h'))),true);
                                                "step 2"
                                                if(result.bool){
                                                    event.target.gain(result.links,player,'giveAuto');
                                                }
                                            },
                                            onuse:function(result,player){
                                                player.storage.qunyou_shouye.push(result.card.name);
                                            },
                                        };
                                    },
                                },
                                group:["qunyou_shouye_reset"],
                                subSkill:{
                                    reset:{
                                        trigger:{
                                            global:"phaseEnd",
                                        },
                                        forced:true,
                                        preHidden:true,
                                        charlotte:true,
                                        content:function (){
                                            player.storage.qunyou_shouye=[];
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_fenghan":{
                                trigger:{
                                    global:"judge",
                                },
                                filter:function (event,player){
                                    return get.suit(event.player.judging[0]) == 'spade';
                                },
                                content:function (){
                                    "step 0"
                                    var card=get.cards()[0];
                                    event.card=card;
                                    game.cardsGotoOrdering(card).relatedEvent=trigger;
                                    "step 1"
                                    player.$throw(card);
                                    if(trigger.player.judging[0].clone){
                                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                        game.broadcast(function(card){
                                            if(card.clone){
                                                card.clone.classList.remove('thrownhighlight');
                                            }
                                        },trigger.player.judging[0]);
                                        game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
                                    }
                                    player.addToExpansion(trigger.player.judging[0],player,'give','log').gaintag.add('qunyou_mingren');
                                    trigger.player.judging[0]=card;
                                    game.log(trigger.player,'的判定牌改为',card);
                                    game.delay(2);
                                },
                                ai:{
                                    rejudge:true,
                                    tag:{
                                        rejudge:1,
                                    },
                                },
                            },

                            //qunyou_xiefuren
                            "qunyou_xinyou":{
                                trigger:{
                                    player:"loseAfter",
                                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                                },
                                direct:true,
                                superCharlotte:true,
                                filter:function (event,player){
                                    if(player.countCards('h')) return false;
                                    var evt=event.getl(player);
                                    return evt&&evt.player==player&&evt.hs&&evt.hs.length>0&&evt.hs.length<=3;
                                },
                                content:function(){
                                    "step 0"
                                    event.forceDie=true;
                                    if(player.isDying()||player.countCards('h')>0){
                                        event.finish();
                                        return;
                                    }
                                    _status.dying.unshift(player);
                                    game.broadcast(function(list){
                                        _status.dying=list;
                                    },_status.dying);
                                    event.trigger('dying');
                                    game.log(player,'濒死');
                                    "step 1"
                                    delete event.filterStop;
                                    if(player.countCards('h')>0){
                                        _status.dying.remove(player);
                                        game.broadcast(function(list){
                                            _status.dying=list;
                                        },_status.dying);
                                        event.finish();
                                    }
                                    "step 2"
                                    _status.dying.remove(player);
                                    game.broadcast(function(list){
                                        _status.dying=list;
                                    },_status.dying);
                                    if(player.countCards('h')==0&&!player.nodying) player.die(event.reason);
                                },
                                
                                mod:{
                                    maxHandcard:function (player,num){
                                        return Infinity;
                                    },
                                },
                                group:["qunyou_xinyou_discard","qunyou_xinyou_defend"],
                                subSkill:{
                                    discard:{
                                        trigger:{
                                            player:"phaseJieshuBegin",
                                        },
                                        direct:true,
                                        superCharlotte:true,
                                        filter:function (event,player){
                                            //if(player.getHistory('skipped').contains('phaseUse')) return false;
                                            return player.getHistory('useCard').length==0;
                                        },
                                        content:function (){
                                            player.chooseToDiscard('hes',2,true)
                                        },
                                        sub:true,
                                    },
                                    defend:{
                                        trigger:{
                                            player:["damageBegin3","loseHpBegin"],
                                        },
                                        direct:true,
                                        superCharlotte:true,
                                        forced:true,
                                        content:function (){
                                            "step 0"
                                            trigger.cancel();
                                            player.chooseToDiscard('hes',trigger.num,true);
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_guiwang":{
                                audio:"ext:群友DIY2023-1:2",
                                init:function (player){
                                    player.storage.qunyou_guiwang=false;
                                },
                                filter:function (event,player){
                                    return player.countCards('h')==0&&player.storage.qunyou_guiwang==false;
                                },
                                trigger:{
                                    player:"dying",
                                },
                                skillAnimation:true,
                                animationColor:"gray",
                                limited:true,
                                unique:true,
                                marktext:"归",
                                mark:true,
                                intro:{
                                    content:"limited",
                                },
                                content:function (){
                                    "step 0"
                                    player.awakenSkill('qunyou_guiwang');
                                    var targets=game.filterPlayer();
                                    targets.remove(player);
                                    targets.sort(lib.sort.seat);
                                    event.targets=targets;
                                    event.num=0;
                                    "step 1"
                                    if(event.targets[num].countGainableCards(player,'e')){
                                        player.gainPlayerCard(event.targets[num],true,'e');
                                    };
                                    if(++event.num<event.targets.length) event.redo();
                                    "step 2"
                                    player.turnOver();
                                },
                            },
                            "qunyou_juexiang":{
                                trigger:{
                                    global:"gameStart",
                                },
                                forced:true,
                                content:function (){
                                    "step 0"
                                    player.draw(9);
                                },
                                group:["qunyou_juexiang_draw","qunyou_juexiang_revive"],
                                subSkill:{
                                    draw:{
                                        trigger:{
                                            player:"loseAfter",
                                            global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                                        },
                                        direct:true,
                                        filter:function (event,player){
                                            if(["qunyou_juexiang_draw","qunyou_xinyou_discard"].contains(event.getParent(3).name)) return false;
                                            var evt=event.getl(player);
                                            return evt&&evt.cards2&&evt.cards2.length>1;
                                        },
                                        content:function(){
                                            'step 0'
                                            player.draw(trigger.num);
                                            'step 1'
                                            event.num=Math.min(trigger.num,3);
                                            if(trigger.getParent(3).name=="qunyou_xinyou_defend") event.num--;
                                            player.chooseToDiscard(event.num,true);
                                        },
                                        sub:true,
                                    },
                                    revive:{
                                        trigger:{
                                            player:"dying",
                                        },
                                        filter:function (event,player){
                                            return player.countCards('h')==0;
                                        },
                                        direct:true,
                                        content:function (){
                                            "step 0"
                                            var targets=game.filterPlayer();
                                            targets.remove(player);
                                            targets.sort(lib.sort.seat);
                                            event.targets=targets;
                                            event.num=0;
                                            "step 1"
                                            if(event.targets[num].countCards('he')){
                                                event.targets[num].chooseCard('he',get.translation(player)+'濒死，是否交给'+get.translation(player)+'一张牌？').set('ai',function(card){
                                                    if(_status.event.goon) return 7-get.value(card);
                                                    return 0;
                                                }).set('goon',get.attitude(target,player)>0);
                                            };
                                            'step 2'
                                            if(result.bool){
                                                player.gain(result.cards,event.targets[num],'giveAuto');
                                                event.finish();
                                            }
                                            else{
                                                game.log(event.targets[num],'拒绝给牌');
                                            };
                                            if(++event.num<event.targets.length) event.goto(1);
                                        },
                                        sub:true,
                                    },
                                },
                            },

                            //qunyou_weidan
                            "qunyou_chengwen": {
                                trigger: {
                                    player: "loseAfter",
                                    global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                                },
                                forced: true,
                                filter: function (event, player) {
                                    var map = {};
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        var name = hs[i].name;
                                        if (!map[name]) {
                                            map[name] = 1;
                                        } else {
                                            return false;
                                        }
                                    }
                                    var evt = event.getl(player);
                                    return evt && evt.player == player && evt.hs && evt.hs.length > 0;
                                },
                                content: function () {
                                    player.draw();
                                },
                            },
                            "qunyou_dengjie": {
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    return player.countCards('he') >= Math.max(1, (player.getStat('skill').qunyou_dengjie || 0));
                                },
                                selectCard: function () {
                                    return Math.max(1, (_status.event.player.getStat('skill').qunyou_dengjie || 0));
                                },
                                prompt: function () {
                                    return '弃置' + get.cnNumber(Math.max(1, (_status.event.player.getStat('skill').qunyou_dengjie || 0))) + '张牌使下张牌无使用与次数限制';
                                },
                                check: function (card) {
                                    var num = _status.event.player.countCards('h', {
                                        color: get.color(card)
                                    });
                                    if (get.position(card) == 'e') num++;
                                    return (Math.max(4, 7.1 - num) - get.value(card)) / num;
                                },
                                filterCard: true,
                                position: "he",
                                content: function () {
                                    player.addSkill("qunyou_dengjie_wuxian");
                                },
                                subSkill: {
                                    wuxian: {
                                        mod: {
                                            targetInRange: function (card, player, target) {
                                                return true;
                                            },
                                            cardUsableTarget: function (card, player, target) {
                                                return true;
                                            },
                                        },
                                        trigger: {
                                            player: "useCardToPlayered",
                                        },
                                        forced: true,
                                        charlotte: true,
                                        preHidden: true,
                                        content: function () {
                                            player.removeSkill("qunyou_dengjie_wuxian");
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_zhuanzhang": {
                                unique: true,
                                limited: true,
                                audio: "ext:群友DIY2023:2",
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                filter: function (event, player) {
                                    return !player.storage.qimou;
                                },
                                init: function (player) {
                                    player.storage.qimou = false;
                                },
                                mark: true,
                                intro: {
                                    content: "limited",
                                },
                                skillAnimation: true,
                                animationColor: "orange",
                                content: function () {
                                    'step 0'
                                    player.chooseToDiscard(true, 'h', player.countCards('h'));
                                    'step 1'
                                    var list = [];
                                    var namelist = [];
                                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                        var node = ui.cardPile.childNodes[i];
                                        var name = get.name(node);
                                        if (!namelist.contains(name) && lib.filter.cardEnabled(node, player)) {
                                            list.push(node);
                                            namelist.push(name);
                                            if (list.length >= 5) break;
                                        }
                                    }
                                    player.gain(list, 'gain2');
                                },
                            },

                            //qunyou_xietiao
                            "qunyou_piaomiao":{
                                trigger:{
                                    player:"dying",
                                },
                                locked:true,
                                charlotte:true,
                                skillAnimation:true,
                                animationColor:"green",
                                derivation:['qunyou_cuizhi'],
                                init:function (player){
                                    if(!player.storage.qunyou_piaomiao_nouse) player.storage.qunyou_piaomiao_nouse=[];
                                },
                                filter:function (event,player){
                                    return player.storage.qunyou_piaomiao_nouse.length<4;
                                },
                                content:function(){
                                    "step 0"
                                    var list = ["spade","heart","club","diamond"];
                                    for(var suit of player.storage.qunyou_piaomiao_nouse) list.remove(suit);
                                    player.chooseControl(list)
                                    .set('prompt',"请选择一种花色无法使用");
                                    "step 1"
                                    event.suit = result.control;
                                    player.addSkill('qunyou_piaomiao_nouse');
                                    player.storage.qunyou_piaomiao_nouse.push(event.suit);
                                    player.storage.qunyou_piaomiao_nouse.sort(function(a,b){
                                        return lib.suit.indexOf(b)-lib.suit.indexOf(a);
                                    });
                                    player.syncStorage('qunyou_piaomiao_nouse');
                                    player.draw(2);
                                    var num=3-player.hp;
                                    if(num) player.recover(num);
                                    "step 2"
                                    if(game.HasExtension('十周年UI')){
                                        game.broadcastAll(function(player){
                                            var list='';
                                            for(var suit of player.getStorage('qunyou_piaomiao_nouse')) list+=get.translation(suit);
                                            if(player.marks.qunyou_piaomiao_nouse) player.marks.qunyou_piaomiao_nouse.firstChild.innerHTML=list;
                                        },player);
                                    };
                                    "step 3"
                                    var flag_black = player.storage.qunyou_piaomiao_nouse.contains("spade")&&player.storage.qunyou_piaomiao_nouse.contains("club")&&(event.suit=="spade"||event.suit=="club");
                                    var flag_red = player.storage.qunyou_piaomiao_nouse.contains("heart")&&player.storage.qunyou_piaomiao_nouse.contains("diamond")&&(event.suit=="heart"||event.suit=="diamond");
                                    
                                    if(player.storage.qunyou_piaomiao_nouse.length==4){
                                        player.loseMaxHp(2);
                                        player.addSkill("qunyou_piaomiao_wuxian");
                                    }
                                    else if(flag_black||flag_red){
                                        player.gainMaxHp();
                                        player.addSkill("qunyou_cuizhi");
                                    };
                                },
                                subSkill:{
                                    nouse:{
                                        charlotte:true,
                                        onremove:true,
                                        mark:true,
                                        intro:{
                                            markcount:function(storage){
                                                if(game.HasExtension('十周年UI')) return undefined;
                                                return storage.length;
                                            },
                                            content:function(storage,player){
                                                if(player.storage.qunyou_piaomiao_nouse.length==4) return "使用牌无次数和距离限制";
                                                var list='';
                                                for(var suit of player.getStorage('qunyou_piaomiao_nouse')) list+=get.translation(suit);
                                                return "无法使用"+list+"花色的牌";
                                            },
                                        },
                                        mod:{
                                            cardEnabled:function (card,player){
                                                if(player.storage.qunyou_piaomiao_nouse.length<4&&player.storage.qunyou_piaomiao_nouse.contains(get.suit(card))) return false;
                                            }, 
                                        }, 
                                        sub:true,
                                    },
                                    wuxian:{
                                        mod:{
                                            targetInRange:function (card,player,target){
                                                return true;
                                            },
                                            cardUsableTarget:function (card,player,target){
                                                return true;
                                            },
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_yunque":{
                                trigger:{
                                    player:"phaseJieshuBegin",
                                },
                                frequent:true,
                                filter:function(event,player){
                                    var list=[],history=player.getHistory('useCard');
                                    for(var i of history) list.add(get.suit(i.card));
                                    return list.length>0;
                                },
                                content:function(){
                                    "step 0"
                                    var list=[],history=player.getHistory('useCard');
                                    for(var i of history) list.add(get.suit(i.card));
                                    event.list = list;
                                    "step 1"
                                    if(event.list.length>0){
                                        player.chooseTarget('弃置场上一张牌',1,function(card,player,target){
                                            return target.countCards('ej');
                                        });
                                    }
                                    else event.finish();
                                    "step 2"
                                    if(result.bool) player.discardPlayerCard(result.targets[0],'ej',true);
                                    else event.finish();
                                    "step 3"
                                    if(event.list.length>1) player.chooseTarget('令一名角色回复一点体力',1);
                                    else event.finish();
                                    "step 4"
                                    if(result.bool) result.targets[0].recover();
                                    else event.finish(); 
                                    "step 5"
                                    if(event.list.length>2) player.chooseBool("摸等同于自身体力上限的牌,自身进入濒死。");
                                    else event.finish();
                                    "step 6"
                                    if(result.bool){      
                                    player.draw(player.maxHp);
                                    player.loseHp(player.hp);
                                    }
                                    else event.finish();
                                },
                            },
                            "qunyou_cuizhi":{
                                trigger:{
                                    global:"damageSource",
                                },
                                filter:function (event,player){
                                    if(player==event.source) return false;
                                    return player.countCards('h')<=event.source.countCards('h')||player.hp<=event.source.hp;
                                },
                                content:function (){
                                    "step 0"
                                    if(player.countCards('h')<=trigger.source.countCards('h')){
                                        player.chooseBool("是否获得"+get.translation(trigger.source)+"的一张牌")
                                    };
                                    "step 1"
                                    if(result.bool){
                                        player.gainPlayerCard(trigger.source,'he',true,1);
                                    };
                                    "step 2"
                                    if(player.hp<=trigger.source.hp){
                                        player.chooseBool("是否获得"+get.translation(trigger.source)+"的1点体力")
                                    };
                                    "step 3"
                                    if(result.bool){
                                        trigger.source.loseHp();
                                        player.recover();
                                    };
                                },
                            },

                            //202301_
                            "qunyou_202301_gansi":{
                                audio:['wuhun2',1],
                                enable:"phaseUse",
                                usable:1,
                                filterTarget:function(card,player,target){
                                    return target!=player;
                                },
                                check:function(target){
                                    return get.attitude(_status.event.player,target)*(target.isDamaged()?2:1);
                                },
                                content:function (){
                                    'step 0'
                                    target.die();
                                    'step 1'
                                    player.die();
                                },
                                ai:{
                                    order:1,
                                },
                            },

                            //qunyou_202301_pujing
                            "qunyou_202301_jiemou":{
                                trigger:{
                                    player:"phaseEnd",
                                },
                                content:function (){
                                    'step 0'
                                    player.draw();
                                    'step 1'
                                    player.chooseCardTarget({
                                        position:'he',
                                        filterCard:true,
                                        selectCard:1,
                                        forced:true,
                                        filterTarget:function(card,player,target){
                                            return player!=target;
                                        },
                                        ai1:function(card){
                                            if(get.attitude(_status.event.player,_status.currentPhase)<0&&_status.currentPhase.needsToDiscard()&&card.name!='du') return -1;
                                            for(var i=0;i<ui.selected.cards.length;i++){
                                                if(get.type(ui.selected.cards[i])==get.type(card)||(ui.selected.cards[i].name=='du'&&card.name!='du')) return -1;
                                            };
                                            if(card.name=='du') return 20;
                                            return (_status.event.player.countCards('h')-_status.event.player.hp);
                                        },
                                        ai2:function(target){
                                            if(get.attitude(_status.event.player,_status.currentPhase)<0) return -1;
                                            var att=get.attitude(_status.event.player,target);
                                            if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                                                if(target.hasSkillTag('nodu')) return 0;
                                                return 1-att;
                                            };
                                            if(target.countCards('h')>_status.event.player.countCards('h')) return 0;
                                            return att-4;
                                        },
                                        prompt:get.prompt2('qunyou_202301_jiemou'),
                                    });
                                    "step 2"
                                    if(result.bool){
                                    var target=result.targets[0];
                                    var cards=result.cards;
                                    target.addToExpansion(cards,player,'give').gaintag.add('qunyou_202301_jiemou');
                                    }
                                },
                                intro:{
                                    content:"expansion",
                                    markcount:"expansion",
                                },
                                onremove:function (player,skill){
                                    var cards=player.getExpansions(skill);
                                    if(cards.length) player.loseToDiscardpile(cards);
                                },
                                group:"qunyou_202301_jiemou_kongzhi",
                                subSkill:{
                                    kongzhi:{
                                        trigger:{
                                            global:"useCardToPlayered",
                                        },
                                        filter:function (event,player,name){
                                            var cards=event.target.getExpansions('qunyou_202301_jiemou');
                                            for(var i of cards){
                                                if(get.color(event.card)==get.color(i)) return true;
                                            };
                                            return false;
                                        },
                                        content:function (){
                                            "step 0"
                                            event.list = []
                                            var cards=trigger.target.getExpansions('qunyou_202301_jiemou');
                                            for(var i of cards){
                                                if(get.color(trigger.card)==get.color(i)) event.list.push(i);
                                            };
                                            trigger.player.gain(event.list,'gain2','log');
                                            "step 1"
                                            trigger.getParent().excluded.add(trigger.target);
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_202301_yunyou":{
                                trigger:{
                                    player:"loseEnd",
                                },
                                forced:true,
                                locked:true,
                                init:function (player){
                                    if(!player.storage.qunyou_202301_yunyou_suit) player.storage.qunyou_202301_yunyou_suit = [];
                                },
                                filter:function (event,player){
                                    return player==_status.currentPhase;
                                },
                                content:function (){
                                    "step 0"
                                    for(var card of trigger.cards){
                                        var suit = get.suit(card);
                                        if(!player.storage.qunyou_202301_yunyou_suit.contains(suit)){
                                            player.addSkill('qunyou_202301_yunyou_suit');
                                            player.storage.qunyou_202301_yunyou_suit.push(suit);
                                            player.storage.qunyou_202301_yunyou_suit.sort(function(a,b){
                                                return lib.suit.indexOf(b)-lib.suit.indexOf(a);
                                            });
                                            player.syncStorage('qunyou_202301_yunyou_suit');
                                        };
                                    };
                                    "step 1"
                                    if(game.HasExtension('十周年UI')){
                                        game.broadcastAll(function(player){
                                            var list='';
                                            for(var suit of player.getStorage('qunyou_202301_yunyou_suit')) list+=get.translation(suit);
                                            if(player.marks.qunyou_202301_yunyou_suit) player.marks.qunyou_202301_yunyou_suit.firstChild.innerHTML=list;
                                        },player);
                                    };
                                },
                                group:["qunyou_202301_yunyou_undamage"],
                                subSkill:{
                                    suit:{
                                        charlotte:true,
                                        onremove:true,
                                        mark:true,
                                        intro:{
                                            markcount:function(storage){
                                                if(game.HasExtension('十周年UI')) return undefined;
                                                return storage.length;
                                            },
                                            content:'失去的卡牌的花色：$',
                                        },
                                        sub:true,
                                    },
                                    undamage:{
                                        trigger:{
                                            player:"damageBegin",
                                        },
                                        forced:true,
                                        filter:function (event,player){
                                            if(!event.card || !get.suit(event.card) || get.suit(event.card)=='none')  return false;
                                            var suits = player.storage.qunyou_202301_yunyou_suit;
                                            for(var suit of suits){
                                                if(get.suit(event.card)==suit){
                                                    return true;
                                                }
                                            }
                                            return false;
                                        },
                                        content:function (){
                                            "step 0"
                                            trigger.cancel();
                                            player.addSkill('qunyou_202301_yunyou_suit');
                                            player.storage.qunyou_202301_yunyou_suit.remove(get.suit(trigger.card));
                                            player.storage.qunyou_202301_yunyou_suit.sort(function(a,b){
                                                return lib.suit.indexOf(b)-lib.suit.indexOf(a);
                                            });
                                            player.syncStorage('qunyou_202301_yunyou_suit');
                                            "step 1"
                                            if(game.HasExtension('十周年UI')){
                                                game.broadcastAll(function(player){
                                                    var list='';
                                                    for(var suit of player.getStorage('qunyou_202301_yunyou_suit')) list+=get.translation(suit);
                                                    if(player.marks.qunyou_202301_yunyou_suit) player.marks.qunyou_202301_yunyou_suit.firstChild.innerHTML=list;
                                                },player);
                                            };
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_202301_duhua":{
                                limited:true,
                                unique:true,
                                mark:true,
                                intro:{
                                    content:"limited",
                                },
                                derivation:['qunyou_202301_duhua_wusheng'],
                                skillAnimation:true,
                                init:function (player,skill){
                                    player.storage[skill]=false;
                                },
                                trigger:{
                                    global:"dying",
                                },
                                filter:function (event,player){
                                    return event.player.hp<=0;
                                },
                                content:function (){
                                    "step 0"
                                    player.awakenSkill(event.name);
                                    player.chooseToDiscard([1,5],'he',true);
                                    "step 1"
                                    if(result.bool){
                                    event.drawnum = result.cards.length;
                                    }
                                    trigger.player.discard(trigger.player.getCards('hej'),true);
                                    trigger.player.link(false);
                                    trigger.player.turnOver(false);
                                    "step 2"
                                    trigger.player.draw(event.drawnum);
                                    trigger.player.recover(event.drawnum);
                                    trigger.player.addSkillLog("qunyou_202301_duhua_wusheng");
                                },
                            },
                            "qunyou_202301_duhua_wusheng":{
                                audio:['wusheng',2],
                                group:["new_rewusheng"],
                                direct:true,
                                trigger:{
                                    player:"useCardToPlayered",
                                },
                                filter:function (event){
                                    return event.card.name=='sha'&&get.color(event.card)=='red';
                                },
                                forced:true,
                                logTarget:"target",
                                content:function (){
                                    trigger.target.addTempSkill('qinggang2');
                                    trigger.target.storage.qinggang2.add(trigger.card);
                                },
                                ai:{
                                    "unequip_ai":true,
                                    skillTagFilter:function (player,tag,arg){
                                        if(arg&&arg.name=='sha'&&get.color(arg.card)=='red'&&arg.target) return true;
                                        return false;
                                    },
                                    sub:true,
                                },
                                
                            },

                            //qunyou_202301_caozhang
                            "qunyou_202301_xiongwu": {
                                mod: {
                                    cardUsable: function (card, player, num) {
                                        if (card.name == 'sha') return num + player.getAttackRange() - 1;
                                    },
                                },
                            },
                            "qunyou_202301_jiangchi": {
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    return player.getCardUsable({
                                        name: 'sha'
                                    }) >= 0 && ((player.getStat().skill.qunyou_202301_jiangchi || 0) < player.maxHp);
                                },
                                content: function () {
                                    "step 0"
                                    var list = ["弃一张牌使本回合攻击距离+1且下一张【杀】无视防具"];
                                    if (player.getCardUsable({
                                            name: 'sha'
                                        }) > 0) {
                                        list.push("摸一张牌使本回合使用【杀】次数-1");
                                    }
                                    player.chooseControl(list)
                                        .set('prompt', "请选择一项");
                                    "step 1"
                                    if (result.index == 0) {
                                        player.chooseToDiscard(1, 'he', true);
                                        player.addTempSkill('qunyou_202301_jiangchi_attackRange');
                                        player.addTempSkill('qunyou_202301_jiangchi_qinggang');
                                        player.addMark('qunyou_202301_jiangchi_attackRange', 1, false);
                                    } else {
                                        player.draw();
                                        player.addTempSkill('qunyou_202301_jiangchi_less');
                                        player.addMark('qunyou_202301_jiangchi_less', 1, false);
                                    }
                                },
                                subSkill: {
                                    attackRange: {
                                        charlotte: true,
                                        onremove: true,
                                        mod: {
                                            attackRange: function (player, num) {
                                                return num + player.countMark('qunyou_202301_jiangchi_attackRange');
                                            },
                                        },
                                        intro: {
                                            content: "攻击范围+#",
                                        },
                                        sub: true,
                                    },
                                    less: {
                                        charlotte: true,
                                        onremove: true,
                                        mod: {
                                            cardUsable: function (card, player, num) {
                                                if (card.name == 'sha') return num - player.countMark('qunyou_202301_jiangchi_less');
                                            },
                                        },
                                        intro: {
                                            content: "出杀次数-#",
                                        },
                                        sub: true,
                                    },
                                    qinggang: {
                                        trigger: {
                                            player: "useCardToPlayered",
                                        },
                                        filter: function (event) {
                                            return event.card.name == 'sha';
                                        },
                                        forced: true,
                                        logTarget: "target",
                                        content: function () {
                                            trigger.target.addTempSkill('qinggang2');
                                            trigger.target.storage.qinggang2.add(trigger.card);
                                            player.removeSkill('qunyou_202301_jiangchi_qinggang');
                                        },
                                        ai: {
                                            "unequip_ai": true,
                                            skillTagFilter: function (player, tag, arg) {
                                                if (arg && arg.name == 'sha' && get.color(arg.card) == 'red' && arg.target) return true;
                                                return false;
                                            },
                                            sub: true,
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou_202301_fengji
                            "qunyou_202301_jiebi": {
                                enable: "phaseUse",
                                usable: 3,
                                filter: function (event, player) {
                                    return !player.hasSkill("qunyou_202301_jiebi_no");
                                },
                                content: function () {
                                    "step 0"
                                    event.usedNum = (player.getStat().skill.qunyou_202301_jiebi || 0);
                                    if (event.usedNum == 1) {
                                        player.chooseToDiscard(1, 'he', true);
                                    } else if (event.usedNum == 2) {
                                        player.loseHp();
                                    } else {
                                        player.turnOver();
                                    }
                                    "step 1"
                                    event.related = player.chooseUseTarget({
                                        name: 'sha'
                                    }, '视为使用一张【杀】', false, 'nodistance');
                                    "step 2"
                                    var bool = game.hasPlayer2(function (current) {
                                        return current.getHistory('damage', function (evt) {
                                            return evt.getParent(4) == event;
                                        }).length > 0
                                    })
                                    if (bool) {
                                        player.draw(event.usedNum);
                                        player.addTempSkill("qunyou_202301_jiebi_no")
                                    }
                                },
                                subSkill: {
                                    no: {
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_202301_zishi": {
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                filter: function (event, player) {
                                    return event.player != player;
                                },
                                forced: true,
                                content: function () {
                                    "step 0"
                                    player.addTempSkill('qunyou_202301_zishi_count');
                                    player.addMark('qunyou_202301_zishi_count', 1, false);
                                    event.usedNum = player.countMark('qunyou_202301_zishi_count');
                                    if (event.usedNum == 1) {
                                        player.draw();
                                    } else if (event.usedNum == 2) {
                                        player.recover();
                                    } else if (event.usedNum == 3) {
                                        var list = [player, trigger.player].sortBySeat();
                                        list[0].turnOver();
                                        list[1].turnOver();
                                    }
                                },
                                subSkill: {
                                    count: {
                                        charlotte: true,
                                        onremove: true,
                                        intro: {
                                            content: "已发动#次自恃",
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou_mou_zhanghe
                            "qunyou_shibian":{
                                trigger:{
                                    global:"phaseBegin",
                                },
                                init:function (player){
                                    if(!player.storage.qunyou_shibian) player.storage.qunyou_shibian=player;
                                },
                                filter:function (event,player){
                                    return event.player!=player;
                                },
                                content:function (){
                                    "step 0"
                                    player.storage.qunyou_shibian=trigger.player;
                                    "step 1"
                                    var num=player.storage.qunyou_shibian.countCards('h')-player.countCards('h');
                                    if(num>=0) player.draw(num);
                                    else player.chooseToDiscard('h',true,-num);
                                    player.addTempSkill("qunyou_shibian_draw");
                                },
                                    subSkill:{
                                        draw:{
                                            mark:true,
                                            intro:{
                                                content:function(storage,player){
                                                    return "手牌数始终和"+get.translation(player.getStorage('qunyou_shibian'))+"相等";
                                                },
                                            },
                                            trigger:{
                                                global:["loseAfter","equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                                            },
                                            forced:true,
                                            filter:function (event,player){
                                                var num = player.storage.qunyou_shibian.countCards('h');
                                                return player.countCards('h')!=num;
                                            },
                                            content:function (){
                                                var num=player.storage.qunyou_shibian.countCards('h')-player.countCards('h');
                                                if(num>0) player.draw(num);
                                                else player.chooseToDiscard('h',true,-num);
                                            },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_liaodi":{
                                trigger:{
                                    player:"gainAfter",
                                },
                                filter:function (event,player){
                                    return event.getParent().name=='draw'&&event.getParent(2).name=='qunyou_shibian_draw';
                                },
                                content:function (){
                                    player.removeSkill("qunyou_shibian_draw");
                                },
                            },

                            //qunyou_202301_donghe
                            "qunyou_202301_hezhi":{
                                trigger:{
                                    player:"useCard",
                                },
                                audio:2,
                                forced:true,
                                filter:function(event,player){
                                    return event.targets&&get.type(event.card,false)=='trick'&&!get.tag(event.card,'damage');
                                },
                                content:function(){
                                    for(var i of trigger.targets) i.draw(); 
                                },
                            },
                            "qunyou_202301_minxi":{
                                mark:true,
                                locked:false,
                                zhuanhuanji:true,
                                marktext:"☯",
                                audio:2,
                                intro:{
                                    markcount:function(storage,player){
                                        if(!_status.currentPhase) return undefined;
                                        return (player.getStat('skill').qunyou_202301_minxi||0)+1;
                                    },
                                    content:function(storage,player,skill){
                                        var num=(player.getStat('skill').qunyou_202301_minxi||0)+1;
                                        var str=player.storage.qunyou_202301_minxi?'你可以获得'+num+'名手牌数不少于你的其他角色一张牌':'你可以交给'+num+'名手牌数不大于你的其他角色一张手牌。';
                                        str+='若有角色本阶段已成为过此技能的目标两次，则你令此技能失效直到回合结束，然后你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多'+num+'个目标';
                                        return str;
                                    },
                                },
                                enable:"phaseUse",
                                multitarget:true,
                                filter:function(event,player){
                                    var num=(player.getStat('skill').qunyou_202301_minxi||0)+1;
                                    if(player.hasSkill('qunyou_202301_minxi_disable')) return false;
                                    return player.storage.qunyou_202301_minxi||player.countCards('h')>=num;
                                },
                                filterTarget:function(card,player,target){
                                    if(player==target) return false;
                                    if(player.storage.qunyou_202301_minxi) return target.countGainableCards(player,'he')&&target.countCards('h')>=player.countCards('h');
                                    else return target.countCards('h')<=player.countCards('h');
                                },
                                selectTarget:function(){
                                    var player=_status.event.player,num=(player.getStat('skill').qunyou_202301_minxi||0)+1;
                                    return num;
                                },
                                content:function(){
                                    'step 0'
                                    event.num=targets.length;
                                    'step 1'
                                    event.target=targets[targets.length-event.num];
                                    if(!event.target.hasSkill('qunyou_202301_minxi_used')) event.target.addTempSkill('qunyou_202301_minxi_used');
                                    else player.addTempSkill('qunyou_202301_minxi_disable');
                                    if(player.storage.qunyou_202301_minxi) player.gainPlayerCard('获得'+get.translation(event.target)+'一张牌',event.target,'he',true);
                                    else player.chooseCard(true,'h','交给'+get.translation(event.target)+'一张牌');
                                    'step 2'
                                    if(result.cards&&!player.storage.qunyou_202301_minxi) player.give(result.cards,event.target);
                                    if(--event.num>0) event.goto(1);
                                    'step 3'
                                    player.changeZhuanhuanji('qunyou_202301_minxi');
                                    if(!player.hasSkill('qunyou_202301_minxi_disable')) event.finish();
                                    'step 4'
                                    var list=[];
                                    for(var j of lib.inpile){
                                        if(get.type(j)=='trick'&&!get.tag({name:j,isCard:true},'damage')) list.push(j);
                                    };
                                    var next=player.chooseButton(['你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多'+(player.getStat('skill').qunyou_202301_minxi||0)+'个目标',[list,'vcard']]);
                                    next.set('filterButton',function(button){
                                        return player.hasUseTarget({name:button.link[2]});
                                    });
                                    'step 5'
                                    if(result.links[0][2]){
                                        lib.skill.qunyou_202301_minxi_x.viewAs={name:result.links[0][2],isCard:true};
                                        lib.skill.qunyou_202301_minxi_x.prompt='视为使用一张'+get.translation(result.links[0][2]);
                                        var next=player.chooseToUse();
                                            next.logSkill='qunyou_202301_minxi';
                                            next.set('norestore',true);
                                            next.set('_backupevent','qunyou_202301_minxi_x');
                                            next.backup('qunyou_202301_minxi_x');
                                    };
                                },
                                group:['qunyou_202301_minxi_targets'],
                                subSkill:{
                                    targets:{
                                        trigger:{
                                            player:["useCard2"],
                                        },
                                        direct:true,
                                        filter:function(event,player){
                                            return !get.info(event.card).notarget&&event.skill=='qunyou_202301_minxi_x';
                                        },
                                        content:function(){
                                            'step 0'
                                            event.num=player.getStat('skill').qunyou_202301_minxi||0;
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
                                                player.logSkill('qunyou_202301_minxi',event.targets);
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
                                                    player.logSkill('qunyou_202301_minxi',event.targets);
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
                                            player.logSkill('qunyou_202301_minxi',event.targets);
                                        },
                                    },
                                    x:{
                                        filterCard:function(){return false},
                                        selectCard:-1,
                                        popname:true,
                                        sub:true,
                                    },
                                    disable:{
                                        mark:true,
                                        intro:{
                                            content:"〖"+get.translation("qunyou_202301_minxi")+"〗失效",
                                        },
                                        sub:true,
                                    },
                                    used:{
                                        mark:true,
                                        intro:{
                                            content:"本回合已被指定为〖"+get.translation("qunyou_202301_minxi")+"〗的目标",
                                        },
                                        sub:true,
                                    },
                                },
                            },

                            //qunyou_202302_jiangwei
                            "qunyou_202302_tiaoxin":{
                                audio:["tiaoxin_re_jiangwei",2],
                                enable:"phaseUse",
                                usable:1,
                                init:function (player,skill){
                                    player.storage.qunyou_202302_tiaoxin=0;
                                },
                                filterTarget:function(card,player,target){
                                    return target!=player&&target.countCards('he');
                                },
                                content:function(){
                                    "step 0"
                                    if(player.hasSkill("qunyou_202302_jizhi")) player.storage.qunyou_202302_tiaoxin++;
                                    target.chooseToUse(function(card,player,event){
                                        if(get.name(card)!='sha') return false;
                                        return lib.filter.filterCard.apply(this,arguments);
                                    },'挑衅：对'+get.translation(player)+'使用一张杀，或令其获得你的一张牌').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
                                        if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this,arguments);
                                    }).set('sourcex',player);
                                    "step 1"
                                    if(result.bool==false&&target.countCards('he')>0){
                                        player.gainPlayerCard(target,'he',true);
                                    }
                                    else{
                                        event.finish();
                                    }
                                },
                                ai:{
                                    order:4,
                                    expose:0.2,
                                    result:{
                                        target:-1,
                                        player:function(player,target){
                                            if(!target.canUse('sha',player)) return 0;
                                            if(target.countCards('h')==0) return 0;
                                            if(target.countCards('h')==1) return -0.1;
                                            if(player.hp<=2) return -2;
                                            if(player.countCards('h','shan')==0) return -1;
                                            return -0.5;
                                        },
                                    },
                                    threaten:1.1,
                                },
                            },
                            "qunyou_202302_huzhen":{
                                audio:["guanxing_re_jiangwei",2],
                                trigger:{
                                    global:["dying"],
                                },
                                limited:true,
                                unique:true,
                                mark:true,
                                intro:{
                                    content:"limited",
                                },
                                skillAnimation:true,
                                init:function (player,skill){
                                    player.storage[skill]=false;
                                },
                                check:function(event,player){
                                    if(get.attitude(player,event.player)<4) return false;
                                    if(player.countCards('h',function(card){
                                        var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                                        if(mod2!='unchanged') return mod2;
                                        var mod=game.checkMod(card,player,event.player,'unchanged','cardSavable',player);
                                        if(mod!='unchanged') return mod;
                                        var savable=get.info(card).savable;
                                        if(typeof savable=='function') savable=savable(card,player,event.player);
                                        return savable;
                                    })>=1-event.player.hp) return false;
                                    if(event.player==player||event.player==get.zhu(player)) return true;
                                    if(_status.currentPhase&&get.damageEffect(_status.currentPhase,player,player)<0) return false;
                                    return !player.hasUnknown();
                                },
                                content:function () {
                                    'step 0'
                                    player.storage.qunyou_202302_huzhen_recover=trigger.player;
                                    if (player.isUnderControl()) {
                                        game.modeSwapPlayer(player);
                                    }
                                    var player = event.player;
                                    if (player.isUnderControl()) game.modeSwapPlayer(player);
                            
                                    var cards = player.getCards('h');
                                    var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
                                    guanXing.caption = '【护阵】';
                                    game.broadcast(function (player, cards) {
                                        if (!window.decadeUI) return;
                                        guanXing.caption = '【护阵】';
                                        decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
                                    }, player, cards);
                            
                                    event.switchToAuto = function () {
                                        var cards = guanXing.cards[0].concat();
                                        var cheats = [];
                                        var judges = player.node.judges.childNodes;
                            
                                        if (judges.length) {
                                            cheats = decadeUI.get.cheatJudgeCards(cards, judges, true);
                                        }
                            
                                        if (cards.length && cheats.length == judges.length) {
                                            for (var i = 0; i >= 0 && i < cards.length; i++) {
                                                if (get.value(cards[i], player) >= 5) {
                                                    cheats.push(cards[i]);
                                                    cards.splice(i, 1)
                                                }
                                            }
                                        }
                            
                                        var time = 500;
                                        for (var i = 0; i < cheats.length; i++) {
                                            setTimeout(function (card, index, finished) {
                                                guanXing.move(card, index, 0);
                                                if (finished) guanXing.finishTime(1000);
                                            }, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
                                            time += 500;
                                        }
                            
                                        for (var i = 0; i < cards.length; i++) {
                                            setTimeout(function (card, index, finished) {
                                                guanXing.move(card, index, 1);
                                                if (finished) guanXing.finishTime(1000);
                                            }, time, cards[i], i, (i >= cards.length - 1));
                                            time += 500;
                                        }
                                    };
                            
                                    if (event.isOnline()) {
                                        event.player.send(function () {
                                            if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
                                        }, event.player);
                            
                                        event.player.wait();
                                        decadeUI.game.wait();
                                    } else if (!event.isMine()) {
                                        event.switchToAuto();
                                    }
                                    'step 1'
                                    player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
                                    game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) + '张牌置于牌堆底');
                                    game.updateRoundNumber();
                                },
                                ai:{
                                    threaten:1.2,
                                },
                                group:["qunyou_202302_huzhen_recover"],
                                subSkill:{
                                    recover:{
                                        trigger:{
                                            player:"qunyou_202302_huzhenAfter",
                                        },
                                        direct:true,
                                        init:function(player){
                                            if(!player.storage.qunyou_202302_huzhen_recover) player.storage.qunyou_202302_huzhen_recover=[];
                                        },
                                        content:function(){
                                            "step 0"
                                            player.judge(function(card){return (get.suit(card)=='heart')?3:-2});
                                            "step 1"
                                            event.player=player.storage.qunyou_202302_huzhen_recover;
                                            if(result.suit=="heart") event.player.recover(event.player.maxHp-event.player.hp);
                                            player.awakenSkill("qunyou_202302_huzhen");
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_202302_jizhi":{
                                skillAnimation:true,
                                animationColor:"fire",
                                audio:2,
                                audioname:["zhiji_re_jiangwei",2],
                                unique:true,
                                juexingji:true,
                                derivation:"qunyou_202302_zhentu",
                                trigger:{
                                    player:"phaseZhunbeiBegin",
                                },
                                mark:true,
                                intro:{
                                    markcount:function(storage,player){
                                        return player.storage.qunhyou_tiaoxin;
                                    },
                                    content:function(storage,player){
                                        return "已发动过"+player.storage.qunyou_202302_tiaoxin+"次〖挑衅〗";
                                    },
                                },
                                forced:true,
                                filter:function(event,player){
                                    if(player.storage.qunyou_202302_jizhi) return false;
                                    return player.countCards('h')==0||player.storage.qunyou_202302_tiaoxin>=3;
                                },
                                content:function(){
                                    "step 0"
                                    player.awakenSkill('qunyou_202302_jizhi');
                                    player.gainMaxHp();
                                    player.recover();
                                    player.storage.qunyou_202302_jizhi=true;
                                    player.addSkill("qunyou_202302_zhentu");
                                },
                            },
                            "qunyou_202302_zhentu":{
                                audio:["bazhen_ol_sp_zhugeliang",2],
                                trigger:{
                                    player:["chooseToUseBegin"],
                                },
                                filter:function(event,player){
                                    if(event.responded) return false;
                                    if(event.bagua_skill) return false;
                                    if(!event.filterCard||!event.filterCard({name:'shan'},player,event)) return false;
                                    return true;
                                },
                                audio:true,
                                check:function(event,player){
                                    if(event&&(event.ai||event.ai1)){
                                        var ai=event.ai||event.ai1;
                                        var tmp=_status.event;
                                        _status.event=event;
                                        var result=ai({name:'shan'},_status.event.player,event);
                                        _status.event=tmp;
                                        return result>0;
                                    }
                                    return true;
                                },
                                content:function(){
                                    "step 0"
                                    player.judge('qunyou_202302_zhentu',function(card){return (get.color(card)=='red')?1.5:1});
                                    "step 1"
                                    if(result.color=="red"){
                                        trigger.untrigger();
                                        trigger.set('responded',true);
                                        trigger.result={bool:true,card:{name:'shan',isCard:true}}
                                    }
                                    else if(result.color=="black"){
                                        player.chooseUseTarget({name:'sha'},'是否视为使用一张【杀】？',false,'nodistance');
                                    };
                                },
                                ai:{
                                    respondShan:true,
                                    effect:{
                                        target:function(card,player,target,effect){
                                            if(get.tag(card,'respondShan')) return 0.5;
                                        },
                                    },
                                },
                            },

                            //qunyou_202302_liubei
                            "qunyou_202302_renwang":{
                                audio:["rerende_gz_jun_liubei",2],
                                trigger:{
                                    player:"loseAfter",
                                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                                },
                                direct:true,
                                mark:true,
                                intro:{
                                    "name2":"仁",
                                    content:"mark",
                                },
                                filter:function(event,player){
                                    if(player!=_status.currentPhase) return true;
                                    if(event.getParent().name=='useCard') return false;
                                    var evt=event.getl(player);
                                    return evt&&evt.cards2&&evt.cards2.length>0;   
                                },
                                content:function(){
                                    player.addMark('qunyou_202302_renwang',trigger.cards.length);
                                },
                                group:"qunyou_202302_renwang_use",
                                subSkill:{
                                    use:{
                                        enable:["chooseToUse","chooseToRespond"],
                                        hiddenCard:function(player,name){
                                            if(player.hasSkill("qunyou_202302_renwang_disable")) return false;
                                            if(get.type(name)=='basic'&&lib.inpile.contains(name)&&player.countMark('qunyou_202302_renwang')>=2) return true;
                                        },
                                        filter:function(event,player){
                                            if(player.hasSkill("qunyou_202302_renwang_disable")) return false;
                                            if(event.type=='wuxie'||player.countMark('qunyou_202302_renwang')<2) return false;
                                            for(var i of lib.inpile){
                                                if(get.type(i)!='basic') continue;
                                                var card={name:i,isCard:true};
                                                if(event.filterCard(card,player,event)) return true;
                                                if(i=='sha'){
                                                    for(var j of lib.inpile_nature){
                                                        card.nature=j;
                                                        if(event.filterCard(card,player,event)) return true;
                                                    }
                                                }
                                            }
                                            return false;
                                        },
                                        chooseButton:{
                                            dialog:function(event,player){
                                                var list=[];
                                                for(var i of lib.inpile){
                                                    if(get.type(i)!='basic') continue;
                                                    var card={name:i,isCard:true};
                                                    if(event.filterCard(card,player,event)) list.push(['基本','',i]);
                                                    if(i=='sha'){
                                                        for(var j of lib.inpile_nature){
                                                            card.nature=j;
                                                            if(event.filterCard(card,player,event)) list.push(['基本','',i,j]);
                                                        }
                                                    }
                                                }
                                                return ui.create.dialog('仁望',[list,'vcard'],'hidden')
                                            },
                                            check:function(button){
                                                if(button.link[2]=='shan') return 3;
                                                var player=_status.event.player;
                                                if(button.link[2]=='jiu'){
                                                    if(player.getUseValue({name:'jiu'})<=0) return 0;
                                                    if(player.countCards('h','sha')) return player.getUseValue({name:'jiu'});
                                                    return 0;
                                                }
                                                return player.getUseValue({name:button.link[2],nature:button.link[3]})/4;
                                            },
                                            backup:function(links,player){
                                                return {
                                                    selectCard:-1,
                                                    filterCard:()=>false,
                                                    viewAs:{
                                                        name:links[0][2],
                                                        nature:links[0][3],
                                                        isCard:true,
                                                    },
                                                    precontent:function(){
                                                        player.logSkill('qunyou_202302_renwang');
                                                        player.removeMark('qunyou_202302_renwang',2);
                                                        player.addTempSkill("qunyou_202302_renwang_disable");
                                                    },
                                                }
                                            },
                                            prompt:function(links,player){
                                                var name=links[0][2];
                                                var nature=links[0][3];
                                                return '失去两个“仁”标记并视为使用或打出'+(get.translation(nature)||'')+get.translation(name);
                                            },
                                        },
                                        ai:{
                                            order:10,
                                            respondShan:true,
                                            respondSha:true,
                                            skillTagFilter:function(player,tag){
                                                if(player.countMark('qunyou_202302_renwang')<2) return false;
                                            },
                                            result:{
                                                player:function(player){
                                                    if(_status.event.dying) return get.attitude(player,_status.event.dying);
                                                    return 1;
                                                },
                                            },
                                        },
                                        sub:true,
                                    },
                                    disable:{
                                        mark:true,
                                        intro:{
                                            content:"本回合已使用〖仁望〗",
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_202302_renze":{
                                audio:["rerende",2],
                                enable:"phaseUse",
                                filterCard:true,
                                selectCard:[1,Infinity],
                                discard:false,
                                lose:false,
                                delay:0,
                                filterTarget:function(card,player,target){
                                    return player!=target;
                                },
                                check:function(card){
                                    if(ui.selected.cards.length>1) return 0;
                                    if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
                                    if(!ui.selected.cards.length&&card.name=='du') return 20;
                                    var player=get.owner(card);
                                    var num=0;
                                    var evt2=_status.event.getParent();
                                    var num=0;
                                    player.getHistory('lose',function(evt){
                                        if(evt.getParent().skill=='rende'&&evt.getParent(3)==evt2) num+=evt.cards.length;
                                    });
                                    if(player.hp==player.maxHp||num>1||player.countCards('h')<=1){
                                        if(ui.selected.cards.length){
                                            return -1;
                                        }
                                        var players=game.filterPlayer();
                                        for(var i=0;i<players.length;i++){
                                            if(players[i].hasSkill('haoshi')&&
                                                !players[i].isTurnedOver()&&
                                                !players[i].hasJudge('lebu')&&
                                                get.attitude(player,players[i])>=3&&
                                                get.attitude(players[i],player)>=3){
                                                return 11-get.value(card);
                                            }
                                        }
                                        if(player.countCards('h')>player.hp) return 10-get.value(card);
                                        if(player.countCards('h')>2) return 6-get.value(card);
                                        return -1;
                                    }
                                    return 10-get.value(card);
                                },
                                content:function(){
                                    player.give(cards,target);
                                },
                                ai:{
                                    order:function(skill,player){
                                        if(player.hp<player.maxHp&&player.storage.rende<2&&player.countCards('h')>1){
                                            return 10;
                                        }
                                        return 1;
                                    },
                                    result:{
                                        target:function(player,target){
                                            if(target.hasSkillTag('nogain')) return 0;
                                            if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                                                if(target.hasSkillTag('nodu')) return 0;
                                                return -10;
                                            }
                                            if(target.hasJudge('lebu')) return 0;
                                            var nh=target.countCards('h');
                                            var np=player.countCards('h');
                                            if(player.hp==player.maxHp||player.storage.rende<0||player.countCards('h')<=1){
                                                if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
                                            }
                                            return Math.max(1,5-nh);
                                        },
                                    },
                                    effect:{
                                        target:function(card,player,target){
                                            if(player==target&&get.type(card)=='equip'){
                                                if(player.countCards('e',{subtype:get.subtype(card)})){
                                                    var players=game.filterPlayer();
                                                    for(var i=0;i<players.length;i++){
                                                        if(players[i]!=player&&get.attitude(player,players[i])>0){
                                                            return 0;
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                    },
                                    threaten:0.8,
                                },
                            },
                            "qunyou_202302_jiangqi":{
                                unique:true,
                                audio:["jijiang1_re_liubei",2],
                                enable:"phaseUse",
                                usable:1,
                                filter:function(event,player){
                                    if(!player.hasZhuSkill('qunyou_202302_jiangqi')) return false;
                                    return game.hasPlayer(function(current){
                                        if(current==player) return false;
                                        return current.group=='shu'&&current.hp>=player.hp&&game.hasPlayer(function(target){
                                            return current.inRange(target);
                                        });
                                    });
                                },
                                filterTarget:function(card,player,target){
                                    if(ui.selected.targets.length){
                                        if(target==player) return false;
                                        var current=ui.selected.targets[0];
                                        return target.group=='shu'&&target.hp>=player.hp&&target.inRange(current);
                                    }
                                    return game.hasPlayer(function(current){
                                        if(current==player) return false;
                                        return current.group=='shu'&&current.hp>=player.hp&&current.inRange(target);
                                    });
                                },
                                selectTarget:2,
                                multitarget:true,
                                targetprompt:['出杀目标','选择人'],
                                check:function(target){
                                    var player=_status.event.player;
                                    if(ui.selected.targets.length) return 2-get.sgn(get.attitude(player,target));
                                    if(game.hasPlayer(function(current){
                                        if(current==player) return false;
                                        return current.group=='shu'&&current.hp>=player.hp&&current.inRange(target)&&(!current.canUse({name:'sha'},target)||get.attitude(player,target)<=0||get.effect(target,{name:'sha'},current,player)>0);
                                    })) return -get.attitude(player,target);
                                    return 0;
                                },
                                filterCard:()=>false,
                                selectCard:-1,
                                zhuSkill:true,
                                direct:true,
                                content:function(){
                                    'step 0'
                                    var current=targets[0];
                                    event.current=current;
                                    var target=targets[1];
                                    event.target=target;
                                    player.logSkill('qunyou_202302_jiangqi');
                                    player.line2([current,target]);
                                    var next=target.chooseControl('出杀','跳过阶段')
                                    next.set('choiceList',[
                                        '视为对'+get.translation(current)+'使用一张【杀】',
                                        '跳过下个出牌阶段'
                                    ])
                                    next.set('ai',function(){
                                        return (get.attitude(target,current)==0||get.effect(current,{name:'sha'},target,target)>=0)?'出杀':'跳过阶段';
                                    });
                                    'step 1'
                                    if(result.control=='出杀') target.useCard({name:'sha'},event.current,false,'noai');
                                    else{
                                        target.skip('phaseUse');
                                        game.log(target,'跳过了','#g出牌阶段');
                                    }
                                },
                            },

                            //qunyou_202302_dailaidongzhu
                            "qunyou_202302_manyi":{
                                init:function(player){
                                    player._groupChosen=true;
                                    player.changeGroup('qun',false);
                                },
                                locked:true,
                                audio:"ext:群友DIY2023/audio/skill:2",
                                trigger:{
                                    target:'useCardToBefore',
                                },
                                forced:true,
                                priority:15,
                                filter:function(event,player){
                                    return event.card.name=='nanman';
                                },
                                content:function(){
                                    trigger.cancel();
                                },
                                ai:{
                                    effect:{
                                        target:function(card){
                                            if(card.name=='nanman') return [0,1];
                                        },
                                    },
                                },
                                group:["qunyou_202302_manyi_draw"],
                                subSkill:{
                                    draw:{
                                        trigger:{
                                            global:"respond",
                                        },
                                        filter:function(event,player){
                                            if(!event.respondTo[1].name=='nanman') return false;
                                            return event.card.name=='sha';
                                        },
                                        forced:true,
                                        content:function(){
                                            'step 0'
                                            player.draw();
                                            player.logSkill("qunyou_202302_manyi");
                                            if(trigger.target==player) event.finish();
                                            player.chooseCard(true,'he','交给'+get.translation(trigger.player)+'一张牌').set('ai',function(card){
                                                if(get.position(card)=='e') return -1;
                                                if(card.name=='shan') return 1;
                                                if(get.type(card)=='equip') return 0.5;
                                                return 0;
                                            });
                                            "step 1"
                                            player.give(result.cards,trigger.player,'give');
                                            game.delay();
                                        },
                                    },
                                },
                            },
                            "qunyou_202302_weixiang":{
                                audio:"ext:群友DIY2023/audio/skill:1",
                                groupSkill:true,
                                enable:"phaseUse",
                                usable:1,
                                filter:function(event,player){
                                    return player.group=='qun'&&player.countCards('h')>0;
                                },
                                filterTarget:function(card,player,target){
                                    return player.canCompare(target);
                                },
                                content:function(){
                                    "step 0"
                                    player.chooseToCompare(target).set('small',true);
                                    "step 1"
                                    if(!result.bool){
                                        if(target.countCards('he')>0) player.gainPlayerCard(target,'he',true);
                                        player.changeGroup('shu');
                                    }
                                    else{
                                        var evt=_status.event;
                                        for(var i=0;i<10;i++){
                                            if(evt&&evt.getParent)evt=evt.getParent();
                                            if(evt.name=='phaseUse'){
                                            evt.skipped=true;
                                                break;
                                            };
                                        };
                                    };
                                },
                                ai:{
                                    order:5,
                                    result:{
                                        target:function(target,player){
                                            return -1;
                                        },
                                    },
                                },
                            },
                            "qunyou_202302_panqin":{
                                audio:"ext:群友DIY2023/audio/skill:1",
                                groupSkill:true,
                                enable:"phaseUse",
                                usable:1,
                                filter:function(event,player){
                                    return player.group=='shu'&&player.countCards('h')>0;
                                },
                                filterTarget:function(card,player,target){
                                    return player.canCompare(target);
                                },
                                content:function(){
                                    "step 0"
                                    player.chooseToCompare(target);
                                    "step 1"
                                    if(result.bool){
                                        target.damage('nocard');
                                        player.changeGroup('qun');
                                    }
                                    else{
                                        player.loseHp();
                                    };
                                },
                                ai:{
                                    order:5,
                                    result:{
                                        target:function(target,player){
                                            return -2;
                                        },
                                    },
                                },
                            },
                        },
                        translate: {
                            // 武将部分
                            "qunyou_huangyueying": "黄月英",
                            "qunyou_qun_huangyueying": "群黄月英",
                            "qunyou_luzhi": "卢植",
                            "qunyou_xiefuren": "谢夫人",
                            "qunyou_weidan": "韦诞",
                            "qunyou_xietiao": "谢窕",
                            "qunyou_202301_gansidui": "敢死队",
                            "qunyou_202301_pujing": "普净",
                            "qunyou_202301_caozhang": "曹彰",
                            "qunyou_202301_fengji": "逢纪",
                            "qunyou_mou_zhanghe": "谋张郃",
                            "qunyou_202301_donghe":"董和",
                            "qunyou_202302_jiangwei":"姜维",
                            "qunyou_202302_liubei":"刘备",
                            "qunyou_202302_dailaidongzhu":"带来洞主",


                            // 技能部分
                            "qunyou_jizhi":"集智",
                            "qunyou_jizhi_info":"当场上有人使用锦囊牌时，你可以摸一张牌。你于回合内以此法获得的牌不计入本回合手牌上限。",
                            "qunyou_qicai":"奇才",
                            "qunyou_qicai_info":"锁定技，你使用锦囊牌无距离限制;其他角色不能弃置你装备区里的防具牌和宝物牌。你可以为你使用的普通锦囊牌增加或减少任意个目标。",
                            "qunyou_yanrong":"掩容",
                            "qunyou_yanrong_info":"锁定技,其他角色首次对你使用的牌效果变为“弃置一张牌,然后弃置你的一张牌”（若自身无法弃置则无法对你使用牌）。你使用锦囊牌可额外指定一名没有触发〖掩容〗的角色为目标,且你用牌指定没有触发〖掩容〗的角色时摸一张牌。",
                            "qunyou_zhice":"智策",
                            "qunyou_zhice_info":"出牌阶段每名角色限一次，你可以弃置没有触发〖掩容〗的角色两张牌,然后视为使用一张未因此使用过的普通锦囊牌或摸一张牌。",
                            "qunyou_mingren":"明任",
                            "qunyou_mingren_info":"准备阶段,若你没有“任”,则你摸两张牌,然后你将两张手牌置于武将牌上,称为任。结束阶段,你可以用任意张手牌替换换等量任。你的手牌上限+×（X为“任”的数量）。",
                            "qunyou_shouye":"授业",
                            "qunyou_shouye_info":"每回合每种牌名限一次，当你需要使用或打出基本牌时，你将两张手牌或任交给一名其他角色，视为使用或打出此基本牌。",
                            "qunyou_fenghan":"奉汉",
                            "qunyou_fenghan_info":"当一名角色的判定牌生效时,若此牌花色为黑桃,你可以将此牌当作“任”宣于武将牌上,然后令其出新判定。",
                            "qunyou_xinyou":"心幽",
                            "qunyou_xinyou_info":"锁定技，你的手牌没有上限。当你受到伤害或失去体力时，你改为弃置等量的牌。当你失去最后一张手牌后，你进入濒死状态；当你的手牌数大于0时，你脱离濒死状态。结束阶段，若本回合你没有使用过牌，你弃置两张牌(不触发〖绝响〗)。",
                            "qunyou_guiwang":"归望",
                            "qunyou_guiwang_info":"限定技，当你进入濒死状态时,你可以获得每名其他角色装备区内的一张牌，然后你翻面",
                            "qunyou_juexiang":"绝响",
                            "qunyou_juexiang_info":"锁定技，游戏开始时，你摸9张牌。当你一次性失去的牌数大于1张时，你摸等量的牌并弃X张牌（X为你此次失去的牌数且至多为3），若你因为〖心幽〗弃牌则弃牌数-1。当你进入濒死状态时，其他角色依次选择是否交给你一张牌。",
                            "qunyou_chengwen":"成文",
                            "qunyou_chengwen_info":"锁定技,当你失去手牌后,若你手牌中没有同名牌,你摸一张牌。",
                            "qunyou_dengjie":"登阶",
                            "qunyou_dengjie_info":"出牌阶段,你可以弃X张牌（X为此技能发动次数且至少为1），然后你的下一张牌无使用与次数限制。",
                            "qunyou_zhuanzhang":"撰章",
                            "qunyou_zhuanzhang_info":"限定技,出牌阶段开始时，弃置你的所有手牌，然后将5张不同名的可主动使用的牌置入你的手中。",
                            "qunyou_piaomiao":"缥缈",
                            "qunyou_piaomiao_info":"当你进入濒死状态时，你可选择一个未选择的花色无法使用,然后摸两张牌并将体力恢复至3。若你有一种颜色的牌无法使用，你获得【翠枝】并增加一点体力上限;若你所有花色均无法使用,你减少2点体力上限取消所有用牌限制。(此技能无法被锁定)",
                            "qunyou_yunque":"云雀",
                            "qunyou_yunque_info":"结束阶段,你可依据本回合使用的花色数依次发动以下效果:1.弃置场上一张牌;2.令一名角色回复一点体力;3.摸等同于自身体力上限的牌,然后进入濒死状态。",
                            "qunyou_cuizhi":"翠枝",
                            "qunyou_cuizhi_info":"其他角色造成伤害结算后,若你手牌数不多于其,你获得其一张牌;若你体力值不多于其,其流失一点体力,你回复一点体力。",
                            "qunyou_202301_gansi":"敢死",
                            "qunyou_202301_gansi_info":"出牌阶段，你令一名角色死亡，然后你死亡。",
                            "qunyou_202301_jiemou":"揭谋",
                            "qunyou_202301_jiemou_info":"结束阶段,你可以摸一张牌,然后将一张牌置于一名其他角色的武将牌上。若有角色用颜色相同的牌指定其为目标,你可以展示并令其获得此牌，然后取消其为目标。",
                            "qunyou_202301_yunyou":"云游",
                            "qunyou_202301_yunyou_info":"锁定技,你记录你回合内失去牌的花色。花色在记录中的牌对你造成伤害时防止之,然后从记录中移除此花色。",
                            "qunyou_202301_duhua":"度化",
                            "qunyou_202301_duhua_info":"限定技,当一名角色处于濒死状态时,你可以弃置X张牌,令其弃置区域里的所有牌,复原武将牌,摸X张牌并回复×点体力,然后其获得【武圣】。(×最大为5)",
                            "qunyou_202301_duhua_wusheng":"武圣",
                            "qunyou_202301_duhua_wusheng_info":"你可以将一张红色牌当【杀】使用或打出,你使用的红色【杀】无距离限制且可以无视防具。",
                            "qunyou_202301_xiongwu":"雄武",
                            "qunyou_202301_xiongwu_info":"锁定技，你回合内使用【杀】的次数等于你的攻击距离。",
                            "qunyou_202301_jiangchi":"将驰",
                            "qunyou_202301_jiangchi_info":"出牌阶段限X次:1.摸一张牌使本回合使用【杀】次数-1;2.弃一张牌使本回合攻击距离+1且下一张【杀】无视防具(X为你的体力上限且一回合使用【杀】次数不应小于0)。",
                            "qunyou_202301_jiebi":"诘愎",
                            "qunyou_202301_jiebi_info":"出牌阶段可以依次发动，1.弃一张牌;2.失去一点体力;3.武将牌翻面。每发动一次视为使用一张不计入出牌次数且无出牌限制的【杀】;若此做造成了伤害,则你摸X张牌,然后本回合此技能失效(X为选项编号数)。",
                            "qunyou_202301_zishi":"自恃",
                            "qunyou_202301_zishi_info":"锁定技,每回合依次发动,当你成为其他角色使用牌的目标时:1.摸一张牌;2.回复一点体力;3.你与当前回合角色武将牌翻面。",
                            "qunyou_shibian":"识变",
                            "qunyou_shibian_info":"一名角色的回合开始时，你可以令本回合手牌数始终等于其手牌数。",
                            "qunyou_liaodi":"料敌",
                            "qunyou_liaodi_info":"当你因〖识变〗摸牌后，你可以令本轮〖识变〗失效。",
                            "qunyou_202302_tiaoxin":"挑衅",
                            "qunyou_202302_tiaoxin_info":"出牌阶段限一次，你可以指定一名有牌的其他角色，该角色需对你使用一张【杀】，否则你获得其一张牌。",
                            "qunyou_202302_huzhen":"护阵",
                            "qunyou_202302_huzhen_info":"限定技,当一名角色进入濒死状态时，你可以将所有手牌以任意顺序置于牌堆顶或牌堆底，然后进行一次判定，若结果为♥，其回复体力至体力上限。",
                            "qunyou_202301_hezhi":"和治",
                            "qunyou_202301_hezhi_info":"锁定技，你使用非伤害类锦囊牌指定目标时，其摸一张牌。",
                            "qunyou_202301_minxi":"民息",
                            "qunyou_202301_minxi_info":"转换技，出牌阶段，阴:你可以交给X名手牌数不大于你的其他角色一张手牌；阳:你可以获得X名手牌数不少于你的其他角色一张牌。若有角色本阶段已成为过此技能的目标两次，则你令此技能失效直到回合结束，然后你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多X个目标(X为此技能本阶段发动次数+1)。",
                            "qunyou_202302_jizhi":"继志",
                            "qunyou_202302_jizhi_info":"觉醒技，准备阶段，若你没有手牌或你已累计发动过三次〖挑衅〗，你增加1点体力上限并回复1点体力，然后获得技能〖阵图〗。",
                            "qunyou_202302_zhentu":"阵图",
                            "qunyou_202302_zhentu_info":"当你需要使用一张【闪】时，你可以进行判定。若结果为红色，视为你使用一张【闪】；若结果为黑色，你可以视为使用一张无距离限制的【杀】。",
                            "qunyou_202302_renwang":"仁望",
                            "qunyou_202302_renwang_info":"锁定技，你每不因回合内使用而失去一张牌便获得一个\"仁\"标记。每回合限一次，你可以移去两枚\"仁\"来视为使用或打出一张基本牌。",
                            "qunyou_202302_renze":"仁泽",
                            "qunyou_202302_renze_info":"出牌阶段，你可以将任意张手牌交给其他角色。",
                            "qunyou_202302_jiangqi":"将旗",
                            "qunyou_202302_jiangqi_info":"主公技，出牌阶段限一次，你可以令一名蜀势力角色选择一项:①视为对你指定的另一名角色使用一张【杀】；②跳过下个回合的出牌阶段。",
                            "qunyou_202302_manyi":"蛮裔",
                            "qunyou_202302_manyi_info":"锁定技，你的登场势力为\"群\"，【南蛮入侵】对你无效。当有角色打出【杀】响应【南蛮入侵】时，你摸一张牌并交给其一张牌。",
                            "qunyou_202302_weixiang":"伪降",
                            "qunyou_202302_weixiang_info":"群势力技，出牌阶段限一次，你可以与一名角色拼点，若你没赢，你获得其一张牌，并将势力修改为\"蜀\"；若你赢，你结束出牌阶段。",
                            "qunyou_202302_panqin":"叛侵",
                            "qunyou_202302_panqin_info":"蜀势力技，出牌阶段限一次，你可以与一名角色拼点，若你赢，你对其造成1点伤害，并将势力修改为\"群\"；若你没赢，你失去1点体力。",


                            //分组部分
                            "yuandan": "<span style='font-family: yuanli'>元旦活动将</span>",
                            "month1": "<span style='font-family: yuanli'>1月正常将</span>",
                            "month2": "<span style='font-family: yuanli'>2月正常将</span>",
                        },
                        //转换技显示
                        dynamicTranslate: {
                            "qunyou_202301_minxi":function(player){
                                if(player.storage.qunuou_minxi==true) return '转换技，出牌阶段，阴:你可以交给X名手牌数不大于你的其他角色一张手牌；<span class="bluetext">阳:你可以获得X名手牌数不少于你的其他角色一张牌。</span>若有角色本阶段已成为过此技能的目标两次，则你令此技能失效直到回合结束，然后你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多X个目标(X为此技能本阶段发动次数+1)。';
                                return '转换技，出牌阶段，<span class="bluetext">阴:你可以交给X名手牌数不大于你的其他角色一张手牌；</span>阳:你可以获得X名手牌数不少于你的其他角色一张牌。若有角色本阶段已成为过此技能的目标两次，则你令此技能失效直到回合结束，然后你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多X个目标(X为此技能本阶段发动次数+1)。';
                            },
                        },
                    };
                    if (lib.device || lib.node) {
                        for (var i in qunyou.character) qunyou.character[i][4].push('ext:群友DIY2023/image/character/' + i + '.jpg');
                    } else {
                        for (var i in qunyou.character) qunyou.character[i][4].push('db:extension-群友DIY2023/image/character:' + i + '.jpg');
                    }
                    return qunyou;
                });
                lib.config.all.characters.push('qunyou');
                if (!lib.config.characters.contains('qunyou')) lib.config.characters.push('qunyou');
                lib.translate['qunyou_character_config'] = '<span width="78" height="25">群友DIY2023</span>';

            }
        },
        help: {},
        config: {},
        package: {
            character: {
                character: {},
                translate: {},
            },
            card: {
                card: {},
                translate: {},
                list: [],
            },
            skill: {
                skill: {},
                translate: {},
            },
            intro: "",
            author: "群程序员",
            diskURL: "",
            forumURL: "",
            version: "1.0",

        },
        files: {
            "character": [],
            "card": [],
            "skill": []
        }
    }
})