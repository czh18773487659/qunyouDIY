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
                lib.rank.rarity.rare.addArray(["qunyou_caozhang"]);
            }
            lib.rank.rarity.epic.addArray(["qunyou_weidan", "qunyou_luzhi", "qunyou_pujing", "qunyou_fengji"]);
            lib.rank.rarity.legend.addArray(["qunyou_huangyueying", "qunyou_qun_huangyueying", "qunyou_xietiao", "qunyou_gansidui", "qunyou_mou_zhanghe"]);

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
                            "qunyou_gansidui": ["male", "qun", 4, ["qunyou_gansi"],
                                []
                            ],
                            "qunyou_pujing": ["male", "qun", 3, ["qunyou_jiemou", "qunyou_yunyou", "qunyou_duhua"],
                                []
                            ],
                            "qunyou_caozhang": ["male", "wei", 4, ["qunyou_xiongwu", "qunyou_jiangchi"],
                                []
                            ],
                            "qunyou_fengji": ["male", "qun", 3, ["qunyou_jiebi", "qunyou_zishi"],
                                []
                            ],
                            "qunyou_mou_zhanghe": ["male", "wei", 4, ["qunyou_shibian", "qunyou_liaodi"],
                                []
                            ],
                        },
                        skill: {
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
                            "qunyou_gansi":{
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
                            "qunyou_jiemou":{
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
                                        prompt:get.prompt2('qunyou_jiemou'),
                                    });
                                    "step 2"
                                    if(result.bool){
                                    var target=result.targets[0];
                                    var cards=result.cards;
                                    target.addToExpansion(cards,player,'give').gaintag.add('qunyou_jiemou');
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
                                group:"qunyou_jiemou_kongzhi",
                                subSkill:{
                                    kongzhi:{
                                        trigger:{
                                            global:"useCardToPlayered",
                                        },
                                        filter:function (event,player,name){
                                            var cards=event.target.getExpansions('qunyou_jiemou');
                                            for(var i of cards){
                                                if(get.color(event.card)==get.color(i)) return true;
                                            };
                                            return false;
                                        },
                                        content:function (){
                                            "step 0"
                                            event.list = []
                                            var cards=trigger.target.getExpansions('qunyou_jiemou');
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
                            "qunyou_yunyou":{
                                trigger:{
                                    player:"loseEnd",
                                },
                                forced:true,
                                locked:true,
                                init:function (player){
                                    if(!player.storage.qunyou_yunyou_suit) player.storage.qunyou_yunyou_suit = [];
                                },
                                filter:function (event,player){
                                    return player==_status.currentPhase;
                                },
                                content:function (){
                                    "step 0"
                                    for(var card of trigger.cards){
                                        var suit = get.suit(card);
                                        if(!player.storage.qunyou_yunyou_suit.contains(suit)){
                                            player.addSkill('qunyou_yunyou_suit');
                                            player.storage.qunyou_yunyou_suit.push(suit);
                                            player.storage.qunyou_yunyou_suit.sort(function(a,b){
                                                return lib.suit.indexOf(b)-lib.suit.indexOf(a);
                                            });
                                            player.syncStorage('qunyou_yunyou_suit');
                                        };
                                    };
                                    "step 1"
                                    if(game.HasExtension('十周年UI')){
                                        game.broadcastAll(function(player){
                                            var list='';
                                            for(var suit of player.getStorage('qunyou_yunyou_suit')) list+=get.translation(suit);
                                            if(player.marks.qunyou_yunyou_suit) player.marks.qunyou_yunyou_suit.firstChild.innerHTML=list;
                                        },player);
                                    };
                                },
                                group:["qunyou_yunyou_undamage"],
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
                                            var suits = player.storage.qunyou_yunyou_suit;
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
                                            player.addSkill('qunyou_yunyou_suit');
                                            player.storage.qunyou_yunyou_suit.remove(get.suit(trigger.card));
                                            player.storage.qunyou_yunyou_suit.sort(function(a,b){
                                                return lib.suit.indexOf(b)-lib.suit.indexOf(a);
                                            });
                                            player.syncStorage('qunyou_yunyou_suit');
                                            "step 1"
                                            if(game.HasExtension('十周年UI')){
                                                game.broadcastAll(function(player){
                                                    var list='';
                                                    for(var suit of player.getStorage('qunyou_yunyou_suit')) list+=get.translation(suit);
                                                    if(player.marks.qunyou_yunyou_suit) player.marks.qunyou_yunyou_suit.firstChild.innerHTML=list;
                                                },player);
                                            };
                                        },
                                        sub:true,
                                    },
                                },
                            },
                            "qunyou_duhua":{
                                limited:true,
                                unique:true,
                                mark:true,
                                intro:{
                                    content:"limited",
                                },
                                derivation:['qunyou_duhua_wusheng'],
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
                                    trigger.player.addSkillLog("qunyou_duhua_wusheng");
                                },
                            },
                            "qunyou_duhua_wusheng":{
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
                            "qunyou_xiongwu": {
                                mod: {
                                    cardUsable: function (card, player, num) {
                                        if (card.name == 'sha') return num + player.getAttackRange() - 1;
                                    },
                                },
                            },
                            "qunyou_jiangchi": {
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    return player.getCardUsable({
                                        name: 'sha'
                                    }) >= 0 && ((player.getStat().skill.qunyou_jiangchi || 0) < player.maxHp);
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
                                        player.addTempSkill('qunyou_jiangchi_attackRange');
                                        player.addTempSkill('qunyou_jiangchi_qinggang');
                                        player.addMark('qunyou_jiangchi_attackRange', 1, false);
                                    } else {
                                        player.draw();
                                        player.addTempSkill('qunyou_jiangchi_less');
                                        player.addMark('qunyou_jiangchi_less', 1, false);
                                    }
                                },
                                subSkill: {
                                    attackRange: {
                                        charlotte: true,
                                        onremove: true,
                                        mod: {
                                            attackRange: function (player, num) {
                                                return num + player.countMark('qunyou_jiangchi_attackRange');
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
                                                if (card.name == 'sha') return num - player.countMark('qunyou_jiangchi_less');
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
                                            player.removeSkill('qunyou_jiangchi_qinggang');
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
                            "qunyou_jiebi": {
                                enable: "phaseUse",
                                usable: 3,
                                filter: function (event, player) {
                                    return !player.hasSkill("qunyou_jiebi_no");
                                },
                                content: function () {
                                    "step 0"
                                    event.usedNum = (player.getStat().skill.qunyou_jiebi || 0);
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
                                        player.addTempSkill("qunyou_jiebi_no")
                                    }
                                },
                                subSkill: {
                                    no: {
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_zishi": {
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                filter: function (event, player) {
                                    return event.player != player;
                                },
                                forced: true,
                                content: function () {
                                    "step 0"
                                    player.addTempSkill('qunyou_zishi_count');
                                    player.addMark('qunyou_zishi_count', 1, false);
                                    event.usedNum = player.countMark('qunyou_zishi_count');
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
                        },
                        //武将分栏
                        characterSort: {
                            qunyou: {
                                "yuandan": ["qunyou_xiefuren", "qunyou_weidan", "qunyou_luzhi", "qunyou_huangyueying", "qunyou_qun_huangyueying", "qunyou_xietiao"],
                                "month1": ["qunyou_gansidui", "qunyou_pujing", "qunyou_caozhang", "qunyou_fengji", "qunyou_mouzhanghe"]
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
                            "qunyou_gansidui": "敢死队",
                            "qunyou_pujing": "普净",
                            "qunyou_caozhang": "曹彰",
                            "qunyou_fengji": "逢纪",
                            "qunyou_mou_zhanghe": "谋张郃",
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
                            "qunyou_gansi":"敢死",
                            "qunyou_gansi_info":"出牌阶段，你令一名角色死亡，然后你死亡。",
                            "qunyou_jiemou":"揭谋",
                            "qunyou_jiemou_info":"结束阶段,你可以摸一张牌,然后将一张牌置于一名其他角色的武将牌上。若有角色用颜色相同的牌指定其为目标,你可以展示并令其获得此牌，然后取消其为目标。",
                            "qunyou_yunyou":"云游",
                            "qunyou_yunyou_info":"锁定技,你记录你回合内失去牌的花色。花色在记录中的牌对你造成伤害时防止之,然后从记录中移除此花色。",
                            "qunyou_duhua":"度化",
                            "qunyou_duhua_info":"限定技,当一名角色处于濒死状态时,你可以弃置X张牌,令其弃置区域里的所有牌,复原武将牌,摸X张牌并回复×点体力,然后其获得【武圣】。(×最大为5)",
                            "qunyou_duhua_wusheng":"武圣",
                            "qunyou_duhua_wusheng_info":"你可以将一张红色牌当【杀】使用或打出,你使用的红色【杀】无距离限制且可以无视防具。",
                            "qunyou_xiongwu":"雄武",
                            "qunyou_xiongwu_info":"锁定技，你回合内使用【杀】的次数等于你的攻击距离。",
                            "qunyou_jiangchi":"将驰",
                            "qunyou_jiangchi_info":"出牌阶段限X次:1.摸一张牌使本回合使用【杀】次数-1;2.弃一张牌使本回合攻击距离+1且下一张【杀】无视防具(X为你的体力上限且一回合使用【杀】次数不应小于0)。",
                            "qunyou_jiebi":"诘愎",
                            "qunyou_jiebi_info":"出牌阶段可以依次发动，1.弃一张牌;2.失去一点体力;3.武将牌翻面。每发动一次视为使用一张不计入出牌次数且无出牌限制的【杀】;若此做造成了伤害,则你摸X张牌,然后本回合此技能失效(X为选项编号数)。",
                            "qunyou_zishi":"自恃",
                            "qunyou_zishi_info":"锁定技,每回合依次发动,当你成为其他角色使用牌的目标时:1.摸一张牌;2.回复一点体力;3.你与当前回合角色武将牌翻面。",
                            "qunyou_shibian":"识变",
                            "qunyou_shibian_info":"一名角色的回合开始时，你可以令本回合手牌数始终等于其手牌数。",
                            "qunyou_liaodi":"料敌",
                            "qunyou_liaodi_info":"当你因〖识变〗摸牌后，你可以令本轮〖识变〗失效。",
                            //分组部分
                            "yuandan": "<span style='font-family: yuanli'>元旦活动将</span>",
                            "month1": "<span style='font-family: yuanli'>1月正常将</span>"
                        },
                    }
                    if (lib.device || lib.node) {
                        for (var i in qunyou.character) qunyou.character[i][4].push('ext:群友DIY2023/image/character/' + i + '.jpg');
                    } else {
                        for (var i in qunyou.character) qunyou.character[i][4].push('db:extension-群友DIY2023/image/character:' + i + '.jpg');
                    }
                    return qunyou;
                })
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