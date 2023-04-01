game.import('character', function (lib, game, ui, get, ai, _status) {
    var qunyou2023 = {
        name: 'qunyou2023', //武将包命名（必填）
        connect: false, //该武将包是否可以联机（必填）
        //武将分组
        characterSort: {
            qunyou2023: {
                "yuandan": ["qunyou2023_yd_xiefuren", "qunyou2023_yd_weidan", "qunyou2023_yd_luzhi", "qunyou2023_yd_huangyueying", "qunyou2023_yd_qun_huangyueying", "qunyou2023_yd_xietiao"],
                "yurenjie": [],
                "month1": ["qunyou2023_m1_gansidui", "qunyou2023_m1_pujing", "qunyou2023_m1_caozhang", "qunyou2023_m1_fengji", "qunyou2023_m1_mou_zhanghe", "qunyou2023_m1_donghe"],
                "month2": ["qunyou2023_m2_jiangwei", "qunyou2023_m2_liubei", "qunyou2023_m2_dailaidongzhu", "qunyou2023_m2_aerwa", "qunyou2023_m2_aogusiting", "qunyou2023_m2_qifu_zhangliao"],
                "month3": ["qunyou2023_m3_heiyukuaidou", "qunyou2023_m3_feicunjianxin", "qunyou2023_m3_caocao", "qunyou2023_m3_liubei", "qunyou2023_m3_yitakuya", "qunyou2023_m3_zhangti", "qunyou2023_m3_shen_zhugeliang", "qunyou2023_m3_jiaxu", "qunyou2023_m3_hongxia", "qunyou2023_m3_diaochan", "qunyou2023_m3_caoanyang", "qunyou2023_m3_caoqingming", "qunyou2023_m3_sb_guojia"],
                "month4": ["qunyou2023_m4_shen_machao", ],
            },
        },
        character: {
            //yd
            "qunyou2023_yd_huangyueying": ["female", "shu", 3, ["qunyou2023_yd_jizhi", "qunyou2023_yd_qicai"],
                []
            ],
            "qunyou2023_yd_qun_huangyueying": ["female", "qun", 3, ["qunyou2023_yd_yanrong", "qunyou2023_yd_zhice"],
                []
            ],
            "qunyou2023_yd_luzhi": ["male", "qun", 3, ["qunyou2023_yd_mingren", "qunyou2023_yd_shouye", "qunyou2023_yd_fenghan"],
                []
            ],
            "qunyou2023_yd_xiefuren": ["female", "wu", Infinity, ["qunyou2023_yd_xinyou", "qunyou2023_yd_guiwang", "qunyou2023_yd_juexiang"],
                []
            ],
            "qunyou2023_yd_weidan": ["male", "wei", 3, ["qunyou2023_yd_chengwen", "qunyou2023_yd_dengjie", "qunyou2023_yd_zhuanzhang"],
                []
            ],
            "qunyou2023_yd_xietiao": ["female", "wu", 3, ["qunyou2023_yd_piaomiao", "qunyou2023_yd_yunque"],
                []
            ],



            //yrj



            //m1
            "qunyou2023_m1_gansidui": ["male", "qun", 4, ["qunyou2023_m1_gansi"],
                []
            ],
            "qunyou2023_m1_pujing": ["male", "qun", 3, ["qunyou2023_m1_jiemou", "qunyou2023_m1_yunyou", "qunyou2023_m1_duhua"],
                []
            ],
            "qunyou2023_m1_caozhang": ["male", "wei", 4, ["qunyou2023_m1_xiongwu", "qunyou2023_m1_jiangchi"],
                []
            ],
            "qunyou2023_m1_fengji": ["male", "qun", 3, ["qunyou2023_m1_jiebi", "qunyou2023_m1_zishi"],
                []
            ],
            "qunyou2023_m1_mou_zhanghe": ["male", "wei", 4, ["qunyou2023_m1_shibian", "qunyou2023_m1_liaodi"],
                []
            ],
            "qunyou2023_m1_donghe": ["male", "shu", 3, ["qunyou2023_m1_hezhi", "qunyou2023_m1_minxi"],
                []
            ],



            //m2
            "qunyou2023_m2_jiangwei": ["male", "shu", 4, ["qunyou2023_m2_tiaoxin", "qunyou2023_m2_huzhen", "qunyou2023_m2_jizhi"],
                []
            ],
            "qunyou2023_m2_liubei": ["male", "shu", 4, ["qunyou2023_m2_renwang", "qunyou2023_m2_renze", "qunyou2023_m2_jiangqi"],
                ["zhu"]
            ],
            "qunyou2023_m2_dailaidongzhu": ["male", "qun", 4, ["qunyou2023_m2_manyi", "qunyou2023_m2_weixiang", "qunyou2023_m2_panqin"],
                ['doublegroup:qun:shu']
            ],
            "qunyou2023_m2_aerwa": ["male", "qun", 3, ["qunyou2023_m2_ganzhi","qunyou2023_m2_endian", "qunyou2023_m2_qiji"],
                []
            ],
            "qunyou2023_m2_aogusiting": ["male", "qun", "3/4", ["qunyou2023_m2_liezui", "qunyou2023_m2_yongfa", "qunyou2023_m2_shazhen", "qunyou2023_m2_xinhuo"],
                []
            ],
            "qunyou2023_m2_qifu_zhangliao": ["male", "wei", 4, ["qunyou2023_m2_tuxi", "qunyou2023_m2_zhesheng"],
                []
            ],



            //m3
            "qunyou2023_m3_heiyukuaidou": ["male", "qun", 3, ["qunyou2023_m3_jiashu", "qunyou2023_m3_yueying", "qunyou2023_m3_wuxing"],
                []
            ],
            "qunyou2023_m3_feicunjianxin": ["male", "qun", 4, ["qunyou2023_m3_niren", "qunyou2023_m3_badao", "qunyou2023_m3_fengxin"],
                []
            ],
            "qunyou2023_m3_caocao": ["male", "qun", 4, ["qunyou2023_m3_tenglong", "qunyou2023_m3_tunzhi"],
                []
            ],
            "qunyou2023_m3_liubei": ["male", "qun", 3, ["qunyou2023_m3_qianlong", "qunyou2023_m3_jingzhu"],
                []
            ],
            "qunyou2023_m3_yitakuya": ["male", "qun", 4, ["qunyou2023_m3_fengxing", "qunyou2023_m3_yuanxi"],
                []
            ],
            "qunyou2023_m3_zhangti": ["male", "wu", 3, ["qunyou2023_m3_jue", "qunyou2023_m3_zhongqin"],
                []
            ],
            "qunyou2023_m3_shen_zhugeliang": ["male", "shen", "1/7", ["qunyou2023_m3_buxi", "qunyou2023_m3_zhentu", "qunyou2023_m3_shuoxin"],
                []
            ],
            "qunyou2023_m3_jiaxu": ["male", "wei", 3, ["qunyou2023_m3_mouhuo", "qunyou2023_m3_mingzhe"],
                []
            ],
            "qunyou2023_m3_hongxia": ["female", "key", 3, ["qunyou2023_m3_gu", "qunyou2023_m3_yin"],
                []
            ],
            "qunyou2023_m3_diaochan": ["female", "qun", 2, ["qunyou2023_m3_huahun", "qunyou2023_m3_yingjin","qunyou2023_m3_shaoxi"],
                []
            ],
            "qunyou2023_m3_caoanyang": ["female", "wei", 3, ["qunyou2023_m3_lianci", "qunyou2023_m3_shangfu"],
                []
            ],
            "qunyou2023_m3_caoqingming": ["female", "wei", 3, ["qunyou2023_m3_huaying", "qunyou2023_m3_xianlei"],
                []
            ],
            "qunyou2023_m3_sb_guojia": ["male", "wei", 3, ["qunyou2023_m3_tiandu", "qunyou2023_m3_yiji"],
                []
            ],



            //m4
            "qunyou2023_m4_shen_machao": ["male", "shen", 4, [],
                []
            ],


        },
        //武将介绍
        characterIntro: {},
        //武将称号
        characterTitle: {},
        //珠联璧合
        perfectPair:{},
        skill: {
            //qunyou2023_yd_huangyueying
            "qunyou2023_yd_jizhi": {
                trigger: {
                    global: "useCard",
                },
                frequent: true,
                filter: function (event, player) {
                    var type = get.type(event.card, 'trick');
                    return type == 'trick' && event.card.isCard;
                },
                content: function () {
                    player.draw();
                },
                onremove: function (player) {
                    player.removeGaintag('qunyou2023_yd_jizhi');
                },
                ai: {
                    threaten: 1.4,
                    noautowuxie: true,
                },
                mod: {
                    ignoredHandcard: function (card, player) {
                        if (card.hasGaintag('qunyou2023_yd_jizhi')) return true;
                    },
                    cardDiscardable: function (card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('qunyou2023_yd_jizhi')) return false;
                    },
                },
                group: ["qunyou2023_yd_jizhi_reset", "qunyou2023_yd_jizhi_count"],
                subSkill: {
                    reset: {
                        trigger: {
                            global: ["phaseAfter"],
                        },
                        silent: true,
                        priority: 10,
                        forced: true,
                        popup: false,
                        content: function () {
                            player.removeGaintag('qunyou2023_yd_jizhi');
                        },
                        sub: true,
                    },
                    count: {
                        trigger: {
                            player: 'gainBegin'
                        },
                        forced: true,
                        silent: true,
                        filter: function (event, player) {
                            return event.getParent(2).name == "qunyou2023_yd_jizhi";
                        },
                        content: function () {
                            trigger.gaintag.add('qunyou2023_yd_jizhi');
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_yd_qicai": {
                mod: {
                    targetInRange: function (card, player, target, now) {
                        var type = get.type(card);
                        if (type == 'trick' || type == 'delay') return true;
                    },
                    canBeDiscarded: function (card) {
                        if (get.position(card) == 'e' && ['equip2', 'equip5'].contains(get.subtype(card))) return false;
                    },
                },
                trigger: {
                    player: "useCard2",
                },
                direct: true,
                filter: function (event, player) {
                    if (get.type(event.card) != 'trick') return false;
                    var info = get.info(event.card);
                    if (info.notarget) return false;
                    return true;
                },
                content: function () {
                    'step 0'
                    var goon = false;
                    var info = get.info(trigger.card);
                    var players = game.filterPlayer();
                    for (var i = 0; i < players.length; i++) {
                        if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.contains(players[i])) {
                            goon = true;
                            break;
                        };
                    };
                    if (goon) {
                        player.chooseTarget('是否增加任意名' + get.translation(trigger.card) + '的目标？', [1, Infinity], function (card, player, target) {
                            var trigger = _status.event;
                            if (trigger.targets.contains(target)) return false;
                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                        }).set('ai', function (target) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            return get.effect(target, trigger.card, player, player);
                        }).set('targets', trigger.targets).set('card', trigger.card);
                    } else {
                        if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                            event.goto(3);
                        }
                    }
                    'step 1'
                    if (result.bool) {
                        if (!event.isMine()) game.delayx();
                        event.targets = result.targets;
                    } else {
                        event.goto(3);
                    }
                    'step 2'
                    if (event.targets) {
                        player.logSkill('qunyou2023_yd_qicai', event.targets);
                        trigger.targets.addArray(event.targets);
                    }
                    event.finish();
                    'step 3'
                    player.chooseTarget('是否减少任意名' + get.translation(trigger.card) + '的目标？', [1, Infinity], function (card, player, target) {
                        return _status.event.targets.contains(target);
                    }).set('ai', function (target) {
                        var trigger = _status.event.getTrigger();
                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                    }).set('targets', trigger.targets);
                    'step 4'
                    if (result.bool) {
                        event.targets = result.targets;
                        if (event.isMine()) {
                            player.logSkill('qunyou2023_yd_qicai', event.targets);
                            event.finish();
                        };
                        for (var i = 0; i < result.targets.length; i++) {
                            trigger.targets.remove(result.targets[i]);
                        };
                        game.delay();
                    } else {
                        event.finish();
                    };
                    'step 5'
                    player.logSkill('qunyou2023_yd_qicai', event.targets);
                },
            },

            //qunyou2023_yd_qun_huangyueying
            "qunyou2023_yd_yanrong": {
                trigger: {
                    target: "useCardToTargeted",
                },
                forced: true,
                preHidden: true,
                filter: function (event, player) {
                    return !event.player.hasSkill("qunyou2023_yd_yanrong_mark") && event.player != player;
                },
                content: function () {
                    "step 0"
                    trigger.getParent().excluded.add(player);
                    trigger.player.chooseToDiscard(1, 'he', true);
                    trigger.player.discardPlayerCard(player, true, 'he');
                    trigger.player.addSkill("qunyou2023_yd_yanrong_mark");
                },
                group: ["qunyou2023_yd_yanrong_draw", "qunyou2023_yd_yanrong_add"],
                subSkill: {
                    mark: {
                        mark: true,
                        direct: true,
                        marktext: "掩",
                        intro: {
                            content: "已触发掩容",
                            name: "掩容",
                        },
                        sub: true,
                    },
                    draw: {
                        forced: true,
                        popup: false,
                        trigger: {
                            player: "useCardToPlayer",
                        },
                        filter: function (event, player) {
                            return !event.target.hasSkill("qunyou2023_yd_yanrong_mark");
                        },
                        content: function () {
                            player.draw();
                        },
                        sub: true,
                    },
                    add: {
                        trigger: {
                            player: "useCard2",
                        },
                        direct: true,
                        filter: function (event, player) {
                            if (get.type(event.card) != 'trick') return false;
                            var info = get.info(event.card);
                            if (info.allowMultiple == false || info.notarget) return false;
                            return game.hasPlayer(function (current) {
                                return !event.targets.contains(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current) && !current.hasSkill("qunyou2023_yd_yanrong_mark");
                            });
                        },
                        content: function () {
                            'step 0'
                            var prompt2 = '为' + get.translation(trigger.card) + '增加一个目标';
                            var next = player.chooseTarget(get.prompt('qunyou2023_yd_qicai'), function (card, player, target) {
                                var player = _status.event.player;
                                if (_status.event.targets.contains(target)) return false;
                                if (target.hasSkill("qunyou2023_yd_yanrong_mark")) return false;
                                return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                            });
                            next.set('prompt2', prompt2);
                            next.set('ai', function (target) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                return get.effect(target, trigger.card, player, player) * (_status.event.targets.contains(target) ? -1 : 1);
                            });
                            next.set('targets', trigger.targets).set('card', trigger.card);
                            'step 1'
                            if (result.bool) {
                                if (!event.isMine() && !event.isOnline()) game.delayx();
                                event.targets = result.targets;
                            };
                            'step 2'
                            if (event.targets) {
                                player.logSkill('qunyou2023_yd_qicai', event.targets);
                                trigger.targets.addArray(event.targets);
                            };
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_yd_zhice": {
                enable: "phaseUse",
                filter: function (event, player) {
                    return game.hasPlayer(function (current) {
                        return !current.hasSkill("qunyou2023_yd_yanrong_mark") &&
                            !current.hasSkill('qunyou2023_yd_zhice_reset') &&
                            current.countDiscardableCards(player, 'he') > 1;
                    });
                },
                filterTarget: function (card, player, target) {
                    return !target.hasSkill("qunyou2023_yd_yanrong_mark") &&
                        !target.hasSkill('qunyou2023_yd_zhice_reset') &&
                        target.countDiscardableCards(player, 'he') > 1;
                },
                init: function (player) {
                    if (!player.storage.qunyou2023_yd_zhice_jinnang) player.storage.qunyou2023_yd_zhice_jinnang = [];
                },
                content: function () {
                    "step 0"
                    player.discardPlayerCard(target, 2, true);
                    target.addTempSkill('qunyou2023_yd_zhice_reset');
                    "step 1"
                    var list1 = [];
                    var bool = false;
                    for (var i of lib.inpile) {
                        if (get.type(i) == 'trick' && player.hasUseTarget({
                                name: i,
                                isCard: true
                            }) && !player.storage.qunyou2023_yd_zhice_jinnang.contains(i)) bool = true;
                    };
                    list1.push('摸一张牌');
                    if (bool) list1.push('视为使用一张未因此使用过的普通锦囊牌');
                    list1.push('cancel2');
                    player.chooseControl(list1);
                    "step 2"
                    event.control = result.control;
                    if (event.control == 'cancel2') event.finish;
                    "step 3"
                    if (event.control == '摸一张牌') {
                        player.draw();
                        player.logSkill('qunyou2023_yd_zhice');
                    };
                    "step 4"
                    if (event.control == '视为使用一张未因此使用过的普通锦囊牌') {
                        var list2 = [];
                        for (var i of lib.inpile) {
                            if (get.type(i) == 'trick' && !player.storage.qunyou2023_yd_zhice_jinnang.contains(i)) list2.push(['锦囊', '', i]);
                        };
                        var next = player.chooseButton(['视为使用一张未因此使用过的普通锦囊牌', [list2, 'vcard']]);
                        next.set('filterButton', function (button) {
                            return player.hasUseTarget({
                                name: button.link[2],
                                isCard: true
                            })
                        });
                        next.set('check', function (button) {
                            return _status.event.player.getUseValue({
                                name: button.link[2],
                                isCard: true
                            });
                        });
                    };
                    "step 5"
                    if (result.links[0][2]) {
                        lib.skill.qunyou2023_yd_zhice_x.viewAs = {
                            name: result.links[0][2],
                            isCard: true
                        };
                        lib.skill.qunyou2023_yd_zhice_x.prompt = '请选择' + get.translation(result.links[0][2]) + '的目标';
                        var next = player.chooseToUse();
                        next.logSkill = 'qunyou2023_yd_zhice';
                        next.set('norestore', true);
                        next.set('_backupevent', 'qunyou2023_yd_zhice_x');
                        next.backup('qunyou2023_yd_zhice_x');
                        player.storage.qunyou2023_yd_zhice_jinnang.push(result.links[0][2]);
                    };
                },
                subSkill: {
                    x: {
                        filterCard: () => false,
                        selectCard: -1,
                        popname: true,
                        sub: true,
                    },
                    reset: {
                        marktext: "智",
                        intro: {
                            content: "本回合已被智策弃牌",
                            name: "智策",
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_yd_mingren": {
                marktext: "任",
                intro: {
                    content: "expansion",
                    markcount: "expansion",
                },
                onremove: function (player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                trigger: {
                    player: "phaseBegin",
                },
                frequent: true,
                filter: function (event, player) {
                    return !player.getExpansions('qunyou2023_yd_mingren').length;
                },
                content: function () {
                    'step 0'
                    player.draw(2);
                    'step 1'
                    if (player.countCards('h') < 2) event.finish();
                    else player.chooseCard('h', 2, '将两张手牌置于武将牌上，称为“任”', true).set('ai', function (card) {
                        return 6 - get.value(card);
                    });
                    'step 2'
                    if (result.bool) {
                        player.addToExpansion(result.cards, player, 'give', 'log').gaintag.add('qunyou2023_yd_mingren');
                    };
                },
                mod: {
                    maxHandcard: function (player, num) {
                        return num + player.getExpansions('qunyou2023_yd_mingren').length;
                    },
                },
                group: "qunyou2023_yd_mingren_jieshu",
                subSkill: {
                    jieshu: {
                        trigger: {
                            player: "phaseJieshuBegin",
                        },
                        filter: function (event, player) {
                            return player.countCards('h') > 0 && player.getExpansions('qunyou2023_yd_mingren').length > 0;
                        },
                        direct: true,
                        content: function () {
                            "step 0"
                            var cards = player.getExpansions('qunyou2023_yd_mingren');
                            if (!cards.length || !player.countCards('h')) {
                                event.finish();
                                return;
                            }
                            var next = player.chooseToMove('明任：是否交换“任”和手牌？');
                            next.set('list', [
                                [get.translation(player) + '（你）的任', cards],
                                ['手牌区', player.getCards('h')],
                            ]);
                            next.set('filterMove', function (from, to) {
                                return typeof to != 'number';
                            });
                            next.set('processAI', function (list) {
                                var player = _status.event.player,
                                    cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                        return get.value(a) - get.value(b);
                                    }),
                                    cards2 = cards.splice(0, player.getExpansions('qixing').length);
                                return [cards2, cards];
                            });
                            "step 1"

                            if (result.bool) {
                                var pushs = result.moved[0],
                                    gains = result.moved[1];
                                pushs.removeArray(player.getExpansions('qunyou2023_yd_mingren'));
                                gains.removeArray(player.getCards('h'));
                                if (!pushs.length || pushs.length != gains.length) return;
                                player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('qunyou2023_yd_mingren');
                                game.log(player, '将', pushs, '作为“任”置于武将牌上');
                                player.gain(gains, 'gain2');
                            };
                        },
                        sub: true,
                    },
                },
            },

            //qunyou2023_yd_luzhi
            "qunyou2023_yd_shouye": {
                enable: ["chooseToUse", "chooseToRespond"],
                hiddenCard: function (player, name) {
                    if (get.type(name) == 'basic' && lib.inpile.contains(name) && !player.storage.qunyou2023_yd_shouye.contains(i)) return true;
                },
                init: function (player) {
                    if (!player.storage.qunyou2023_yd_shouye) player.storage.qunyou2023_yd_shouye = [];
                },
                filter: function (event, player) {
                    if (event.responded || (player.countCards('h') + player.getExpansions('qunyou2023_yd_mingren').length < 2)) return false;
                    for (var i of lib.inpile) {
                        if (get.type(i) == 'basic' && event.filterCard({
                                name: i
                            }, player, event) && !player.storage.qunyou2023_yd_shouye.contains(i)) return true;
                    };
                    return false;
                },
                chooseButton: {
                    dialog: function (event, player) {
                        var list = [];
                        for (var i of lib.inpile) {
                            if (get.type(i) == 'basic' && event.filterCard({
                                    name: i
                                }, player, event) && !player.storage.qunyou2023_yd_shouye.contains(i)) {
                                list.push(['基本', '', i]);
                                if (i == 'sha') {
                                    for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                };
                            };
                        };
                        return ui.create.dialog('授业', [list, 'vcard'], 'hidden');
                    },
                    check: function (button) {
                        if (button.link[2] == 'shan') return 3;
                        var player = _status.event.player;
                        if (button.link[2] == 'jiu') {
                            if (player.getUseValue({
                                    name: 'jiu'
                                }) <= 0) return 0;
                            if (player.countCards('h', 'sha')) return player.getUseValue({
                                name: 'jiu'
                            });
                        };
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3]
                        }) / 4;
                    },
                    backup: function (links, player) {
                        return {
                            selectCard: -1,
                            filterCard: () => false,
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                                suit: 'none',
                                number: null,
                                isCard: true,
                            },
                            precontent: function () {
                                "step 0"
                                player.chooseTarget("选择移交牌的对象", 1, true, lib.filter.notMe).set('ai', function (target) {
                                    return get.attitude(player, target) + 0.5;
                                });
                                "step 1"
                                event.target = result.targets[0];
                                var list = player.getExpansions('qunyou2023_yd_mingren');
                                list.push(get.copy(player.getCards('h')));
                                player.chooseCardButton("请移交2张牌", 2, player.getExpansions('qunyou2023_yd_mingren').concat(get.copy(player.getCards('h'))), true);
                                "step 2"
                                if (result.bool) {
                                    event.target.gain(result.links, player, 'giveAuto');
                                }
                            },
                            onuse: function (result, player) {
                                player.storage.qunyou2023_yd_shouye.push(result.card.name);
                            },
                        };
                    },
                },
                group: ["qunyou2023_yd_shouye_reset"],
                subSkill: {
                    reset: {
                        trigger: {
                            global: "phaseEnd",
                        },
                        forced: true,
                        preHidden: true,
                        charlotte: true,
                        content: function () {
                            player.storage.qunyou2023_yd_shouye = [];
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_yd_fenghan": {
                trigger: {
                    global: "judge",
                },
                filter: function (event, player) {
                    return get.suit(event.player.judging[0]) == 'spade';
                },
                content: function () {
                    "step 0"
                    var card = get.cards()[0];
                    event.card = card;
                    game.cardsGotoOrdering(card).relatedEvent = trigger;
                    "step 1"
                    player.$throw(card);
                    if (trigger.player.judging[0].clone) {
                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                        game.broadcast(function (card) {
                            if (card.clone) {
                                card.clone.classList.remove('thrownhighlight');
                            }
                        }, trigger.player.judging[0]);
                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                    }
                    player.addToExpansion(trigger.player.judging[0], player, 'give', 'log').gaintag.add('qunyou2023_yd_mingren');
                    trigger.player.judging[0] = card;
                    game.log(trigger.player, '的判定牌改为', card);
                    game.delay(2);
                },
                ai: {
                    rejudge: true,
                    tag: {
                        rejudge: 1,
                    },
                },
            },

            //qunyou2023_yd_xiefuren
            "qunyou2023_yd_xinyou": {
                trigger: {
                    player: "loseAfter",
                    global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                },
                direct: true,
                superCharlotte: true,
                filter: function (event, player) {
                    if (player.countCards('h')) return false;
                    var evt = event.getl(player);
                    return evt && evt.player == player && evt.hs && evt.hs.length > 0 && evt.hs.length <= 3;
                },
                content: function () {
                    "step 0"
                    event.forceDie = true;
                    if (player.isDying() || player.countCards('h') > 0) {
                        event.finish();
                        return;
                    }
                    _status.dying.unshift(player);
                    game.broadcast(function (list) {
                        _status.dying = list;
                    }, _status.dying);
                    event.trigger('dying');
                    game.log(player, '濒死');
                    "step 1"
                    delete event.filterStop;
                    if (player.countCards('h') > 0) {
                        _status.dying.remove(player);
                        game.broadcast(function (list) {
                            _status.dying = list;
                        }, _status.dying);
                        event.finish();
                    }
                    "step 2"
                    _status.dying.remove(player);
                    game.broadcast(function (list) {
                        _status.dying = list;
                    }, _status.dying);
                    if (player.countCards('h') == 0 && !player.nodying) player.die(event.reason);
                },

                mod: {
                    maxHandcard: function (player, num) {
                        return Infinity;
                    },
                },
                group: ["qunyou2023_yd_xinyou_discard", "qunyou2023_yd_xinyou_defend"],
                subSkill: {
                    discard: {
                        trigger: {
                            player: "phaseJieshuBegin",
                        },
                        direct: true,
                        superCharlotte: true,
                        filter: function (event, player) {
                            //if(player.getHistory('skipped').contains('phaseUse')) return false;
                            return player.getHistory('useCard').length == 0;
                        },
                        content: function () {
                            player.chooseToDiscard('hes', 2, true)
                        },
                        sub: true,
                    },
                    defend: {
                        trigger: {
                            player: ["damageBegin3", "loseHpBegin"],
                        },
                        direct: true,
                        superCharlotte: true,
                        forced: true,
                        content: function () {
                            "step 0"
                            trigger.cancel();
                            player.chooseToDiscard('hes', trigger.num, true);
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_yd_guiwang": {
                audio: "ext:群友DIY2023-1:2",
                init: function (player) {
                    player.storage.qunyou2023_yd_guiwang = false;
                },
                filter: function (event, player) {
                    return player.countCards('h') == 0 && player.storage.qunyou2023_yd_guiwang == false;
                },
                trigger: {
                    player: "dying",
                },
                skillAnimation: true,
                animationColor: "gray",
                limited: true,
                unique: true,
                marktext: "归",
                mark: true,
                intro: {
                    content: "limited",
                },
                content: function () {
                    "step 0"
                    player.awakenSkill('qunyou2023_yd_guiwang');
                    var targets = game.filterPlayer();
                    targets.remove(player);
                    targets.sort(lib.sort.seat);
                    event.targets = targets;
                    event.num = 0;
                    "step 1"
                    if (event.targets[num].countGainableCards(player, 'e')) {
                        player.gainPlayerCard(event.targets[num], true, 'e');
                    };
                    if (++event.num < event.targets.length) event.redo();
                    "step 2"
                    player.turnOver();
                },
            },
            "qunyou2023_yd_juexiang": {
                trigger: {
                    global: "gameStart",
                },
                forced: true,
                content: function () {
                    "step 0"
                    player.draw(9);
                },
                group: ["qunyou2023_yd_juexiang_draw", "qunyou2023_yd_juexiang_revive"],
                subSkill: {
                    draw: {
                        trigger: {
                            player: "loseAfter",
                            global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                        },
                        direct: true,
                        filter: function (event, player) {
                            if (["qunyou2023_yd_juexiang_draw", "qunyou2023_yd_xinyou_discard"].contains(event.getParent(3).name)) return false;
                            var evt = event.getl(player);
                            return evt && evt.cards2 && evt.cards2.length > 1;
                        },
                        content: function () {
                            'step 0'
                            player.draw(trigger.num);
                            'step 1'
                            event.num = Math.min(trigger.num, 3);
                            if (trigger.getParent(3).name == "qunyou2023_yd_xinyou_defend") event.num--;
                            player.chooseToDiscard(event.num, true);
                        },
                        sub: true,
                    },
                    revive: {
                        trigger: {
                            player: "dying",
                        },
                        filter: function (event, player) {
                            return player.countCards('h') == 0;
                        },
                        direct: true,
                        content: function () {
                            "step 0"
                            var targets = game.filterPlayer();
                            targets.remove(player);
                            targets.sort(lib.sort.seat);
                            event.targets = targets;
                            event.num = 0;
                            "step 1"
                            if (event.targets[num].countCards('he')) {
                                event.targets[num].chooseCard('he', get.translation(player) + '濒死，是否交给' + get.translation(player) + '一张牌？').set('ai', function (card) {
                                    if (_status.event.goon) return 7 - get.value(card);
                                    return 0;
                                }).set('goon', get.attitude(target, player) > 0);
                            };
                            'step 2'
                            if (result.bool) {
                                player.gain(result.cards, event.targets[num], 'giveAuto');
                                event.finish();
                            } else {
                                game.log(event.targets[num], '拒绝给牌');
                            };
                            if (++event.num < event.targets.length) event.goto(1);
                        },
                        sub: true,
                    },
                },
            },

            //qunyou2023_yd_weidan
            "qunyou2023_yd_chengwen": {
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
            "qunyou2023_yd_dengjie": {
                enable: "phaseUse",
                filter: function (event, player) {
                    return player.countCards('he') >= Math.max(1, (player.getStat('skill').qunyou2023_yd_dengjie || 0));
                },
                selectCard: function () {
                    return Math.max(1, (_status.event.player.getStat('skill').qunyou2023_yd_dengjie || 0));
                },
                prompt: function () {
                    return '弃置' + get.cnNumber(Math.max(1, (_status.event.player.getStat('skill').qunyou2023_yd_dengjie || 0))) + '张牌使下张牌无使用与次数限制';
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
                    player.addSkill("qunyou2023_yd_dengjie_wuxian");
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
                            player.removeSkill("qunyou2023_yd_dengjie_wuxian");
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_yd_zhuanzhang": {
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

            //qunyou2023_yd_xietiao
            "qunyou2023_yd_piaomiao": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    player:"dying",
                },
                locked:true,
                direct:true,
                charlotte:true,
                skillAnimation:true,
                animationColor:"green",
                derivation:['qunyou2023_yd_cuizhi'],
                init:function (player){
                    if(!player.storage.qunyou2023_yd_piaomiao_nouse) player.storage.qunyou2023_yd_piaomiao_nouse=[];
                },
                filter:function (event,player){
                    return player.storage.qunyou2023_yd_piaomiao_nouse.length<4;
                },
                content:function(){
                    "step 0"
                    var list = ["spade","heart","club","diamond"];
                    for(var suit of player.storage.qunyou2023_yd_piaomiao_nouse) list.remove(suit);
                    player.chooseControl(list,"cancel2")
                    .set('prompt',"请选择一种花色无法使用");
                    "step 1"
                    if(result.control=="cancel2") event.finish();
                    event.suit = result.control;
                    "step 2"
                    player.logSkill('qunyou2023_yd_piaomiao');
                    player.addSkill('qunyou2023_yd_piaomiao_nouse');
                    player.storage.qunyou2023_yd_piaomiao_nouse.push(event.suit);
                    player.storage.qunyou2023_yd_piaomiao_nouse.sort(function(a,b){
                        return lib.suit.indexOf(b)-lib.suit.indexOf(a);
                    });
                    player.syncStorage('qunyou2023_yd_piaomiao_nouse');
                    player.draw(2);
                    var num=3-player.hp;
                    if(num) player.recover(num);
                    "step 3"
                    if(game.HasExtension('十周年UI')){
                        game.broadcastAll(function(player){
                            var list='';
                            for(var suit of player.getStorage('qunyou2023_yd_piaomiao_nouse')) list+=get.translation(suit);
                            if(player.marks.qunyou2023_yd_piaomiao_nouse) player.marks.qunyou2023_yd_piaomiao_nouse.firstChild.innerHTML=list;
                        },player);
                    };
                    "step 4"
                    var flag_black = player.storage.qunyou2023_yd_piaomiao_nouse.contains("spade")&&player.storage.qunyou2023_yd_piaomiao_nouse.contains("club")&&(event.suit=="spade"||event.suit=="club");
                    var flag_red = player.storage.qunyou2023_yd_piaomiao_nouse.contains("heart")&&player.storage.qunyou2023_yd_piaomiao_nouse.contains("diamond")&&(event.suit=="heart"||event.suit=="diamond");
                    
                    if(player.storage.qunyou2023_yd_piaomiao_nouse.length==4){
                        player.loseMaxHp(2);
                        player.addSkill("qunyou2023_yd_piaomiao_wuxian");
                    }
                    else if(flag_black||flag_red){
                        player.gainMaxHp();
                        player.addSkill("qunyou2023_yd_cuizhi");
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
                                if(player.storage.qunyou2023_yd_piaomiao_nouse.length==4) return "使用牌无次数和距离限制";
                                var list='';
                                for(var suit of player.getStorage('qunyou2023_yd_piaomiao_nouse')) list+=get.translation(suit);
                                return "无法使用"+list+"花色的牌";
                            },
                        },
                        mod:{
                            cardEnabled:function (card,player){
                                if(player.storage.qunyou2023_yd_piaomiao_nouse.length<4&&player.storage.qunyou2023_yd_piaomiao_nouse.contains(get.suit(card))) return false;
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
            "qunyou2023_yd_yunque": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                direct:true,
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
                        player.chooseTarget('弃置场上的一张牌',1,function(card,player,target){
                            return target.countCards('ej');
                        });
                    }
                    else event.finish();
                    "step 2"
                    if(result.bool){
                        player.discardPlayerCard(result.targets[0],'ej',true);
                        player.logSkill("qunyou2023_yd_yunque",result.targets[0]);
                    };
                    "step 3"
                    if(event.list.length>1) player.chooseTarget('令一名角色回复一点体力',1);
                    else event.finish();
                    "step 4"
                    if(result.bool){
                        result.targets[0].recover();
                        player.logSkill("qunyou2023_yd_yunque",result.targets[0]);
                    };
                    "step 5"
                    if(event.list.length>2) player.chooseBool("摸"+player.maxHp+"张牌，然后失去所有体力");
                    else event.finish();
                    "step 6"
                    if(result.bool){      
                        player.draw(player.maxHp);
                        player.loseHp(player.hp);
                        player.logSkill("qunyou2023_yd_yunque");
                    };
                },
            },
            "qunyou2023_yd_cuizhi": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    global:"damageSource",
                },
                direcr:true,
                filter:function (event,player){
                    if(player==event.source) return false;
                    return player.countCards('h')<=event.source.countCards('h')||player.hp<=event.source.hp;
                },
                content:function (){
                    "step 0"
                    player.chooseToDiscard('弃一张〖缥缈〗记录过的花色的牌并发动〖翠枝〗','he',function(card){
                        return player.storage.qunyou2023_yd_piaomiao_nouse.contains(get.suit(card));
                    });
                    "step 1"
                    if(result.bool==false) event.finish();
                    var list=[];
                    if(player.countCards('h')<=trigger.source.countCards('h')) list.push("获得"+get.translation(trigger.source)+"的一张牌");
                    if(player.hp<=trigger.source.hp) list.push("对"+get.translation(trigger.source)+"造成一点伤害");
                    list.push('cancel2');
                    player.chooseControl(list);
                    "step 2"
                    if(result.control=='cancel2') event.finish();
                    player.logSkill('qunyou2023_yd_cuizhi',trigger.source);
                    if(result.control=="获得"+get.translation(trigger.source)+"的一张牌") player.gainPlayerCard(trigger.source,'he',true,1);
                    if(result.control=="对"+get.translation(trigger.source)+"造成一点伤害") trigger.source.damage();
                },
            },

            //qunyou2023_m1_gansidui
            "qunyou2023_m1_gansi": {
                audio: ['wuhun2', 1],
                enable: "phaseUse",
                usable: 1,
                filterTarget: function (card, player, target) {
                    return target != player;
                },
                check: function (target) {
                    return get.attitude(_status.event.player, target) * (target.isDamaged() ? 2 : 1);
                },
                content: function () {
                    'step 0'
                    target.die();
                    'step 1'
                    player.die();
                },
                ai: {
                    order: 1,
                },
            },

            //qunyou2023_m1_pujing
            "qunyou2023_m1_jiemou": {
                trigger: {
                    player: "phaseEnd",
                },
                content: function () {
                    'step 0'
                    player.draw();
                    'step 1'
                    player.chooseCardTarget({
                        position: 'he',
                        filterCard: true,
                        selectCard: 1,
                        forced: true,
                        filterTarget: function (card, player, target) {
                            return player != target;
                        },
                        ai1: function (card) {
                            if (get.attitude(_status.event.player, _status.currentPhase) < 0 && _status.currentPhase.needsToDiscard() && card.name != 'du') return -1;
                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                if (get.type(ui.selected.cards[i]) == get.type(card) || (ui.selected.cards[i].name == 'du' && card.name != 'du')) return -1;
                            };
                            if (card.name == 'du') return 20;
                            return (_status.event.player.countCards('h') - _status.event.player.hp);
                        },
                        ai2: function (target) {
                            if (get.attitude(_status.event.player, _status.currentPhase) < 0) return -1;
                            var att = get.attitude(_status.event.player, target);
                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                if (target.hasSkillTag('nodu')) return 0;
                                return 1 - att;
                            };
                            if (target.countCards('h') > _status.event.player.countCards('h')) return 0;
                            return att - 4;
                        },
                        prompt: get.prompt2('qunyou2023_m1_jiemou'),
                    });
                    "step 2"
                    if (result.bool) {
                        var target = result.targets[0];
                        var cards = result.cards;
                        target.addToExpansion(cards, player, 'give').gaintag.add('qunyou2023_m1_jiemou');
                    }
                },
                intro: {
                    content: "expansion",
                    markcount: "expansion",
                },
                onremove: function (player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: "qunyou2023_m1_jiemou_kongzhi",
                subSkill: {
                    kongzhi: {
                        trigger: {
                            global: "useCardToPlayered",
                        },
                        filter: function (event, player, name) {
                            var cards = event.target.getExpansions('qunyou2023_m1_jiemou');
                            for (var i of cards) {
                                if (get.color(event.card) == get.color(i)) return true;
                            };
                            return false;
                        },
                        content: function () {
                            "step 0"
                            event.list = []
                            var cards = trigger.target.getExpansions('qunyou2023_m1_jiemou');
                            for (var i of cards) {
                                if (get.color(trigger.card) == get.color(i)) event.list.push(i);
                            };
                            trigger.player.gain(event.list, 'gain2', 'log');
                            "step 1"
                            trigger.getParent().excluded.add(trigger.target);
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m1_yunyou": {
                trigger: {
                    player: "loseEnd",
                },
                forced: true,
                locked: true,
                init: function (player) {
                    if (!player.storage.qunyou2023_m1_yunyou_suit) player.storage.qunyou2023_m1_yunyou_suit = [];
                },
                filter: function (event, player) {
                    return player == _status.currentPhase;
                },
                content: function () {
                    "step 0"
                    for (var card of trigger.cards) {
                        var suit = get.suit(card);
                        if (!player.storage.qunyou2023_m1_yunyou_suit.contains(suit)) {
                            player.addSkill('qunyou2023_m1_yunyou_suit');
                            player.storage.qunyou2023_m1_yunyou_suit.push(suit);
                            player.storage.qunyou2023_m1_yunyou_suit.sort(function (a, b) {
                                return lib.suit.indexOf(b) - lib.suit.indexOf(a);
                            });
                            player.syncStorage('qunyou2023_m1_yunyou_suit');
                        };
                    };
                    "step 1"
                    if (game.HasExtension('十周年UI')) {
                        game.broadcastAll(function (player) {
                            var list = '';
                            for (var suit of player.getStorage('qunyou2023_m1_yunyou_suit')) list += get.translation(suit);
                            if (player.marks.qunyou2023_m1_yunyou_suit) player.marks.qunyou2023_m1_yunyou_suit.firstChild.innerHTML = list;
                        }, player);
                    };
                },
                group: ["qunyou2023_m1_yunyou_undamage"],
                subSkill: {
                    suit: {
                        charlotte: true,
                        onremove: true,
                        mark: true,
                        intro: {
                            markcount: function (storage) {
                                if (game.HasExtension('十周年UI')) return undefined;
                                return storage.length;
                            },
                            content: '失去的卡牌的花色：$',
                        },
                        sub: true,
                    },
                    undamage: {
                        trigger: {
                            player: "damageBegin",
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (!event.card || !get.suit(event.card) || get.suit(event.card) == 'none') return false;
                            var suits = player.storage.qunyou2023_m1_yunyou_suit;
                            for (var suit of suits) {
                                if (get.suit(event.card) == suit) {
                                    return true;
                                }
                            }
                            return false;
                        },
                        content: function () {
                            "step 0"
                            trigger.cancel();
                            player.addSkill('qunyou2023_m1_yunyou_suit');
                            player.storage.qunyou2023_m1_yunyou_suit.remove(get.suit(trigger.card));
                            player.storage.qunyou2023_m1_yunyou_suit.sort(function (a, b) {
                                return lib.suit.indexOf(b) - lib.suit.indexOf(a);
                            });
                            player.syncStorage('qunyou2023_m1_yunyou_suit');
                            "step 1"
                            if (game.HasExtension('十周年UI')) {
                                game.broadcastAll(function (player) {
                                    var list = '';
                                    for (var suit of player.getStorage('qunyou2023_m1_yunyou_suit')) list += get.translation(suit);
                                    if (player.marks.qunyou2023_m1_yunyou_suit) player.marks.qunyou2023_m1_yunyou_suit.firstChild.innerHTML = list;
                                }, player);
                            };
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m1_duhua": {
                limited: true,
                unique: true,
                mark: true,
                intro: {
                    content: "limited",
                },
                derivation: ['qunyou2023_m1_duhua_wusheng'],
                skillAnimation: true,
                animationColor: "thunder",
                init: function (player, skill) {
                    player.storage[skill] = false;
                },
                check: function (event, player) {
                    if (get.attitude(player, event.player) < 4) return false;
                    if (player.countCards('h', function (card) {
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                            if (mod != 'unchanged') return mod;
                            var savable = get.info(card).savable;
                            if (typeof savable == 'function') savable = savable(card, player, event.player);
                            return savable;
                        }) >= 1 - event.player.hp) return false;
                    if (event.player == player || event.player == get.zhu(player)) return true;
                    if (_status.currentPhase && get.damageEffect(_status.currentPhase, player, player) < 0) return false;
                    return !player.hasUnknown();
                },
                trigger: {
                    global: "dying",
                },
                filter: function (event, player) {
                    return event.player.hp <= 0;
                },
                content: function () {
                    "step 0"
                    player.awakenSkill(event.name);
                    player.chooseToDiscard([1, 5], 'he', true);
                    "step 1"
                    if (result.bool) {
                        event.drawnum = result.cards.length;
                    }
                    trigger.player.discard(trigger.player.getCards('hej'), true);
                    trigger.player.link(false);
                    trigger.player.turnOver(false);
                    "step 2"
                    trigger.player.draw(event.drawnum);
                    trigger.player.recover(event.drawnum);
                    trigger.player.addSkillLog("qunyou2023_m1_duhua_wusheng");
                },
            },
            "qunyou2023_m1_duhua_wusheng": {
                audio: ['wusheng', 2],
                group: ["new_rewusheng"],
                direct: true,
                trigger: {
                    player: "useCardToPlayered",
                },
                filter: function (event) {
                    return event.card.name == 'sha' && get.color(event.card) == 'red';
                },
                forced: true,
                logTarget: "target",
                content: function () {
                    trigger.target.addTempSkill('qinggang2');
                    trigger.target.storage.qinggang2.add(trigger.card);
                },
                ai: {
                    "unequip_ai": true,
                    skillTagFilter: function (player, tag, arg) {
                        if (arg && arg.name == 'sha' && get.color(arg.card) == 'red' && arg.target) return true;
                        return false;
                    },
                    sub: true,
                },

            },

            //qunyou2023_m1_caozhang
            "qunyou2023_m1_xiongwu": {
                mod: {
                    cardUsable: function (card, player, num) {
                        if (card.name == 'sha') return num + player.getAttackRange() - 1;
                    },
                },
            },
            "qunyou2023_m1_jiangchi": {
                enable: "phaseUse",
                filter: function (event, player) {
                    return player.getCardUsable({
                        name: 'sha'
                    }) >= 0 && ((player.getStat().skill.qunyou2023_m1_jiangchi || 0) < player.maxHp);
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
                        player.addTempSkill('qunyou2023_m1_jiangchi_attackRange');
                        player.addTempSkill('qunyou2023_m1_jiangchi_qinggang');
                        player.addMark('qunyou2023_m1_jiangchi_attackRange', 1, false);
                    } else {
                        player.draw();
                        player.addTempSkill('qunyou2023_m1_jiangchi_less');
                        player.addMark('qunyou2023_m1_jiangchi_less', 1, false);
                    }
                },
                subSkill: {
                    attackRange: {
                        charlotte: true,
                        onremove: true,
                        mod: {
                            attackRange: function (player, num) {
                                return num + player.countMark('qunyou2023_m1_jiangchi_attackRange');
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
                                if (card.name == 'sha') return num - player.countMark('qunyou2023_m1_jiangchi_less');
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
                            player.removeSkill('qunyou2023_m1_jiangchi_qinggang');
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

            //qunyou2023_m1_fengji
            "qunyou2023_m1_jiebi": {
                enable: "phaseUse",
                usable: 3,
                filter: function (event, player) {
                    return !player.hasSkill("qunyou2023_m1_jiebi_no");
                },
                content: function () {
                    "step 0"
                    event.usedNum = (player.getStat().skill.qunyou2023_m1_jiebi || 0);
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
                        player.addTempSkill("qunyou2023_m1_jiebi_no")
                    }
                },
                subSkill: {
                    no: {
                        sub: true,
                    },
                },
            },
            "qunyou2023_m1_zishi": {
                trigger: {
                    target: "useCardToTargeted",
                },
                filter: function (event, player) {
                    return event.player != player;
                },
                forced: true,
                content: function () {
                    "step 0"
                    player.addTempSkill('qunyou2023_m1_zishi_count');
                    player.addMark('qunyou2023_m1_zishi_count', 1, false);
                    event.usedNum = player.countMark('qunyou2023_m1_zishi_count');
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

            //qunyou2023_m1_mou_zhanghe
            "qunyou2023_m1_shibian": {
                trigger: {
                    global: "phaseBegin",
                },
                init: function (player) {
                    if (!player.storage.qunyou2023_m1_shibian) player.storage.qunyou2023_m1_shibian = player;
                },
                filter: function (event, player) {
                    return event.player != player;
                },
                content: function () {
                    "step 0"
                    player.storage.qunyou2023_m1_shibian = trigger.player;
                    "step 1"
                    var num = player.storage.qunyou2023_m1_shibian.countCards('h') - player.countCards('h');
                    if (num >= 0) player.draw(num);
                    else player.chooseToDiscard('h', true, -num);
                    player.addTempSkill("qunyou2023_m1_shibian_draw");
                },
                subSkill: {
                    draw: {
                        mark: true,
                        intro: {
                            content: function (storage, player) {
                                return "手牌数始终和" + get.translation(player.getStorage('qunyou2023_m1_shibian')) + "相等";
                            },
                        },
                        trigger: {
                            global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                        },
                        forced: true,
                        filter: function (event, player) {
                            var num = player.storage.qunyou2023_m1_shibian.countCards('h');
                            return player.countCards('h') != num;
                        },
                        content: function () {
                            var num = player.storage.qunyou2023_m1_shibian.countCards('h') - player.countCards('h');
                            if (num > 0) player.draw(num);
                            else player.chooseToDiscard('h', true, -num);
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m1_liaodi": {
                trigger: {
                    player: "gainAfter",
                },
                filter: function (event, player) {
                    return event.getParent().name == 'draw' && event.getParent(2).name == 'qunyou2023_m1_shibian_draw';
                },
                content: function () {
                    player.removeSkill("qunyou2023_m1_shibian_draw");
                },
            },

            //qunyou2023_m1_donghe
            "qunyou2023_m1_hezhi": {
                audio: "ext:群友DIY/audio/skill:2",
                trigger: {
                    player: "useCard",
                },
                forced: true,
                filter: function (event, player) {
                    return event.targets && get.type(event.card, false) == 'trick' && !get.tag(event.card, 'damage');
                },
                content: function () {
                    for (var i of trigger.targets) i.draw();
                },
            },
            "qunyou2023_m1_minxi": {
                audio: "ext:群友DIY/audio/skill:2",
                locked:false,
                zhuanhuanji:true,
                mark:true,
                marktext:"☯",
                intro:{
                    markcount:function(storage,player){
                        if(!_status.currentPhase) return undefined;
                        return (player.getStat('skill').qunyou2023_m1_minxi||0)+1;
                    },
                    content:function(storage,player,skill){
                        var num=(player.getStat('skill').qunyou2023_m1_minxi||0)+1;
                        return player.storage.qunyou2023_m1_minxi?'你可以获得'+num+'名手牌数不少于你的其他角色一张牌':'你可以交给'+num+'名手牌数不大于你的其他角色一张手牌。';
                    },
                },
                enable:"phaseUse",
                multitarget:true,
                filter:function(event,player){
                    var num=(player.getStat('skill').qunyou2023_m1_minxi||0)+1;
                    if(player.hasSkill('qunyou2023_m1_minxi_disable')) return false;
                    return player.storage.qunyou2023_m1_minxi||player.countCards('h')>=num;
                },
                filterTarget:function(card,player,target){
                    if(player==target) return false;
                    if(player.storage.qunyou2023_m1_minxi) return target.countGainableCards(player,'he')&&target.countCards('h')>=player.countCards('h');
                    else return target.countCards('h')<=player.countCards('h');
                },
                selectTarget:function(){
                    var player=_status.event.player,num=(player.getStat('skill').qunyou2023_m1_minxi||0)+1;
                    return num;
                },
                content:function(){
                    'step 0'
                    event.num=targets.length;
                    'step 1'
                    event.target=targets[targets.length-event.num];
                    if(!event.target.hasSkill('qunyou2023_m1_minxi_used')) event.target.addTempSkill('qunyou2023_m1_minxi_used');
                    else player.addTempSkill('qunyou2023_m1_minxi_disable');
                    if(player.storage.qunyou2023_m1_minxi) player.gainPlayerCard('获得'+get.translation(event.target)+'一张牌',event.target,'he',true);
                    else player.chooseCard(true,'h','交给'+get.translation(event.target)+'一张牌');
                    'step 2'
                    if(result.cards&&!player.storage.qunyou2023_m1_minxi) player.give(result.cards,event.target);
                    if(--event.num>0) event.goto(1);
                    'step 3'
                    player.changeZhuanhuanji('qunyou2023_m1_minxi');
                    if(!player.hasSkill('qunyou2023_m1_minxi_disable')) event.finish();
                    'step 4'
                    var list=[];
                    for(var j of lib.inpile){
                        if(get.type(j)=='trick'&&!get.tag({name:j,isCard:true},'damage')) list.push(j);
                    };
                    var next=player.chooseButton(['你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多'+(player.getStat('skill').qunyou2023_m1_minxi||0)+'个目标',[list,'vcard']]);
                    next.set('filterButton',function(button){
                        return player.hasUseTarget({name:button.link[2]});
                    });
                    'step 5'
                    if(result.links[0][2]){
                        lib.skill.qunyou2023_m1_minxi_x.viewAs={name:result.links[0][2],isCard:true};
                        lib.skill.qunyou2023_m1_minxi_x.prompt='视为使用一张'+get.translation(result.links[0][2]);
                        var next=player.chooseToUse();
                            next.logSkill='qunyou2023_m1_minxi';
                            next.set('norestore',true);
                            next.set('_backupevent','qunyou2023_m1_minxi_x');
                            next.backup('qunyou2023_m1_minxi_x');
                    };
                },
                group:['qunyou2023_m1_minxi_targets'],
                subSkill:{
                    targets:{
                        trigger:{
                            player:["useCard2"],
                        },
                        direct:true,
                        filter:function(event,player){
                            return !get.info(event.card).notarget&&event.skill=='qunyou2023_m1_minxi_x';
                        },
                        content:function(){
                            'step 0'
                            event.num=player.getStat('skill').qunyou2023_m1_minxi||0;
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
                                player.logSkill('qunyou2023_m1_minxi',event.targets);
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
                                    player.logSkill('qunyou2023_m1_minxi',event.targets);
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
                            player.logSkill('qunyou2023_m1_minxi',event.targets);
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
                            content:"〖民息〗失效",
                        },
                        sub:true,
                    },
                    used:{
                        mark:true,
                        intro:{
                            content:"本回合已被指定为〖民息〗的目标",
                        },
                        sub:true,
                    },
                },
            },

            //qunyou2023_m2_jiangwei
            "qunyou2023_m2_tiaoxin": {
                audio: ["tiaoxin_re_jiangwei", 2],
                enable: "phaseUse",
                usable: 1,
                init: function (player, skill) {
                    player.storage.qunyou2023_m2_tiaoxin = 0;
                },
                filterTarget: function (card, player, target) {
                    return target != player && target.countCards('he');
                },
                content: function () {
                    "step 0"
                    if (player.hasSkill("qunyou2023_m2_jizhi")) player.storage.qunyou2023_m2_tiaoxin++;
                    target.chooseToUse(function (card, player, event) {
                        if (get.name(card) != 'sha') return false;
                        return lib.filter.filterCard.apply(this, arguments);
                    }, '挑衅：对' + get.translation(player) + '使用一张杀，或令其获得你的一张牌').set('targetRequired', true).set('complexSelect', true).set('filterTarget', function (card, player, target) {
                        if (target != _status.event.sourcex && !ui.selected.targets.contains(_status.event.sourcex)) return false;
                        return lib.filter.filterTarget.apply(this, arguments);
                    }).set('sourcex', player);
                    "step 1"
                    if (result.bool == false && target.countCards('he') > 0) {
                        player.gainPlayerCard(target, 'he', true);
                    } else {
                        event.finish();
                    }
                },
                ai: {
                    order: 4,
                    expose: 0.2,
                    result: {
                        target: -1,
                        player: function (player, target) {
                            if (!target.canUse('sha', player)) return 0;
                            if (target.countCards('h') == 0) return 0;
                            if (target.countCards('h') == 1) return -0.1;
                            if (player.hp <= 2) return -2;
                            if (player.countCards('h', 'shan') == 0) return -1;
                            return -0.5;
                        },
                    },
                    threaten: 1.1,
                },
            },
            "qunyou2023_m2_huzhen": {
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
                filter:function(event,player){
                    return player.countCards('h')>0;
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
                    player.storage.qunyou2023_m2_huzhen_recover=trigger.player;
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
                group:["qunyou2023_m2_huzhen_recover"],
                subSkill:{
                    recover:{
                        trigger:{
                            player:"qunyou2023_m2_huzhenAfter",
                        },
                        direct:true,
                        init:function(player){
                            if(!player.storage.qunyou2023_m2_huzhen_recover) player.storage.qunyou2023_m2_huzhen_recover=[];
                        },
                        content:function(){
                            "step 0"
                            player.judge(function(card){return (get.suit(card)=='heart')?3:-2});
                            "step 1"
                            event.player=player.storage.qunyou2023_m2_huzhen_recover;
                            if(result.suit=="heart") event.player.recover(event.player.maxHp-event.player.hp);
                            player.awakenSkill("qunyou2023_m2_huzhen");
                        },
                        sub:true,
                    },
                },
            },
            "qunyou2023_m2_jizhi": {
                skillAnimation: true,
                animationColor: "fire",
                audio: 2,
                audioname: ["zhiji_re_jiangwei", 2],
                unique: true,
                juexingji: true,
                derivation: "qunyou2023_m2_zhentu",
                trigger: {
                    player: "phaseZhunbeiBegin",
                },
                mark: true,
                intro: {
                    markcount: function (storage, player) {
                        return player.storage.qunyou2023_m2_tiaoxin;
                    },
                    content: function (storage, player) {
                        return "已发动过" + player.storage.qunyou2023_m2_tiaoxin + "次〖挑衅〗";
                    },
                },
                forced: true,
                filter: function (event, player) {
                    if (player.storage.qunyou2023_m2_jizhi) return false;
                    return player.countCards('h') == 0 || player.storage.qunyou2023_m2_tiaoxin >= 3;
                },
                content: function () {
                    "step 0"
                    player.awakenSkill('qunyou2023_m2_jizhi');
                    player.gainMaxHp();
                    player.recover();
                    player.storage.qunyou2023_m2_jizhi = true;
                    player.addSkill("qunyou2023_m2_zhentu");
                },
            },
            "qunyou2023_m2_zhentu": {
                audio: ["bazhen_ol_sp_zhugeliang", 2],
                trigger: {
                    player: ["chooseToUseBegin"],
                },
                filter: function (event, player) {
                    if (event.responded) return false;
                    if (event.bagua_skill) return false;
                    if (!event.filterCard || !event.filterCard({
                            name: 'shan'
                        }, player, event)) return false;
                    return true;
                },
                audio: true,
                check: function (event, player) {
                    if (event && (event.ai || event.ai1)) {
                        var ai = event.ai || event.ai1;
                        var tmp = _status.event;
                        _status.event = event;
                        var result = ai({
                            name: 'shan'
                        }, _status.event.player, event);
                        _status.event = tmp;
                        return result > 0;
                    }
                    return true;
                },
                content: function () {
                    "step 0"
                    player.judge('qunyou2023_m2_zhentu', function (card) {
                        return (get.color(card) == 'red') ? 1.5 : 1
                    });
                    "step 1"
                    if (result.color == "red") {
                        trigger.untrigger();
                        trigger.set('responded', true);
                        trigger.result = {
                            bool: true,
                            card: {
                                name: 'shan',
                                isCard: true
                            }
                        }
                    } else if (result.color == "black") {
                        player.chooseUseTarget({
                            name: 'sha'
                        }, '是否视为使用一张【杀】？', false, 'nodistance');
                    };
                },
                ai: {
                    respondShan: true,
                    effect: {
                        target: function (card, player, target, effect) {
                            if (get.tag(card, 'respondShan')) return 0.5;
                        },
                    },
                },
            },

            //qunyou2023_m2_liubei
            "qunyou2023_m2_renwang": {
                audio: ["rerende_gz_jun_liubei", 2],
                trigger: {
                    player: "loseAfter",
                    global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                },
                direct: true,
                mark: true,
                intro: {
                    "name2": "仁",
                    content: "mark",
                },
                filter: function (event, player) {
                    var evt1 = event.getParent();
                    if (evt1.name == "gain" && evt1.targrt == player) return true;
                    if (evt1.player != player) return false;
                    if (player != _status.currentPhase) return true;
                    if (evt1.name == 'useCard') return false;
                    var evt2 = event.getl(player);
                    return evt2 && evt2.cards2 && evt2.cards2.length > 0;
                },
                content: function () {
                    player.addMark('qunyou2023_m2_renwang', trigger.cards.length);
                },
                group: "qunyou2023_m2_renwang_use",
                subSkill: {
                    use: {
                        enable: ["chooseToUse", "chooseToRespond"],
                        hiddenCard: function (player, name) {
                            if (player.hasSkill("qunyou2023_m2_renwang_disable")) return false;
                            if (get.type(name) == 'basic' && lib.inpile.contains(name) && player.countMark('qunyou2023_m2_renwang') >= 2) return true;
                        },
                        filter: function (event, player) {
                            if (player.hasSkill("qunyou2023_m2_renwang_disable")) return false;
                            if (event.type == 'wuxie' || player.countMark('qunyou2023_m2_renwang') < 2) return false;
                            for (var i of lib.inpile) {
                                if (get.type(i) != 'basic') continue;
                                var card = {
                                    name: i,
                                    isCard: true
                                };
                                if (event.filterCard(card, player, event)) return true;
                                if (i == 'sha') {
                                    for (var j of lib.inpile_nature) {
                                        card.nature = j;
                                        if (event.filterCard(card, player, event)) return true;
                                    }
                                }
                            }
                            return false;
                        },
                        chooseButton: {
                            dialog: function (event, player) {
                                var list = [];
                                for (var i of lib.inpile) {
                                    if (get.type(i) != 'basic') continue;
                                    var card = {
                                        name: i,
                                        isCard: true
                                    };
                                    if (event.filterCard(card, player, event)) list.push(['基本', '', i]);
                                    if (i == 'sha') {
                                        for (var j of lib.inpile_nature) {
                                            card.nature = j;
                                            if (event.filterCard(card, player, event)) list.push(['基本', '', i, j]);
                                        }
                                    }
                                }
                                return ui.create.dialog('仁望', [list, 'vcard'], 'hidden')
                            },
                            check: function (button) {
                                if (button.link[2] == 'shan') return 3;
                                var player = _status.event.player;
                                if (button.link[2] == 'jiu') {
                                    if (player.getUseValue({
                                            name: 'jiu'
                                        }) <= 0) return 0;
                                    if (player.countCards('h', 'sha')) return player.getUseValue({
                                        name: 'jiu'
                                    });
                                    return 0;
                                }
                                return player.getUseValue({
                                    name: button.link[2],
                                    nature: button.link[3]
                                }) / 4;
                            },
                            backup: function (links, player) {
                                return {
                                    selectCard: -1,
                                    filterCard: () => false,
                                    viewAs: {
                                        name: links[0][2],
                                        nature: links[0][3],
                                        isCard: true,
                                    },
                                    precontent: function () {
                                        player.logSkill('qunyou2023_m2_renwang');
                                        player.removeMark('qunyou2023_m2_renwang', 2);
                                        player.addTempSkill("qunyou2023_m2_renwang_disable");
                                    },
                                }
                            },
                            prompt: function (links, player) {
                                var name = links[0][2];
                                var nature = links[0][3];
                                return '失去两个“仁”标记并视为使用或打出' + (get.translation(nature) || '') + get.translation(name);
                            },
                        },
                        ai: {
                            order: 10,
                            respondShan: true,
                            respondSha: true,
                            skillTagFilter: function (player, tag) {
                                if (player.countMark('qunyou2023_m2_renwang') < 2) return false;
                            },
                            result: {
                                player: function (player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    return 1;
                                },
                            },
                        },
                        sub: true,
                    },
                    disable: {
                        mark: true,
                        intro: {
                            content: "本回合已使用〖仁望〗",
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m2_renze": {
                audio: ["rerende", 2],
                enable: "phaseUse",
                filterCard: true,
                selectCard: [1, Infinity],
                discard: false,
                lose: false,
                delay: 0,
                filterTarget: function (card, player, target) {
                    return player != target;
                },
                check: function (card) {
                    if (ui.selected.cards.length > 1) return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                    if (!ui.selected.cards.length && card.name == 'du') return 20;
                    var player = get.owner(card);
                    var num = 0;
                    var evt2 = _status.event.getParent();
                    var num = 0;
                    player.getHistory('lose', function (evt) {
                        if (evt.getParent().skill == 'rende' && evt.getParent(3) == evt2) num += evt.cards.length;
                    });
                    if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                        if (ui.selected.cards.length) {
                            return -1;
                        }
                        var players = game.filterPlayer();
                        for (var i = 0; i < players.length; i++) {
                            if (players[i].hasSkill('haoshi') &&
                                !players[i].isTurnedOver() &&
                                !players[i].hasJudge('lebu') &&
                                get.attitude(player, players[i]) >= 3 &&
                                get.attitude(players[i], player) >= 3) {
                                return 11 - get.value(card);
                            }
                        }
                        if (player.countCards('h') > player.hp) return 10 - get.value(card);
                        if (player.countCards('h') > 2) return 6 - get.value(card);
                        return -1;
                    }
                    return 10 - get.value(card);
                },
                content: function () {
                    player.give(cards, target);
                },
                ai: {
                    order: function (skill, player) {
                        if (player.hp < player.maxHp && player.storage.rende < 2 && player.countCards('h') > 1) {
                            return 10;
                        }
                        return 1;
                    },
                    result: {
                        target: function (player, target) {
                            if (target.hasSkillTag('nogain')) return 0;
                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                if (target.hasSkillTag('nodu')) return 0;
                                return -10;
                            }
                            if (target.hasJudge('lebu')) return 0;
                            var nh = target.countCards('h');
                            var np = player.countCards('h');
                            if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
                                if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                            }
                            return Math.max(1, 5 - nh);
                        },
                    },
                    effect: {
                        target: function (card, player, target) {
                            if (player == target && get.type(card) == 'equip') {
                                if (player.countCards('e', {
                                        subtype: get.subtype(card)
                                    })) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i] != player && get.attitude(player, players[i]) > 0) {
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                    threaten: 0.8,
                },
            },
            "qunyou2023_m2_jiangqi": {
                unique: true,
                audio: ["jijiang1_re_liubei", 2],
                enable: "phaseUse",
                usable: 1,
                filter: function (event, player) {
                    if (!player.hasZhuSkill('qunyou2023_m2_jiangqi')) return false;
                    return game.hasPlayer(function (current) {
                        if (current == player) return false;
                        return current.group == 'shu' && current.hp >= player.hp && game.hasPlayer(function (target) {
                            return current.inRange(target);
                        });
                    });
                },
                filterTarget: function (card, player, target) {
                    if (ui.selected.targets.length) {
                        if (target == player) return false;
                        var current = ui.selected.targets[0];
                        return target.group == 'shu' && target.hp >= player.hp && target.inRange(current);
                    }
                    return game.hasPlayer(function (current) {
                        if (current == player) return false;
                        return current.group == 'shu' && current.hp >= player.hp && current.inRange(target);
                    });
                },
                selectTarget: 2,
                multitarget: true,
                targetprompt: ['出杀目标', '选择人'],
                check: function (target) {
                    var player = _status.event.player;
                    if (ui.selected.targets.length) return 2 - get.sgn(get.attitude(player, target));
                    if (game.hasPlayer(function (current) {
                            if (current == player) return false;
                            return current.group == 'shu' && current.hp >= player.hp && current.inRange(target) && (!current.canUse({
                                name: 'sha'
                            }, target) || get.attitude(player, target) <= 0 || get.effect(target, {
                                name: 'sha'
                            }, current, player) > 0);
                        })) return -get.attitude(player, target);
                    return 0;
                },
                filterCard: () => false,
                selectCard: -1,
                zhuSkill: true,
                direct: true,
                content: function () {
                    'step 0'
                    var current = targets[0];
                    event.current = current;
                    var target = targets[1];
                    event.target = target;
                    player.logSkill('qunyou2023_m2_jiangqi');
                    player.line2([current, target]);
                    var next = target.chooseControl('出杀', '跳过阶段')
                    next.set('choiceList', [
                        '视为对' + get.translation(current) + '使用一张【杀】',
                        '跳过下个出牌阶段'
                    ])
                    next.set('ai', function () {
                        return (get.attitude(target, current) == 0 || get.effect(current, {
                            name: 'sha'
                        }, target, target) >= 0) ? '出杀' : '跳过阶段';
                    });
                    'step 1'
                    if (result.control == '出杀') target.useCard({
                        name: 'sha'
                    }, event.current, false, 'noai');
                    else {
                        target.skip('phaseUse');
                        game.log(target, '跳过了', '#g出牌阶段');
                    }
                },
            },

            //qunyou2023_m2_dailaidongzhu
            "qunyou2023_m2_manyi": {
                init: function (player) {
                    player._groupChosen = true;
                    player.changeGroup('qun', false);
                },
                locked: true,
                audio: "ext:群友DIY/audio/skill:2",
                trigger: {
                    target: 'useCardToBefore',
                },
                forced: true,
                priority: 15,
                filter: function (event, player) {
                    return event.card.name == 'nanman';
                },
                content: function () {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target: function (card) {
                            if (card.name == 'nanman') return [0, 1];
                        },
                    },
                },
                group: ["qunyou2023_m2_manyi_draw"],
                subSkill: {
                    draw: {
                        trigger: {
                            global: "respond",
                        },
                        filter: function (event, player) {
                            if (!event.respondTo[1]) return false;
                            if (event.respondTo[1].name != 'nanman') return false;
                            return event.card.name == 'sha';
                        },
                        forced: true,
                        content: function () {
                            'step 0'
                            player.draw();
                            player.logSkill("qunyou2023_m2_manyi");
                            if (trigger.target == player) event.finish();
                            player.chooseCard(true, 'he', '交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
                                if (get.position(card) == 'e') return -1;
                                if (card.name == 'shan') return 1;
                                if (get.type(card) == 'equip') return 0.5;
                                return 0;
                            });
                            "step 1"
                            player.give(result.cards, trigger.player, 'give');
                            game.delay();
                        },
                    },
                },
            },
            "qunyou2023_m2_weixiang": {
                audio: "ext:群友DIY/audio/skill:1",
                groupSkill: true,
                enable: "phaseUse",
                usable: 1,
                filter: function (event, player) {
                    return player.group == 'qun' && player.countCards('h') > 0;
                },
                filterTarget: function (card, player, target) {
                    return player.canCompare(target);
                },
                content: function () {
                    "step 0"
                    player.chooseToCompare(target).set('small', true);
                    "step 1"
                    if (!result.bool) {
                        if (target.countCards('he') > 0) player.gainPlayerCard(target, 'he', true);
                        player.changeGroup('shu');
                    } else {
                        var evt = _status.event;
                        for (var i = 0; i < 10; i++) {
                            if (evt && evt.getParent) evt = evt.getParent();
                            if (evt.name == 'phaseUse') {
                                evt.skipped = true;
                                break;
                            };
                        };
                    };
                },
                ai: {
                    order: 5,
                    result: {
                        target: function (target, player) {
                            return -1;
                        },
                    },
                },
            },
            "qunyou2023_m2_panqin": {
                audio: "ext:群友DIY/audio/skill:1",
                groupSkill: true,
                enable: "phaseUse",
                usable: 1,
                filter: function (event, player) {
                    return player.group == 'shu' && player.countCards('h') > 0;
                },
                filterTarget: function (card, player, target) {
                    return player.canCompare(target);
                },
                content: function () {
                    "step 0"
                    player.chooseToCompare(target);
                    "step 1"
                    if (result.bool) {
                        target.damage('nocard');
                        player.changeGroup('qun');
                    } else {
                        player.loseHp();
                    };
                },
                ai: {
                    order: 5,
                    result: {
                        target: function (target, player) {
                            return -2;
                        },
                    },
                },
            },

            //qunyou2023_m2_aerwa
            "qunyou2023_m2_ganzhi": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    global:'phaseBefore',
                    player:'enterGame',
                },
                forced:true,
                filter:function(event,player){
                    return event.name!='phase'||game.phaseNumber==0;
                },
                logTarget:()=>game.filterPlayer().sortBySeat(),
                derivation:'qunyou2023_m2_dianhe',
                content:function(){
                    'step 0'
                    game.countPlayer(function(current){
                        current.addSkill('qunyou2023_m2_dianhe');
                    });
                    game.log(player,'令所有其他角色获得了技能','#g【电荷】')
                    game.delayx();
                },
            },
            "qunyou2023_m2_dianhe": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    player:['phaseZhunbeiBegin',"damageBegin1"],
                },
                zhuanhuanji:true,
                forced:true,
                direct:true,
                mark:true,
                marktext:"☯",
                intro:{
                    content:function(storage,player){
                        var str=storage?'当前状态为：阳':'当前状态为：阴';
                        str+='<br>准备阶段，你变更转换技状态。<br>当你受到伤害时，若伤害来源的电荷为：';
                        str+=storage?'阴，此伤害+1；阳，此伤害-1。':'阴，此伤害-1；阳，此伤害+1。';
                        str+='然后你变更转换技状态。';
                        return str;
                    },
                },
                filter:function(event,player,name){
                    if (event.name=='phaseZhunbei') return true;
                    return event.source&&event.source.hasSkill('qunyou2023_m2_dianhe');
                },
                content:function(){
                    'step 0'
                    if(event.triggername!='damageBegin1') event.goto(1);
                    if(Boolean(trigger.source.storage['qunyou2023_m2_dianhe'])!=Boolean(player.storage['qunyou2023_m2_dianhe'])) trigger.num++;
                    if(Boolean(trigger.source.storage['qunyou2023_m2_dianhe'])==Boolean(player.storage['qunyou2023_m2_dianhe'])) trigger.num--;
                    'step 1'
                    player.changeZhuanhuanji('qunyou2023_m2_dianhe');
                    player.logSkill('qunyou2023_m2_dianhe');
                },
            },
            "qunyou2023_m2_endian": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger: {
                    player: "phaseUseBefore",
                },
                filter: function (event, player) {
                    return game.hasPlayer(function(current){
                        return current.hasSkill('qunyou2023_m2_dianhe')
                        &&Boolean(current.storage['qunyou2023_m2_dianhe'])!=Boolean(player.storage['qunyou2023_m2_dianhe'])
                        &&current.countGainableCards(player,'he')>0;
                    });
                },
                content: function () {
                    "step 0"
                    event.targets = game.filterPlayer(function(current){
                        return current.hasSkill('qunyou2023_m2_dianhe')
                        &&Boolean(current.storage['qunyou2023_m2_dianhe'])!=Boolean(player.storage['qunyou2023_m2_dianhe'])
                        &&current.countGainableCards(player,'he')>0;
                    });
                    for(var i of event.targets) player.gainPlayerCard(i, 'he', true);
                    "step 1"
                    player.changeZhuanhuanji('qunyou2023_m2_dianhe');
                },
            },
            "qunyou2023_m2_qiji": {
                global: "qunyou2023_m2_qiji_global",
                subSkill: {
                    global: {
                        mod: {
                            cardEnabled: function (card, player) {
                                var source = _status.currentPhase;
                                if (source && source != player 
                                    &&source.hasSkill('qunyou2023_m2_qiji')
                                    &&player.hasSkill('qunyou2023_m2_dianhe')
                                    &&source.hasSkill('qunyou2023_m2_dianhe')
                                    &&Boolean(source.storage['qunyou2023_m2_dianhe'])!=Boolean(player.storage['qunyou2023_m2_dianhe'])) return false;
                            },
                            cardUsable: function (card, player) {
                                var source = _status.currentPhase;
                                if (source && source != player 
                                    &&source.hasSkill('qunyou2023_m2_qiji')
                                    &&player.hasSkill('qunyou2023_m2_dianhe')
                                    &&source.hasSkill('qunyou2023_m2_dianhe')
                                    &&Boolean(source.storage['qunyou2023_m2_dianhe'])!=Boolean(player.storage['qunyou2023_m2_dianhe'])) return false;
                            },
                            cardRespondable: function (card, player) {
                                var source = _status.currentPhase;
                                if (source && source != player 
                                    &&source.hasSkill('qunyou2023_m2_qiji')
                                    &&player.hasSkill('qunyou2023_m2_dianhe')
                                    &&source.hasSkill('qunyou2023_m2_dianhe')
                                    &&Boolean(source.storage['qunyou2023_m2_dianhe'])!=Boolean(player.storage['qunyou2023_m2_dianhe'])) return false;
                            },
                            cardSavable: function (card, player) {
                                var source = _status.currentPhase;
                                if (source && source != player 
                                    &&source.hasSkill('qunyou2023_m2_qiji')
                                    &&player.hasSkill('qunyou2023_m2_dianhe')
                                    &&source.hasSkill('qunyou2023_m2_dianhe')
                                    &&Boolean(source.storage['qunyou2023_m2_dianhe'])!=Boolean(player.storage['qunyou2023_m2_dianhe'])) return false;
                            },
                        },
                        sub: true,
                    },
                },
            },

            //qunyou2023_m2_aogusiting
            "qunyou2023_m2_liezui": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    global:'damageBegin4',
                },
                mark:true,
                intro:{
                    content:'mark',
                },
                direct:true,
                filter:function(event,player){
                    return event.source!=player&&player.countMark("qunyou2023_m2_liezui")>0&&player.countCards("he")>0;
                },
                content:function(){
                    "step 0"
                    var str="猎罪：防止"+get.translation(trigger.player)+"受到的伤害";
                    if(trigger.source) str+="，然后视为对"+ get.translation(trigger.source) + '使用一张属性【杀】';
                    var next=player.chooseToDiscard(str,"he");
                    next.set('ai',function (card) {
                        if(!_status.event.goon) return false;
                        return 8-get.value(card);
                    });
                    next.set('goon',function (){
                        if(get.attitude(player,trigger.player)<=0) return false;
                        if(get.attitude(player,trigger.source)>0&&trigger.player.hp>1) return false;
                        if(trigger.player!=player&&trigger.player.hp>2) return false;
                        return true;
                    });
                    next.logSkill="qunyou2023_m2_liezui";
                    "step 1"
                    if(!result.bool) event.finish();
                    "step 2"
                    player.removeMark("qunyou2023_m2_liezui",1);
                    if(trigger.source){
                        var list = [];
                        for (var i of lib.inpile_nature) list.push(['基本', '', 'sha', i]);
                        player.chooseButton(['猎罪：视为对' + get.translation(trigger.source) + '使用一张属性【杀】</div>', [list, 'vcard']]);
                    };
                    "step 3"
                    trigger.cancel();
                    if(result.links[0][2]){
                        var card={
                            name: result.links[0][2],
                            nature: result.links[0][3],
                            isCard: true,
                        };
                        player.useCard(card, false, trigger.source, 'qunyou2023_m2_liezui');
                    };
                },
                ai:{
                    maixie_defend:true,
                    threaten:0.9,
                    result:{
                        effect:{
                            target:function(card,player,target){
                                if(get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                    if(!target.hasFriend()) return;
                                    if(target.countMark("qunyou2023_m2_liezui")>0&&target.countCards("he")>0){
                                        if(target.countMark("qunyou2023_m2_liezui")>1&&target.countCards("he")>1) return [0,0.5,1,-1];
                                        return [0,-0.5,1,-1];
                                    };
                                };
                            },
                        },
                    },
                },
            },
            "qunyou2023_m2_yongfa": {
                audio:"ext:群友DIY/audio/skill:2",
                enable: "phaseUse",
                filter: function (event, player) {
                    return player.countMark("qunyou2023_m2_yongfa")>0;
                },
                mark:true,
                intro:{
                    content:'mark',
                },
                init:function (player) {
                    player.storage.qunyou2023_m2_yongfa_card=[];
                },
                direct:true,
                content:function(){
                    'step 0'
                    var list=[];
                    for(var i of lib.inpile){
                        if(player.storage.qunyou2023_m2_yongfa_card.contains(i)) continue;
                        var info=lib.card[i];
                        if(info.type=='trick'&&!get.tag({name: i, isCard: true}, 'multitarget')&&!info.notarget) list.push(['锦囊','',i]);
                    };
                    var next=player.chooseButton(['永罚：视为使用一张无距离限制的单目标锦囊牌',[list,'vcard']]);
                    next.set('filterButton',function (button) {
                        return player.hasUseTarget({name:button.link[2],isCard:true},false);
                    });
                    next.set('ai',function(button){
                        return _status.event.player.getUseValue({name:button.link[2],isCard:true});
                    });
                    'step 1'
                    if(!result.links[0][2]) event.finish();
                    event.card={name:result.links[0][2],isCard:true};
                    player.chooseUseTarget(event.card,'nodistance');
                    'step 2'
                    if(result.bool){
                        player.storage.qunyou2023_m2_yongfa_card.add(event.card.name);
                        player.logSkill("qunyou2023_m2_yongfa");
                        player.removeMark("qunyou2023_m2_yongfa",1);
                    };
                },
                ai:{
                    order:4,
                    result:{
                        player:1,
                    },
                    threaten:1.9,
                },
                group:["qunyou2023_m2_yongfa_card"],
                subSkill:{
                    card:{
                        trigger: {
                            player: "phaseAfter",
                        },
                        direct: true,
                        silent:true,
                        content: function () {
                            player.storage.qunyou2023_m2_yongfa_card=[];
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m2_shazhen": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger: {
                    player: ["enterGame","dying"],
                    global:'phaseBefore',
                },
                locked: true,
                forced: true,
                charlotte: true,
                skillAnimation: true,
                animationColor: "fire",
                filter: function (event, player) {
                    if(player.storage.disableEquip == undefined || player.storage.disableEquip.length >=5) return false;
                    return (event.name!='phase'||game.phaseNumber==0)||event.name=="dying";
                },
                content: function () {
                    "step 0"
                    player.loseMaxHp();
                    player.chooseToDisable();
                    "step 1"
                    player.recover(player.maxHp - player.hp);
                    var num=0;
                    for(var i=1;i<6;i++){
                        if(player.isDisabled(i)) num++;
                    };
                    player.draw(num);
                    var next=player.chooseControl("获得一个【猎罪】标记","获得一个【永罚】标记");
                    next.set('ai',function(){
                        return _status.event.choice;
                    });
                    next.set('choice',function (){
                        if((event.name!='phase'||game.phaseNumber==0)&&player.getSeatNum()==1) return "获得一个【永罚】标记";
                        if(player==_status.currentPhase) return "获得一个【永罚】标记";
                        var numDf=Math.min(player.countCards('he'),player.countMark("qunyou2023_m2_liezui"));
                        if(numDf>0&&(player.hp+numDf)>2) return "获得一个【永罚】标记";
                        return "获得一个【猎罪】标记";
                    }());
                    "step 2"
                    if(result.control){
                        if(result.control=="获得一个【猎罪】标记") player.addMark("qunyou2023_m2_liezui");
                        if(result.control=="获得一个【永罚】标记") player.addMark("qunyou2023_m2_yongfa");
                    };
                },
            },
            "qunyou2023_m2_xinhuo": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    player:['qunyou2023_m2_liezuiAfter','qunyou2023_m2_yongfaAfter'],
                },
                direct:true,
                forced:true,
                filter:function(event,player){
                    var num1=0;
                    for(var i=1;i<6;i++){
                        if(player.isDisabled(i)) num1++;
                    };
                    var num2=player.countMark("qunyou2023_m2_liezui")+player.countMark("qunyou2023_m2_yongfa");
                    return num1!=num2;
                },
                content: function () {
                    if(event.triggername=="qunyou2023_m2_liezuiAfter") player.addMark("qunyou2023_m2_yongfa");
                    if(event.triggername=="qunyou2023_m2_yongfaAfter") player.addMark("qunyou2023_m2_liezui");
                },
                mod:{
                    maxHandcard:function(player,num){
                        var num1=0;
                        for(var i=1;i<6;i++){
                            if(player.isDisabled(i)) num1++;
                        };
                        return num+num1;
                    }
                }
            },

            //qunyou2023_m2_qifu_zhangliao
            "qunyou2023_m2_tuxi": {
                audio: "retuxi",
                trigger: {
                    player: "phaseDrawBegin2",
                },
                direct: true,
                preHidden: true,
                filter: function (event, player) {
                    return event.num > 0 && !event.numFixed && game.hasPlayer(function (target) {
                        return target.countCards('he') > 0 && player != target;
                    });
                },
                content: function () {
                    "step 0"
                    var num = get.copy(trigger.num);
                    if (get.mode() == 'guozhan' && num > 2) num = 2;
                    player.chooseTarget(get.prompt('qunyou2023_m2_tuxi'), '获得至多' + get.translation(num) + '名角色的各一张牌，然后少摸等量的牌；若你获得的牌中包含装备牌，你翻面', [1, num], function (card, player, target) {
                        return target.countCards('he') > 0 && player != target;
                    }, function (target) {
                        var att = get.attitude(_status.event.player, target);
                        if (target.hasSkill('tuntian')) return att / 10;
                        return 1 - att;
                    }).setHiddenSkill('qunyou2023_m2_tuxi');
                    "step 1"
                    if (result.bool) {
                        result.targets.sortBySeat();
                        player.logSkill('qunyou2023_m2_tuxi', result.targets);
                        trigger.num -= result.targets.length;
                        player.gainMultiple(result.targets, 'he');
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (trigger.num <= 0) game.delay();
                },
                group: ["qunyou2023_m2_tuxi_turn"],
                subSkill: {
                    turn: {
                        trigger: {
                            player: "gainAfter",
                        },
                        direct: true,
                        filter: function (event, player) {
                            return event.getParent(3).name == 'qunyou2023_m2_tuxi';
                        },
                        content: function () {
                            "step 0"
                            var damage = false;
                            game.log(trigger.cards);
                            for (var i = 0; i < trigger.cards.length; i++) {
                                if (get.type(trigger.cards[i]) == 'equip') {
                                    damage = true;
                                    break;
                                }
                            }
                            if (damage) {
                                player.turnOver();
                            }
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m2_zhesheng": {
                trigger: {
                    global: "phaseUseBegin",
                },
                filter: function (event, player) {
                    return player.countCards('he') > 0 && player.isTurnedOver();
                },
                content: function () {
                    'step 0'
                    var next = player.choosePlayerCard(player, 'he', [1, Math.min(trigger.player.countCards('he'), player.countCards('he'))], get.prompt('qunyou2023_m2_zhesheng', player));
                    next.set('ai', function (button) {
                        if (!_status.event.goon) return 0;
                        var val = get.value(button.link);
                        if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                        return val;
                    });
                    next.set('goon', get.attitude(player, trigger.target) <= 0);
                    next.set('forceAuto', true);
                    'step 1'
                    if (result.bool) {
                        player.discardPlayerCard(trigger.player, 'he', result.cards.length, true);
                        player.logSkill('qunyou2023_m2_zhesheng', target);
                        player.addSkill('qunyou2023_m2_zhesheng_get');
                        player.addToExpansion('giveAuto', result.cards, target).gaintag.add('qunyou2023_m2_zhesheng_get');
                    }
                },
                subSkill: {
                    get: {
                        trigger: {
                            player: "turnOverEnd",
                        },
                        direct: true,
                        popup: false,
                        charlotte: true,
                        filter: function (event, player) {
                            return player.getExpansions('qunyou2023_m2_zhesheng_get').length > 0;
                        },
                        content: function () {
                            'step 0'
                            var cards = player.getExpansions('qunyou2023_m2_zhesheng_get');
                            player.gain(cards, 'draw');
                            game.log(player, '收回了' + get.cnNumber(cards.length) + '张“折盛”牌');
                            'step 1'
                            player.removeSkill('qunyou2023_m2_zhesheng_get');
                        },
                        intro: {
                            markcount: "expansion",
                            mark: function (dialog, storage, player) {
                                var cards = player.getExpansions('qunyou2023_m2_zhesheng_get');
                                if (player.isUnderControl(true)) dialog.addAuto(cards);
                                else return '共有' + get.cnNumber(cards.length) + '张牌';
                            },
                        },
                    },
                },
            },

            //qunyou2023_m3_heiyukuaidou
            "qunyou2023_m3_jiashu": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger: {
                    global: "phaseUseBegin",
                },
                filter: function (event, player) {
                    return player != event.player && player.countCards('h') > 0;
                },
                content: function () {
                    "step 0"
                    var list2 = [];
                    for (var i = 0; i < lib.inpile.length; i++) {
                        if (get.type(lib.inpile[i]) == 'trick') list2.push(['锦囊', '', lib.inpile[i]]);
                    };
                    var next = player.chooseButton([get.translation('qice'), [list2, 'vcard']]);
                    next.set('filterButton', function (button) {
                        return player.hasUseTarget({
                            name: button.link[2]
                        });
                    });
                    next.set('check', function (button) {
                        var player = _status.event.player;
                        var recover = 0,
                            lose = 1,
                            players = game.filterPlayer();
                        for (var i = 0; i < players.length; i++) {
                            if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                return (button.link[2] == 'juedou') ? 2 : -1;
                            }
                            if (!players[i].isOut()) {
                                if (players[i].hp < players[i].hp) {
                                    if (get.attitude(player, players[i]) > 0) {
                                        if (players[i].hp < 2) {
                                            lose--;
                                            recover += 0.5;
                                        }
                                        lose--;
                                        recover++;
                                    } else if (get.attitude(player, players[i]) < 0) {
                                        if (players[i].hp < 2) {
                                            lose++;
                                            recover -= 0.5;
                                        }
                                        lose++;
                                        recover--;
                                    }
                                } else {
                                    if (get.attitude(player, players[i]) > 0) {
                                        lose--;
                                    } else if (get.attitude(player, players[i]) < 0) {
                                        lose++;
                                    }
                                }
                            }
                        };
                        if (lose > recover && lose > 0) return (button.link[2] == 'nanman') ? 1 : -1;
                        if (lose < recover && recover > 0) return (button.link[2] == 'taoyuan') ? 1 : -1;
                        return (button.link[2] == 'wuzhong') ? 1 : -1;
                    });
                    "step 1"
                    if (result.links[0][2]) {
                        lib.skill.qunyou2023_m3_jiashu_x.viewAs = {name: result.links[0][2]};
                        lib.skill.qunyou2023_m3_jiashu_x.prompt = '将所有手牌当' + get.translation(result.links[0][2]) + '使用';
                        var next = player.chooseToUse();
                        next.set('norestore', true);
                        next.set('_backupevent', 'qunyou2023_m3_jiashu_x');
                        next.backup('qunyou2023_m3_jiashu_x');
                    };
                },
                group:"qunyou2023_m3_jiashu_draw",
                subSkill: {
                    x: {
                        filterCard: true,
                        selectCard: -1,
                        position: "h",
                        popname: true,
                        sub: true,
                    },
                    draw: {
                        trigger: {
                            source: "damageBefore",
                        },
                        direct: true,
                        popup: false,
                        filter: function (event, player) {
                            return event.getParent().skill == 'qunyou2023_m3_jiashu_x';
                        },
                        content: function () {
                            trigger.cancel();
                            player.draw();
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m3_yueying": {
                mod: {
                    globalTo: function (from, to, distance) {
                        if (to.countCards('h') == 0 || to.countCards('e') == 0) {
                            return distance + 1;
                        };
                    },
                },
            },
            "qunyou2023_m3_wuxing": {
                audio:"ext:群友DIY/audio/skill:2",
                enable: "phaseUse",
                skillAnimation: true,
                animationColor: "wood",
                limited: true,
                content: function () {
                    'step 0'
                    player.awakenSkill('qunyou2023_m3_wuxing');
                    if (!_status.characterlist) {
                        lib.skill.pingjian.initList();
                    }
                    var dialog = ui.create.dialog('将武将牌替换为一名角色', 'hidden');
                    dialog.add([_status.characterlist.randomGets(2), 'character']);
                    player.chooseButton(dialog, true).ai = function (button) {
                        return get.rank(button.link, true);
                    };
                    'step 1'
                    player.reinit('qunyou2023_m3_heiyukuaidou', result.links[0], false);
                },
                ai: {
                    order: 1,
                    save: true,
                    skillTagFilter: function (player, arg, target) {
                        return player == target;
                    },
                    result: {
                        player: 10,
                    },
                },
                mark: true,
                intro: {
                    content: "limited",
                },
                init: function (player, skill) {
                    player.storage[skill] = false;
                },
            },

            //qunyou2023_m3_feicunjianxin
            "qunyou2023_m3_niren": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger: {
                    target: "useCardToTarget",
                },
                direct: true,
                preHidden: true,
                filter: function (event, player) {
                    return event.card.name == 'sha';
                },
                content: function () {
                    "step 0"
                    var next = player.chooseToUse({
                        prompt: '是否对'+get.translation(trigger.player)+'使用一张【杀】？',
                        filterCard: function (card, player) {
                            if (get.name(card) != 'sha') return false;
                            return lib.filter.filterCard.apply(this, arguments);
                        },
                        filterTarget: function (card, player, target) {
                            return target == trigger.player;
                        },
                        addCount: false,
                    });
                    next.set('complexSelect', true);
                    next.logSkill = 'qunyou2023_m3_niren';
                    "step 1"
                    if (result.bool) {
                        trigger.getParent().excluded.push(player);
                    };
                    "step 2"
                    if (trigger.player.getCards('e',{subtype:['equip1']}).length>0&&player.hasHistory('useCard', function (evt) {
                            if (evt.getParent(2) != event) return false;
                            return player.hasHistory('sourceDamage', function (evtx) {
                                return evtx.card == evt.card;
                            });
                        })) {
                        var att = (get.attitude(player, trigger.player) <= 0);
                        var next = player.chooseButton();
                        next.set('att', att);
                        next.set('createDialog',['逆刃：弃置' + get.translation(trigger.player) + '的一张武器牌', trigger.player.getCards('e', {subtype: ['equip1']})]);
                        next.set('ai', function (button) {
                            if (_status.event.att) return get.buttonValue(button);
                            return 0;
                        });
                    };
                    "step 3"
                    if (result.bool) {
                        player.logSkill('qunyou2023_m3_niren', trigger.player);
                        trigger.player.discard(result.links[0]);
                    };
                },
            },
            "qunyou2023_m3_badao": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger: {
                    source: "damageSource",
                },
                direct:true,
                filter: function (event, player) {
                    if (player.countCards('hes',{name: "shan"}) == 0) return false;
                    if (event._notrigger.contains(event.player)) return false;
                    return event.card && event.card.name == 'sha' && event.player != player && event.player.isAlive() && event.player.countGainableCards(player, 'h') > 0;
                },
                check: function (event, player) {
                    return get.attitude(player, event.player) < 0 && player.countCards('h') > 1;
                },
                content: function () {
                    'step 0'
                    player.chooseToDiscard('hes',(card)=>card.name=='shan');
                    'step 1'
                    if (result.bool && trigger.player.countGainableCards(player,'h')) {
                        player.logSkill("qunyou2023_m3_badao");
                        player.gainPlayerCard(trigger.player, true, 'h');
                    };
                },
            },
            "qunyou2023_m3_fengxin": {
                audio:"ext:群友DIY/audio/skill:2",
                round: 1,
                enable:['chooseToRespond','chooseToUse'],
                filterCard: function (card, player, event) {
                    return true;
                },
                position:'hes',
                viewAs: {
                    name: "sha",
                    cards: [],
                    suit: "none",
                    number: null,
                    isCard: true,
                },
                check:function(card){
                    var val=get.value(card);
                    if(_status.event.name=='chooseToRespond') return 1/Math.max(0.1,val);
                    return 5-val;
                },
                ai: {
                    respondSha: true,
                },
            },

            //qunyou2023_m3_caocao
            "qunyou2023_m3_tenglong": {
                audio:"ext:群友DIY/audio/skill:2",
                enable: "phaseUse",
                usable: 1,
                content: function () {
                    "step 0"
                    event.cards = get.cards(4);
                    game.cardsGotoOrdering(event.cards);
                    player.showCards(event.cards);
                    "step 1"
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.color(event.cards[i]) != 'red') {
                            event.cards[i].discard();
                            event.cards.splice(i--, 1);
                        };
                    };
                    "step 2"
                    if (event.cards.length) {
                        player.gain(event.cards);
                        player.$gain2(event.cards);
                        player.addTempSkill("qunyou2023_m3_tenglong_damage");
                        game.delay();
                    };
                },
                subSkill: {
                    damage: {
                        mark:true,
                        intro:{
                            content:"造成的伤害+1",
                        },
                        trigger: {
                            source: "damageBegin",
                        },
                        forced: true,
                        unique: true,
                        content: function () {
                            trigger.num++;
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m3_tunzhi": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger: {
                    player: "phaseJieshuBegin",
                },
                preHidden: true,
                filter: function (event,player) {
                    return game.hasPlayer(function (current) {
                        return current.hasSkill('qunyou2023_m3_tunzhi_gain');
                    });
                },
                logTarget: function () {
                    return game.filterPlayer(function (current) {
                        return current.hasSkill('qunyou2023_m3_tunzhi_gain');
                    });
                },
                content: function () {
                    game.countPlayer(function (current) {
                        var num = current.countMark('qunyou2023_m3_tunzhi_gain');
                        if(num>0) player.gainPlayerCard(current, 'he', num, true);
                    });
                },
                group: ["qunyou2023_m3_tunzhi_add"],
                subSkill: {
                    add: {
                        trigger: {
                            source:'damageSource'
                        },
                        direct: true,
                        filter: function (event, player) {
                            return player == _status.currentPhase;
                        },
                        content: function () {
                            trigger.player.addTempSkill("qunyou2023_m3_tunzhi_gain");
                            trigger.player.addMark("qunyou2023_m3_tunzhi_gain", trigger.num, false);
                        },
                        sub: true,
                    },
                    gain: {
                        mark: true,
                        marktext: "志",
                        intro: {
                            content: "结束阶段，被曹操获得#张牌",
                        },
                    },
                },
            },

            //qunyou2023_m3_liubei
            "qunyou2023_m3_qianlong": {
                audio: "rejiushi",
                enable: "chooseToUse",
                usable: 1,
                hiddenCard: function (player, name) {
                    return name == 'jiu';
                },
                filter: function (event, player) {
                    return event.filterCard({
                        name: 'jiu',
                        isCard: true
                    }, player, event);
                },
                content: function () {
                    "step 0"
                    event.cards = get.bottomCards(4);
                    game.cardsGotoOrdering(event.cards);
                    player.showCards(event.cards);
                    "step 1"
                    for (var i = 0; i < event.cards.length; i++) {
                        if (get.color(event.cards[i])!= 'black') {
                            event.cards[i].discard();
                            event.cards.splice(i--, 1);
                        };
                    };
                    "step 2"
                    if (event.cards.length) {
                        player.gain(event.cards);
                        player.$gain2(event.cards);
                    };
                    player.useCard({name:'jiu', isCard:true}, player);
                    if (_status.event.getParent(2).type == 'dying') player.recover();
                },
                ai: {
                    save: true,
                    order: 5,
                    result: {
                        player: function (player) {
                            if (_status.event.parent.name == 'phaseUse') {
                                if (player.countCards('h', 'jiu') > 0) return 0;
                                if (player.getEquip('zhuge') && player.countCards('h', 'sha') > 1) return 0;
                                if (!player.countCards('h', 'sha')) return 0;
                                var targets = [];
                                var target;
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (get.attitude(player, players[i]) < 0) {
                                        if (player.canUse('sha', players[i], true, true)) {
                                            targets.push(players[i]);
                                        }
                                    }
                                }
                                if (targets.length) {
                                    target = targets[0];
                                } else {
                                    return 0;
                                }
                                var num = get.effect(target, {
                                    name: 'sha'
                                }, player, player);
                                for (var i = 1; i < targets.length; i++) {
                                    var num2 = get.effect(targets[i], {
                                        name: 'sha'
                                    }, player, player);
                                    if (num2 > num) {
                                        target = targets[i];
                                        num = num2;
                                    }
                                }
                                if (num <= 0) return 0;
                                var e2 = target.getEquip(2);
                                if (e2) {
                                    if (e2.name == 'tengjia') {
                                        if (!player.countCards('h', {
                                                name: 'sha',
                                                nature: 'fire'
                                            }) && !player.getEquip('zhuque')) return 0;
                                    }
                                    if (e2.name == 'renwang') {
                                        if (!player.countCards('h', {
                                                name: 'sha',
                                                color: 'red'
                                            })) return 0;
                                    }
                                    if (e2.name == 'baiyin') return 0;
                                }
                                if (player.getEquip('guanshi') && player.countCards('he') > 2) return 1;
                                return target.countCards('h') > 3 ? 0 : 1;
                            }
                            if (player == _status.event.dying || player.isTurnedOver()) return 3;
                        },
                    },
                    effect: {
                        target: function (card, player, target) {
                            if (card.name == 'guiyoujie') return [0, 0.5];
                            if (target.isTurnedOver()) {
                                if (get.tag(card, 'damage')) {
                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                    if (target.hp == 1) return;
                                    return [1, target.countCards('h') / 2];
                                }
                            }
                        },
                    },
                },
            },
            "qunyou2023_m3_jingzhu": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger: {
                    player: "damageEnd",
                },
                direct:true,
                filter: function (event, player) {
                    return event.num > 1 && player.countCards('h') > 0;
                },
                content: function () {
                    "step 0"
                    event.cards = player.getCards('h');
                    player.chooseTarget("将所有手牌交给一名其他角色", lib.filter.notMe);
                    "step 1"
                    if (result.bool) {
                        player.logSkill("qunyou2023_m3_jingzhu");
                        result.targets[0].gain(event.cards, player, 'giveAuto');
                        player.addTempSkill("qunyou2023_m3_jingzhu_nodamage", {
                            player: 'phaseBegin'
                        });
                        player.draw(player.maxHp - player.hp);
                    };
                },
                subSkill: {
                    nodamage: {
                        trigger: {
                            player: "damageBegin3",
                        },
                        forced: true,
                        content: function () {
                            trigger.cancel();
                        },
                        ai: {
                            maixie: true,
                            "maixie_hp": true,
                            nofire: true,
                            nothunder: true,
                            nodamage: true,
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'damage')) return [0, 0];
                                },
                            },
                        },
                        sub: true,
                    },
                },
            },

            //qunyou2023_m3_yitakuya
            "qunyou2023_m3_fengxing": {
                audio:"ext:群友DIY/audio/skill:2",
                mod: {
                    globalFrom: function (from, to, distance) {
                        return Math.min(get.distance(from.storage.qunyou2023_m3_fengxing, to), distance);
                    },
                },
                trigger: {
                    player: "phaseUseBegin",
                },
                direct:true,
                init: function (player) {
                    if (!player.storage.qunyou2023_m3_fengxing) player.storage.qunyou2023_m3_fengxing = player;
                },
                content: function () {
                    'step 0'
                    player.chooseTarget(get.prompt('qunyou2023_m3_fengxing'), '令一名角色获得“灯”标记', lib.filter.notMe);
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill('qunyou2023_m3_fengxing', target);
                        target.addAdditionalSkill('qunyou2023_m3_fengxing' + player.playerid, 'qunyou2023_m3_fengxing_mark');
                        game.countPlayer(function (current) {
                            if (current != target && current.hasSkill('qunyou2023_m3_fengxing_mark')) {
                                current.removeSkill('qunyou2023_m3_fengxing_mark');
                                current.removeAdditionalSkill('qunyou2023_m3_fengxing' + player.playerid);
                            }
                        });
                        player.storage.qunyou2023_m3_fengxing = target;
                    }
                },
                subSkill: {
                    mark: {
                        charlotte: true,
                        mark: true,
                        marktext: "灯",
                        intro: {
                            content: "你是冥界的引灯人",
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m3_yuanxi": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger: {
                    global: "phaseDrawBefore",
                },
                direct:true,
                filter: function (event, player) {
                    return get.distance(player, event.player) == 2 && player.countCards('he') > 0;
                },
                content: function () {
                    'step 0'
                    player.chooseCard('he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                        if (get.position(card) == 'e') return -1;
                        if (card.name == 'shan') return 1;
                        if (get.type(card) == 'equip') return 0.5;
                        return 0;
                    });
                    'step 1'
                    if(!result.bool) event.finish();
                    'step 2'
                    player.addTempSkill("qunyou2023_m3_yuanxi_disable",'roundStart');
                    trigger.player.gain(result.cards, player, 'give');
                    trigger.cancel();
                    'step 3'
                    if (player.storage.qunyou2023_m3_fengxing != player) {
                        player.storage.qunyou2023_m3_fengxing.gainPlayerCard(trigger.player, 'h', true);
                    };
                },
                subSkill:{
                    disable:{
                        mark:true,
                        intro:{
                            content:"本轮已使用过〖远袭〗",
                        },
                        sub:true,
                    },
                },
            },

            //qunyou2023_m3_zhangti
            "qunyou2023_m3_jue": {
                audio:"ext:群友DIY/audio/skill:2",
                enable: "phaseUse",
                filter: function (event, player) {
                    return !player.hasSkill('qunyou2023_m3_jue_0') || !player.hasSkill('qunyou2023_m3_jue_1') 
                    || !player.hasSkill('qunyou2023_m3_jue_2') || !player.hasSkill('qunyou2023_m3_jue_3');
                },
                filterTarget:true,
                prompt:"沮遏：请撅一个人",
                content: function () {
                    'step 0'
                    var juelist = [], list = [
                        '令其弃两张牌，然后跳过下个判定阶段',
                        '令其摸两张牌，然后跳过下个摸牌阶段',
                        '令其摸两张牌并弃一张牌，然后跳过下个出牌阶段',
                        '令其摸一张牌并弃两张牌，然后跳过下个弃牌阶段',
                    ];
                    for (var i = 0; i < 4; i++) {
                        if (!player.hasSkill('qunyou2023_m3_jue_' + i)) juelist.push('选项'+get.cnNumber(i+1,true));
                    }
                    var next=player.chooseControl(juelist,'cancel2')
                    next.set('choiceList', list);
                    next.set('prompt',"沮遏：请选择怎么撅"+get.translation(target));
                    'step 1'
                    switch (result.control) {
                        case '选项一':
                            player.logSkill('qunyou2023_m3_jue',target);
                            target.chooseToDiscard('he',2, true);
                            target.skip('phaseJudge');
                            target.addTempSkill('qunyou2023_m3_jue_phaseJudge', {player:'phaseJudgeSkipped'});
                            player.addTempSkill('qunyou2023_m3_jue_0');
                            break;
                        case '选项二':
                            player.logSkill('qunyou2023_m3_jue',target);
                            target.draw(2);
                            target.skip('phaseDraw');
                            target.addTempSkill('qunyou2023_m3_jue_phaseDraw', {player:'phaseDrawSkipped'});
                            player.addTempSkill('qunyou2023_m3_jue_1');
                            break;
                        case '选项三':
                            player.logSkill('qunyou2023_m3_jue',target);
                            target.draw(2);
                            target.chooseToDiscard('he',1, true)
                            target.skip('phaseUse');
                            target.addTempSkill('qunyou2023_m3_jue_phaseUse', {player:'phaseUseSkipped'});
                            player.addTempSkill('qunyou2023_m3_jue_2');
                            break;
                        case '选项四':
                            player.logSkill('qunyou2023_m3_jue',target);
                            target.draw(1);
                            target.chooseToDiscard('he',2, true)
                            target.skip('phaseDiscard');
                            target.addTempSkill('qunyou2023_m3_jue_phaseDiscard', {player:'phaseDiscardSkipped'});
                            player.addTempSkill('qunyou2023_m3_jue_3');
                            break;
                        default: event.finish();
                    };
                },
                subSkill: {
                    0:{}, 1:{}, 2:{}, 3:{},
                    phaseJudge: {
                        charlotte:true,
                        mark: true,
                        intro: {
                            content: "被撅了，跳过下个判定阶段",
                        },
                        sub:true,
                    },
                    phaseDraw: {
                        charlotte:true,
                        mark: true,
                        intro: {
                            content: "被撅了，跳过下个摸牌阶段",
                        },
                        sub: true,
                    },
                    phaseUse: {
                        charlotte:true,
                        mark: true,
                        intro: {
                            content: "被撅了，跳过下个出牌阶段",
                        },
                        sub: true,
                    },
                    phaseDiscard: {
                        charlotte:true,
                        mark: true,
                        intro: {
                            content: "被撅了，跳过下个弃牌阶段",
                        },
                        sub: true,
                    },
                },
            },
            "qunyou2023_m3_zhongqin": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{global:[
                    'phaseZhunbeiSkipped','phaseZhunbeiCancelled',
                    'phaseJudgeSkipped','phaseJudgeCancelled',
                    'phaseDrawSkipped','phaseDrawCancelled',
                    'phaseUseSkipped','phaseUseCancelled',
                    'phaseDiscardSkipped','phaseDiscardCancelled',
                    'phaseJieshuSkipped','phaseJieshuCancelled',
                ]},
                forced:true,
                content:function(){
                    player.draw();
                },
            },

            //qunyou2023_m3_shen_zhugeliang
            "qunyou2023_m3_buxi": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{player:"dying"},
                forced:true,
                charlotte:true,
                content:function(){
                    player.loseMaxHp();
                    player.recover(1-player.hp);
                },
                mod:{
                    maxHandcardBase:function(player,num){
                        return player.maxHp;
                    },
                },
            },
            "qunyou2023_m3_zhentu": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{player:"phaseJieshuBegin"},
                forced:true,
                filter:function(event,player){
                    return player.hp>1&&player.maxHp<7;
                },
                content:function(){
                    "step 0"
                    event.num=Math.min(7-player.maxHp,player.hp-1);
                    player.loseHp(event.num);
                    "step 1"
                    var next=player.chooseControl();
                    next.set("choiceList",[
                        "增加"+event.num+"点体力上限，然后进行一个额外的摸牌阶段",
                        "摸"+event.num+"张牌，然后进行一个额外的出牌阶段（此阶段内〖烁星〗改为“出牌阶段限两次”）",
                    ]);
                    next.set('ai',function(){
                        return _status.event.choice;
                    });
                    next.set('choice',function (){
                        if(player.maxHp>5) return "选项二";
                        if(player.maxHp>3&&game.hasPlayer(function(current){
                            return get.attitude(player,current)<0&&current.hp<2&&player.canUse('sha',current);
                        })) return "选项二";
                        return "选项一";
                    }());
                    "step 2"
                    if(result.control=="选项一"){
                        player.gainMaxHp(event.num);
                        var next=player.phaseDraw();
                        event.next.remove(next);
                        trigger.getParent().next.push(next);
                    };
                    if(result.control=="选项二"){
                        player.draw(event.num);
                        var next=player.phaseUse();
                        event.next.remove(next);
                        trigger.getParent().next.push(next);
                        player.addTempSkill("qunyou2023_m3_zhentu_mark",'phaseUseEnd');
                    };
                },
                subSkill:{
                    mark:{
                        charlotte:true,
                        mark:true,
                        intro:{
                            content:"发动〖烁星〗不用失去体力上限",
                        },
                        sub:true,
                    },
                },
            },
            "qunyou2023_m3_shuoxin": {
                audio:"ext:群友DIY/audio/skill:2",
                enable: "phaseUse",
                usable:1,
                filter:function(event,player){
                    return player.getCardUsable({name:'sha'})>0;
                },
                chooseButton:{
                    dialog:function(event,player){
                        var list1=[],list2=lib.linked.slice(0);
                        list2.remove('kami');
                        list1.push(['基本','','sha']);
                        for(var j of list2){
                            list1.push(['基本','','sha',j]);
                        };
                        return ui.create.dialog('烁星',[list1,'vcard']);
                    },
                    filter:function(button){
                        if(button.link[3]=="thunder") return _status.event.player.hasUseTarget({name:button.link[2],nature:button.link[3],isCard:true},false);
                        return _status.event.player.hasUseTarget({name:button.link[2],nature:button.link[3],isCard:true});
                    },
                    check:function(button){
                        return player.getUseValue({
                            name:button.link[2],
                            nature:button.link[3],
                        });
                    },
                    backup:function(links,player){
                        return {
                            audio:"ext:群友DIY/audio/skill:2",
                            filterCard:true,
                            position:'hes',
                            popname:true,
                            check:function(card){
                                return 8-get.value(card);
                            },
                            viewAs:{name:links[0][2],nature:links[0][3]},
                        }
                    },
                    prompt:function(links,player){
                        return '将一张牌当做'+(get.translation(links[0][3])||'普通')+get.translation(links[0][2])+'使用';
                    },
                },
                group:["qunyou2023_m3_shuoxin_effect","qunyou2023_m3_shuoxin_ice"],
                subSkill:{
                    effect:{
                        trigger:{player:'useCardToPlayered'},
                        forced:true,
                        popup:false,
                        firstDo:true,
                        filter:function(event,player){
                            return event.getParent().skill=='qunyou2023_m3_shuoxin_backup'&&event.card.name=='sha';
                        },
                        content:function(){
                            "step 0"
                            if(!player.hasSkill("qunyou2023_m3_zhentu_mark")) player.loseMaxHp();
                            if(trigger.addCount!==false){
                                trigger.addCount=false;
                                var stat=player.getStat('card');
                                if(stat&&stat.sha) stat.sha--;
                            };
                            "step 1"
                            switch(trigger.card.nature){
                                case undefined:player.recover();break;
                                case 'fire':trigger.getParent().baseDamage++;break;
                                case 'thunder':trigger.directHit.add(trigger.target);break;
                            };
                        },
                        mod:{
                            targetInRange:function(card,player){
                                if(_status.event.skill=='qunyou2023_m3_shuoxin_backup'&&card.name=='sha'&&card.nature=='thunder') return true;
                            },
                        },
                        ai:{
                            unequip:true,
                            directHit_ai:true,
                            skillTagFilter:function(player,tag,arg){
                                return arg&&arg.skill=='qunyou2023_m3_shuoxin_backup'&&arg.card.name=='sha'&&arg.card.nature=='thunder';
                            },
                        },
                    },
                    ice:{
                        trigger:{player:'useCardToAfter'},
                        forced:true,
                        popup:false,
                        firstDo:true,
                        filter:function(event,player){
                            return event.getParent().skill=='qunyou2023_m3_shuoxin_backup'&&event.card.name=='sha'&&event.card.nature=='ice';
                        },
                        content:function(){
                            trigger.target.addTempSkill("qunyou2023_m3_shuoxin_block");
                        },
                    },
                    block:{
                        mark:true,
                        mod:{
                            cardEnabled:function(){
                                return false;
                            },
                            cardRespondable:function(){
                                return false;
                            },
                            cardSavable:function(){
                                return false;
                            },
                        },
                        intro:{
                            content:'不能使用或打出牌',
                        },
                        sub:true,
                    },
                },
            },

            //qunyou2023_m3_jiaxu
            "qunyou2023_m3_mouhuo": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{global:'damageSource'},
                zhuanhuanji: true,
                mark: true,
                marktext: "☯",
                intro:{
                    content:function(storage,player){
                        var str = '当一名角色造成伤害后，';
                        if (player.storage.qunyou2023_m3_mouhuo) str += '你视为对受到伤害的角色使用一张【杀】。';
                        else str += '你视为对伤害来源使用一张【杀】。';
                        return str;
                    },
                },
                filter:function(event,player){
                    return event.getParent(3).name!="qunyou2023_m3_mouhuo"&&!player.hasSkill("qunyou2023_m3_mouhuo_disable");
                },
                logTarget:function(event,player){
                    if(player.storage.qunyou2023_m3_mouhuo) return event.player;
                    return event.source;
                },
                content:function(){
                    'step 0'
                    var target=(player.storage.qunyou2023_m3_mouhuo)?trigger.player:trigger.source;
                    player.useCard({name:'sha',isCard:true},target,false);
                    player.changeZhuanhuanji("qunyou2023_m3_mouhuo");
                    'step 1'
                    var bool=player.hasHistory('sourceDamage',function(evt){
                        var card=evt.card;
                        if(!card||card.name!='sha') return false;
                        var evtx=evt.getParent('useCard');
                        return evtx.card==card&&evtx.getParent()==event;
                    });
                    if(!bool){
                        player.addTempSkill('qunyou2023_m3_mouhuo_disable');
                        player.addTempSkill('qunyou2023_m3_mingzhe_enable');
                    };
                },
                subSkill:{
                    disable:{
                        mark:true,
                        intro:{
                            content:"本回合不能再发动〖谋祸〗",
                        },
                        sub:true,
                    },
                },
            },
            "qunyou2023_m3_mingzhe": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    player:'damageBegin3',
                },
                usable:2,
                forced:true,
                filter:function(event,player){
                    if(player.hasSkill("qunyou2023_m3_mingzhe_enable")) return true;
                    return !player.hasSkill("qunyou2023_m3_mingzhe_disable");
                },
                content:function(){
                    "step 0"
                    trigger.num--;
                    player.draw();
                    player.addTempSkill("qunyou2023_m3_mingzhe_disable");
                    "step 1"
                    if(trigger.card&&get.type(trigger.card)=='basic') player.loseHp();
                },
                subSkill:{
                    enable:{},
                    disable:{},
                },
            },

            //qunyou2023_m3_hongxia
            "qunyou2023_m3_gu": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{player:'phaseJieshuBegin'},
                filter:function(event,player){
                    return !event.numFixed;
                },
                frequent:true,
                mark:true,
                intro:{
                    content:function(storage,player){
                        return '你使用['+get.translation(player.storage.qunyou2023_m3_gu)+']的基本牌无次数限制';
                    },
                },
                init:function(player){
                    player.storage.qunyou2023_m3_gu='heart';
                },
                content:function(){
                    "step 0"
                    event.cards=get.cards(4);
                    game.cardsGotoOrdering(event.cards);
                    event.videoId=lib.status.videoId++;
                    game.broadcastAll(function(player,id,cards){
                        var str;
                        if(player==game.me) str='鼓：将一种花色的牌分配给任意其他角色或弃置并获得其余牌';
                        else str=get.translation(player.name)+'展示的牌';
                        var dialog=ui.create.dialog(str,cards);
                        dialog.videoId=id;
                    },player,event.videoId,event.cards);
                    game.log(player,'展示了',event.cards);
                    player.chooseControl(lib.suit);
                    "step 1"
                    player.storage.qunyou2023_m3_gu=result.control;
                    game.broadcastAll('closeDialog',event.videoId);
                    event.cards2=[];
                    for(var i=0;i<event.cards.length;i++){
                        if(get.suit(event.cards[i])!=player.storage.qunyou2023_m3_gu){
                            event.cards2.push(event.cards[i]);
                            event.cards.splice(i--,1);
                        }
                    };
                    'step 2'
                    if(event.cards.length){
                        player.chooseCardButton('鼓：请选择要分配的牌',event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
                        });
                    };
                    'step 3'
                    if(result.bool){
                        event.togive=result.links;
                        player.chooseTarget('选择一名角色获得'+get.translation(result.links),lib.filter.notMe).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.enemy){
                                return -att;
                            }
                            else if(att>0){
                                return att/(1+target.countCards('h'));
                            }
                            else{
                                return att/100;
                            }
                        }).set('enemy',get.value(event.togive[0],player,'raw')<0);
                    }
                    else event.goto(5);
                    'step 4'
                    if(result.bool){
                        event.cards.removeArray(event.togive);
                        result.targets[0].gain(event.togive.slice(0),"gain2");
                    };
                    if(event.cards.length>0) event.goto(2);
                    'step 5'
                    player.gain(event.cards2,"gain2");
                },
                mod:{
                    cardUsable:function(card,player,num){
                        if(get.suit(card)==player.storage.qunyou2023_m3_gu&&get.type(card)=='basic') return Infinity;
                    },
                },
            },
            "qunyou2023_m3_yin": {
                unique:true,
                audio:"ext:群友DIY/audio/skill:2",
                mark:true,
                intro:{
                    content:function(storage,player){
                        return '其他角色可以交给你一张['+get.translation(player.storage.qunyou2023_m3_gu)+']牌，视为使用或打出一张【'+get.translation(player.storage.qunyou2023_m3_yin)+'】';
                    },
                },
                init:function(player){
                    player.storage.qunyou2023_m3_yin='tao';
                },
                enable:["chooseToUse","chooseToRespond"],
                hiddenCard:function(player,name){
                    if(get.type(name)!='basic') return false;
                    return player.hasCard(function(card){
                        return get.suit(card)==player.storage.qunyou2023_m3_gu;
                    },'hs');
                },
                filter:function(event,player){
                    if(!player.hasCard(function(card){
                        return get.suit(card)==player.storage.qunyou2023_m3_gu;
                    },'hs')) return false;
                    for(var name of lib.inpile){
                        if(get.type(name)!='basic') continue;
                        if(event.filterCard({name:name,suit:player.storage.qunyou2023_m3_gu},player,event)) return true;
                        if(name=='sha'){
                            for(var nature of lib.inpile_nature){
                                if(event.filterCard({name:'sha',nature:nature,suit:player.storage.qunyou2023_m3_gu},player,event)) return true;
                            }
                        }
                    }
                    return false;
                },
                chooseButton:{
                    dialog:function(event,player){
                        var list=[];
                        for(var name of lib.inpile){
                            if(get.type(name)=='basic'){
                                list.push(['基本','',name]);
                                if(name=='sha'){
                                    for(var nature of lib.inpile_nature) list.push(['基本','','sha',nature]);
                                };
                            };
                        };
                        return ui.create.dialog('音：将一张'+get.translation(player.storage.qunyou2023_m3_gu)+'花色的牌当做无次数限制的任意基本牌使用或打出',[list,'vcard'],'hidden');
                    },
                    filter:function(button,player){
                        return _status.event.getParent().filterCard({name:button.link[2],natrue:button.link[3],suit:player.storage.qunyou2023_m3_gu},player,_status.event.getParent());
                    },
                    check:function(button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3]};
                        if(_status.event.getParent().type!='phase'||game.hasPlayer(function(current){
                            return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
                        })){
                            switch(button.link[2]){
                                case 'tao':case 'shan':return 5;
                                case 'jiu':{
                                    if(player.storage.yizan&&player.countCards('hs',{type:'basic'})>2) return 3;
                                };
                                case 'sha':
                                    if(button.link[3]=='fire') return 2.95;
                                    else if(button.link[3]=='thunder'||button.link[3]=='ice') return 2.92;
                                    else return 2.9;
                            }
                        }
                        return 0;
                    },
                    backup:function(links,player){
                        return {
                            audio:"ext:群友DIY/audio/skill:2",
                            filterCard:function(card,player,target){
                                return get.suit(card)==player.storage.qunyou2023_m3_gu;
                            },
                            check:function(card,player,target){
                                return 6-get.value(card);
                            },
                            viewAs:{name:links[0][2],nature:links[0][3]},
                            position:'hs',
                            popname:true,
                            onuse:function(links,player){
                                player.storage.qunyou2023_m3_yin=links.card.name;
                            },
                        }
                    },
                    prompt:function(links,player){
                        return '将'+get.translation(player.storage.qunyou2023_m3_gu)+'花色的牌当做'+get.translation(links[0][3]||'')+'【'+get.translation(links[0][2])+'】使用或打出';
                    },
                },
                ai:{
                    order:function(){
                        var player=_status.event.player;
                        var event=_status.event;
                        if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0&&player.storage.yizan&&player.countCards('hs',{type:'basic'})>2){
                            return 3.3;
                        }
                        return 3.1;
                    },
                    skillTagFilter:function(player,tag,arg){
                        if(tag=='fireAttack') return true;
                        if(!player.storage.yizan&&player.countCards('hes')<2) return false;
                        if(!player.hasCard(function(card){
                            return get.type(card)=='basic';
                        },'hes')){
                            return false;
                        }
                    },
                    result:{
                        player:1,
                    },
                    respondSha:true,
                    respondShan:true,
                    fireAttack:true,
                },
                global:"qunyou2023_m3_yin_effect",
                subSkill:{
                    effect:{
                        enable:['chooseToRespond','chooseToUse'],
                        charlotte:true,
                        prompt:function(event,player){
                            var targets=game.filterPlayer(function(target){
                                return target.hasSkill('qunyou2023_m3_yin');
                            });
                            var suit=targets[0].storage.qunyou2023_m3_gu;
                            var name=targets[0].storage.qunyou2023_m3_yin;
                            return '交给'+get.translation(targets[0])+'一张['+get.translation(suit)+']牌，视为使用或打出一张【'+get.translation(name)+'】';
                        },
                        viewAs:function(cards,player){
                            var targets=game.filterPlayer(function(target){
                                return target.hasSkill('qunyou2023_m3_yin');
                            });
                            return {name:targets[0].storage.qunyou2023_m3_yin,isCard:true};
                        },
                        ignoreMod:true,
                        filterCard:function(card,player,event){
                            var targets=game.filterPlayer(function(target){
                                return target.hasSkill('qunyou2023_m3_gu');
                            });
                            return get.suit(card)==targets[0].storage.qunyou2023_m3_gu;
                        },
                        filter:function(event,player){
                            var targets=game.filterPlayer(function(target){
                                return target.hasSkill('qunyou2023_m3_yin');
                            });
                            if(targets[0]==player) return false;
                            if(targets[0].hasSkill('qunyou2023_m3_yin_disable')) return false;
                            var suit=targets[0].storage.qunyou2023_m3_gu;
                            var name=targets[0].storage.qunyou2023_m3_yin;
                            return event.filterCard({name:name},player,event)&&player.countCards('hes',(card)=>get.suit(card)==suit);
                        },
                        precontent:function(){
                            var targets=game.filterPlayer(function(target){
                                return target.hasSkill('qunyou2023_m3_yin');
                            });
                            targets[0].logSkill('qunyou2023_m3_yin');
                            targets[0].addTempSkill('qunyou2023_m3_yin_disable');
                            player.give(event.result.cards.slice(0),targets[0]);
                            event.result.card.cards=[];
                            event.result.cards=[];
                            delete event.result.skill;
                            delete event.result.card.suit;
                            delete event.result.card.number;
                        },
                        sub:true,
                    },
                },
            },

            //qunyou2023_m3_diaochan
            "qunyou2023_m3_huahun": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    player:'damageBegin4',
                },
                forced:true,
                filter:function(event,player){
                    return !player.hasSkill("qunyou2023_m3_huahun_disable");
                },
                content:function(){
                    "step 0"
                    player.draw(2);
                    "step 1"
                    if(trigger.num>=player.hp){
                        player.addTempSkill("qunyou2023_m3_huahun_disable");
                        trigger.cancel();
                    };
                },
                subSkill:{
                    disable:{
                        mark:true,
                        charlotte:true,
                        intro:{
                            content:"〖花魂〗失效",
                        },
                        sub:true,
                    },
                },
            },
            "qunyou2023_m3_yingjin": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{global:'phaseZhunbeiBegin'},
                prompt2:function(event,player){
                    return "是否令"+get.translation(event.player)+"本回合造成与受到的伤害+1，然后其视为对你使用一张【决斗】？";
                },
                check:function (event,player){
                    if(get.attitude(player,event.player)>=0) return true;
                    return player.countCards("he","sha")>event.player.countCards("he","sha");
                },
                content:function(){
                    "step 0"
                    trigger.player.addTempSkill("qunyou2023_m3_yingjin_add");
                    "step 1"
                    trigger.player.useCard({name:"juedou",isCard:true},player);
                },
            },
            "qunyou2023_m3_yingjin_add": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{player:'damageBegin3',source:'damageBegin1'},
                forced:true,
                mark:true,
                intro:{
                    content:"造成与受到的伤害+1",
                },
                content:function(){
                    trigger.num++;
                },
            },
            "qunyou2023_m3_shaoxi": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    global:"phaseUseEnd",
                },
                filter:function (event,player){
                    return !player.hasSkill('qunyou2023_m3_shaoxi_disable');
                },
                prompt2:function(event,player){
                    return "是否对"+get.translation(event.player)+"造成一点伤害，然后令其进行一个额外的出牌阶段？";
                },
                check:function (event,player){
                    if(get.attitude(player,event.player)>=0) return event.player.countCards('h')>event.player.hp&&event.player.hp>2&&!event.player.hasSkill("qunyou2023_m3_yingjin_add");
                    return event.player.countCards('h')<event.player.hp&&event.player.hp<=2&&event.player.hasSkill("qunyou2023_m3_yingjin_add");
                },
                logTarget:'player',
                content:function (){
                    player.addTempSkill('qunyou2023_m3_shaoxi_disable','roundStart');
                    trigger.player.damage();
                    var next=trigger.player.phaseUse();
                    event.next.remove(next);
                    trigger.getParent('phase').next.push(next);
                },
                ai:{
                    expose:0.3,
                },
                subSkill:{
                    disable:{
                        charlotte:true,
                        sub:true,
                    },
                },
            },

            //qunyou2023_m3_caoanyang
            "qunyou2023_m3_lianci": {
                audio:"ext:群友DIY/audio/skill:2",
                enable:'phaseUse',
                filterCard: function (card, player) {
                    return !card.hasGaintag('qunyou2023_m3_lianci');
                },
                position:'hs',
                discard:false,
                delay:false,
                insert:true,
                check:function(card){
                    return 8-get.value(card);
                },
                content:function(){
                    'step 0'
                    ui.cardPile.appendChild(cards[0]);
                    event.card=get.cardPile2(function(card){
                        return card.name!=cards[0].name&&get.type(card,'trick')==get.type(cards[0],'trick');
                    });
                    if(!event.card) event.finish();
                    'step 1'
                    game.cardsGotoOrdering(event.card);
                    var str=get.translation(player.name)+'展示的牌';
                    event.dialog = ui.create.dialog(str,[event.card]);
                    game.broadcast(function(str,cards){
                        ui.create.dialog(str,cards);
                    },str,event.card);
                    game.log(player,'展示了',event.card);
                    "step 2"
                    if(player.hasUseTarget(event.card)) player.chooseControl(['使用此牌','弃置此牌并摸一张牌']);
                    else{
                        event.control='弃置此牌并摸一张牌';
                        game.delayx(2.5);
                    };
                    "step 3"
                    if(!event.control) event.control=result.control;
                    game.broadcast('closeDialog',event.dialogid);
                    event.dialog.close();
                    "step 4"
                    if(event.control=='使用此牌') player.chooseUseTarget(event.card,'nopopup',true);
                    if(event.control=='弃置此牌并摸一张牌'){
                        game.cardsDiscard(event.card);
                        var card1 = get.cards(1);
                        player.gain(card1,'gain2').gaintag.add('qunyou2023_m3_lianci');
                    };
                },
                mod:{
                    ignoredHandcard:function(card,player){
                        if(card.hasGaintag('qunyou2023_m3_lianci')) return true;
                    },
                    cardDiscardable:function(card,player,name){
                        if(name=='phaseDiscard'&&card.hasGaintag('qunyou2023_m3_lianci')) return false;
                    },
                },
                group:"qunyou2023_m3_lianci_remove",
                subSkill:{
                    remove:{
                        trigger:{player:'phaseEnd'},
                        direct:true,
                        filter:function(ebent,player){
                            return player.countCards('hs',(card)=>card.hasGaintag('qunyou2023_m3_lianci'))>0;
                        },
                        content:function(){
                            player.removeGaintag('qunyou2023_m3_lianci');
                        },
                        sub:true,
                    },
                },
            },
            "qunyou2023_m3_shangfu": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{player:['phaseJieshuBegin','damageEnd']},
                frequent:true,
                filter:function(event,player){
                    return player.isDamaged();
                },
                content:function(){
                    'step 0'
                    event.cards=game.cardsGotoOrdering(get.bottomCards(player.getDamagedHp())).cards;
                    var bool=true,list=[];
                    for(var i of event.cards){
                        if(list.contains(get.type(i,'trick'))){
                            bool=false;
                            break;
                        };
                        list.push(get.type(i,'trick'));
                    };
                    if(event.cards.length>=2&&bool){
                        player.gainMaxHp();
                        player.recover();
                    };
                    'step 1'
                    if(event.cards.length>1){
                        player.chooseCardButton('殇赋：请选择要分配的牌',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
                        });
                    }
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        event.cards.removeArray(result.links);
                        event.togive=result.links.slice(0);
                        player.chooseTarget('选择一名角色获得'+get.translation(result.links),true).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.enemy){
                                return -att;
                            }
                            else if(att>0){
                                return att/(1+target.countCards('h'));
                            }
                            else{
                                return att/100;
                            }
                        }).set('enemy',get.value(event.togive[0],player,'raw')<0);
                    };
                    'step 3'
                    if(result.targets.length) result.targets[0].gain(event.togive,"gain2");
                    if(event.cards.length>0) event.goto(1);
                },
                ai:{
                    maixie:true,
                    maixie_hp:true,
                    effect:{
                        target:function(card,player,target){
                            if(get.tag(card,'damage')){
                                if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                if(!target.hasFriend()) return;
                                var num=1;
                                if(get.attitude(player,target)>0){
                                    if(player.needsToDiscard()){
                                        num=0.7;
                                    }
                                    else{
                                        num=0.5;
                                    }
                                }
                                if(target.hp>=4) return [1,num*2];
                                if(target.hp==3) return [1,num*1.5];
                                if(target.hp==2) return [1,num*0.5];
                            }
                        }
                    }
                }
            },

            //qunyou2023_m3_caoqingming
            "qunyou2023_m3_huaying": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
                    return event.player.hasSkill('qunyou2023_m3_huaying_xin');
                },
                content:function(){
                    trigger.player.removeSkill('qunyou2023_m3_huaying_xin');
                    player.draw();
                },
                group:"qunyou2023_m3_huaying_add",
                subSkill:{
                    add:{
                        audio:"ext:群友DIY/audio/skill:2",
                        trigger:{
                            player:'useCardToPlayered',
                            target:'useCardToTargeted',
                        },
                        forced:true,
                        filter:function(event,player){
                            if(event.name=='useCardToPlayered'){
                                if(lib.skill['qunyou2023_m3_xianlei'].group.contains(event.getParent(2).name)) return false;
                                return event.target!=player;
                            }
                            else return event.player!=player;
                        },
                        content:function(){
                            if(trigger.name=='useCardToPlayered'){
                                if(!trigger.target.hasSkill('qunyou2023_m3_huaying_xin')) trigger.target.addSkill('qunyou2023_m3_huaying_xin');
                                else player.draw();
                            }
                            else{
                                if(!trigger.player.hasSkill('qunyou2023_m3_huaying_xin')) trigger.player.addSkill('qunyou2023_m3_huaying_xin');
                                else player.draw();
                            }
                        },
                        sub:true,
                    },
                    xin:{
                        charlotte:true,
                        mark:true,
                        marktext:"形",
                        intro:{
                            content:"你已被赋予了“形”",
                        },
                    },
                },
            },
            "qunyou2023_m3_xianlei": {
                audio:"ext:群友DIY/audio/skill:2",
                group:['qunyou2023_m3_xianlei_damageEnd','qunyou2023_m3_xianlei_phaseUse'],
                subSkill:{
                    damageEnd:{
                        trigger:{
                            player:'damageEnd',
                        },
                        filter:function(event,player){
                            return game.hasPlayer((current)=>current.hasSkill('qunyou2023_m3_huaying_xin'));
                        },
                        direct:true,
                        content:function(){
                            "step 0"
                            var next=player.chooseTarget(function(card,player,target){
                                return target.hasSkill('qunyou2023_m3_huaying_xin');
                            });
                            next.set("prompt",get.prompt('qunyou2023_m3_xianlei')+"（受到伤害后）");
                            next.set("prompt2",get.translation('qunyou2023_m3_xianlei_info'));
                            next.set("targetprompt",function(target){
                                var str="";
                                if(target.name=="unknown") return "无";
                                var list=[],skills=lib.character[target.name][3];
                                for(var i=0;i<skills.length;i++){
                                    if(skills[i]=='qunyou2023_m3_xianlei') continue;
                                    var list2=[skills[i]];
                                    game.expandSkills(list2);
                                    for(var j=0;j<list2.length;j++){
                                        var info=lib.skill[list2[j]];
                                        if(!info||!info.trigger||!info.trigger.player||info.silent||info.limited||info.juexingji||info.zhuanhuanji||info.hiddenSkill||info.dutySkill) continue;
                                        if(info.trigger.player==event.triggername||Array.isArray(info.trigger.player)&&info.trigger.player.contains(event.triggername)){
                                            if(info.init||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
                                            if(info.filter){
                                                try{
                                                    var bool=info.filter(trigger,player,event.triggername);
                                                    if(!bool) continue;
                                                }
                                                catch(e){
                                                    continue;
                                                };
                                            };
                                            if(!list.contains(skills[i])) list.push(skills[i]);
                                        };
                                    };
                                };
                                if(list.length==0) str+="无";
                                else for(var i=0;i<list.length;i++){
                                    str+=get.translation(list[i]);
                                    if(i<list.length-1) str+="<br>";
                                };
                                return str;
                            });
                            "step 1"
                            if(!result.bool) event.finish();
                            event.target=result.targets[0];
                            "step 2"
                            event.list=[];
                            if(event.target.name!="unknown"){
                                var skills=lib.character[event.target.name][3];
                                for(var i=0;i<skills.length;i++){
                                    if(skills[i]=='qunyou2023_m3_xianlei') continue;
                                    var list2=[skills[i]];
                                    game.expandSkills(list2);
                                    for(var j=0;j<list2.length;j++){
                                        var info=lib.skill[list2[j]];
                                        if(!info||!info.trigger||!info.trigger.player||info.silent||info.limited||info.juexingji||info.zhuanhuanji||info.hiddenSkill||info.dutySkill) continue;
                                        if(info.trigger.player==event.triggername||Array.isArray(info.trigger.player)&&info.trigger.player.contains(event.triggername)){
                                            if(info.init||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
                                            if(info.filter){
                                                try{
                                                    var bool=info.filter(trigger,player,event.triggername);
                                                    if(!bool) continue;
                                                }
                                                catch(e){
                                                    continue;
                                                };
                                            };
                                            if(!event.list.contains(skills[i])) event.list.push(skills[i]);
                                        };
                                    };
                                };
                            };
                            var list1=[],k=0;
                            while(k<event.list.length){
                                list1.push(get.translation(event.list[k])+"："+get.translation(event.list[k]+"_info"));
                                k++;
                            };
                            list1.push("衔泪：视为对"+get.translation(event.target)+"使用一张不计入次数的基本牌或普通锦囊牌（不触发〖化影〗）");
                            if(list1.length==1) event.index=0;
                            else{
                                var next=player.chooseControl(event.list,"衔泪",'cancel2');
                                next.set('prompt',"移去"+get.translation(event.target)+"的【形】并选择一项");
                                next.set('choiceList',list1);
                                next.set("displayIndex",false);
                            };
                            "step 3"
                            if(result.control=='cancel2') event.goto(0);
                            if(result.index!=undefined) event.index=result.index;
                            "step 4"
                            if(event.index<=event.list.length-1){
                                player.logSkill('qunyou2023_m3_xianlei',event.target);
                                event.target.removeSkill('qunyou2023_m3_huaying_xin');
                                player.addTempSkill(event.list[event.index],'damageAfter');
                                event.finish();
                            };
                            "step 5"
                            if(event.index==event.list.length){
                                var list=[];
                                for(var i=0;i<lib.inpile.length;i++){
                                    var name=lib.inpile[i];
                                    if(name=='sha'){
                                        list.push(['基本','','sha']);
                                        for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                                    }
                                    else if(get.type(name)=='basic') list.push(['基本','',name]);
                                    else if(get.type(name)=='trick') list.push(['锦囊','',name]);
                                }
                                var next=player.chooseButton(["衔泪：视为对"+get.translation(event.target)+"使用一张不计入次数的基本牌或普通锦囊牌（不触发〖化影〗）",[list,'vcard']]);
                                next.set('filterButton',function(button){
                                    return player.canUse({name:button.link[2],nature:button.link[3],isCard:true},event.target,false);
                                });
                                next.set('check',function(button){
                                    return get.effect(event.target,{name:button.link[2],nature:button.link[3]},player,player);
                                });
                            };
                            "step 6"
                            if(result.bool==false){
                                if(event.index==0) event.goto(0);
                                else event.goto(2);
                            }
                            else{
                                player.logSkill('qunyou2023_m3_xianlei',event.target);
                                event.target.removeSkill('qunyou2023_m3_huaying_xin');
                                player.useCard({name:result.links[0][2],nature:result.links[0][3],isCard:true},event.target,false);
                            };
                        },
                        sub:true,
                    },
                    phaseUse:{
                        enable:"phaseUse",
                        filter:function(event,player){
                            return game.hasPlayer(function(current){
                                if(current.hasSkill('qunyou2023_m3_xianlei_disable')) return false;
                                return current.hasSkill('qunyou2023_m3_huaying_xin');
                        });
                        },
                        filterTarget:function(card,player,target){
                            if(target.hasSkill('qunyou2023_m3_xianlei_disable')) return false;
                            return target.hasSkill('qunyou2023_m3_huaying_xin');
                        },
                        prompt:function(){
                            return get.translation('qunyou2023_m3_xianlei_info');
                        },
                        targetprompt:function(target){
                            var str="";
                            if(target.name=="unknown") return "无";
                            var list=[],skills=lib.character[target.name][3];
                            for(var i=0;i<skills.length;i++){
                                if(skills[i]=='qunyou2023_m3_xianlei') continue;
                                var list2=[skills[i]];
                                game.expandSkills(list2);
                                for(var j=0;j<list2.length;j++){
                                    var info=lib.skill[list2[j]];
                                    if(!info||!info.enable||info.viewAs||info.limited||info.juexingji||info.zhuanhuanji||info.hiddenSkill||info.dutySkill) continue;
                                    if(info.enable=='phaseUse'||Array.isArray(info.enable)&&info.enable.contains('phaseUse')){
                                        if(info.init||info.onChooseToUse||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
                                        if(info.filter){
                                            try{
                                                var bool=info.filter(event.getParent(2),player);
                                                if(!bool) continue;
                                            }
                                            catch(e){
                                                continue;
                                            }
                                        };
                                        if(!list.contains(skills[i])) list.push(skills[i]);
                                    };
                                };
                            };
                            if(list.length==0) str+="无";
                            else for(var i=0;i<list.length;i++){
                                str+=get.translation(list[i]);
                                if(i<list.length-1) str+="<br>";
                            };
                            return str;
                        },
                        content:function(){
                            "step 0"
                            event.list=[];
                            if(target.name!="unknown"){
                                var skills=lib.character[target.name][3];
                                for(var i=0;i<skills.length;i++){
                                    if(skills[i]=='qunyou2023_m3_xianlei') continue;
                                    var list2=[skills[i]];
                                    game.expandSkills(list2);
                                    for(var j=0;j<list2.length;j++){
                                        var info=lib.skill[list2[j]];
                                        if(!info||!info.enable||info.viewAs||info.limited||info.juexingji||info.zhuanhuanji||info.hiddenSkill||info.dutySkill) continue;
                                        if(info.enable=='phaseUse'||Array.isArray(info.enable)&&info.enable.contains('phaseUse')){
                                            if(info.init||info.onChooseToUse||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
                                            if(info.filter){
                                                try{
                                                    var bool=info.filter(_status.event.getParent(2),_status.event.player);
                                                    if(!bool) continue;
                                                }
                                                catch(e){
                                                    continue;
                                                }
                                            };
                                            if(!event.list.contains(skills[i])) event.list.push(skills[i]);
                                        };
                                    };
                                };
                            };
                            var list1=[],k=0;
                            while(k<event.list.length){
                                list1.push(get.translation(event.list[k])+"："+get.translation(event.list[k]+"_info"));
                                k++;
                            };
                            list1.push("衔泪：视为对"+get.translation(target)+"使用一张不计入次数的基本牌或普通锦囊牌（不触发〖化影〗）");
                            if(list1.length==1) event.index=0;
                            else{
                                var next=player.chooseControl(event.list,"衔泪",'cancel2');
                                next.set('prompt',"移去"+get.translation(target)+"的【形】并选择一项");
                                next.set('choiceList',list1);
                                next.set("displayIndex",false);
                            };
                            "step 1"
                            if(result.control=='cancel2') event.finish();
                            if(result.index!=undefined) event.index=result.index;
                            "step 2"
                            if(event.index<=event.list.length-1){
                                player.logSkill('qunyou2023_m3_xianlei',target);
                                target.removeSkill('qunyou2023_m3_huaying_xin');
                                target.addTempSkill('qunyou2023_m3_xianlei_disable');
                                player.addTempSkill(event.list[event.index],'phaseUseEnd');
                                if(!player.hasSkill('qunyou2023_m3_xianlei_temp')) player.addTempSkill('qunyou2023_m3_xianlei_temp','phaseUseEnd');
                                player.storage.qunyou2023_m3_xianlei_temp.push(event.list[event.index]);
                                event.finish();
                            };
                            "step 3"
                            if(event.index==event.list.length){
                                var list=[];
                                for(var i=0;i<lib.inpile.length;i++){
                                    var name=lib.inpile[i];
                                    if(name=='sha'){
                                        list.push(['基本','','sha']);
                                        for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                                    }
                                    else if(get.type(name)=='basic') list.push(['基本','',name]);
                                    else if(get.type(name)=='trick') list.push(['锦囊','',name]);
                                }
                                var next=player.chooseButton(["衔泪：视为对"+get.translation(target)+"使用一张不计入次数的基本牌或普通锦囊牌（不触发〖化影〗）",[list,'vcard']]);
                                next.set('filterButton',function(button){
                                    return player.canUse({name:button.link[2],nature:button.link[3],isCard:true},target,false);
                                });
                                next.set('check',function(button){
                                    return get.effect(target,{name:button.link[2],nature:button.link[3]},player,player);
                                });
                            };
                            "step 4"
                            if(result.bool==false){
                                if(event.index==0) event.finish();
                                else event.goto(0);
                            }
                            else{
                                player.logSkill('qunyou2023_m3_xianlei',target);
                                target.removeSkill('qunyou2023_m3_huaying_xin');
                                target.addTempSkill('qunyou2023_m3_xianlei_disable');
                                player.useCard({name:result.links[0][2],nature:result.links[0][3],isCard:true},target,false);
                            };
                        },
                        sub:true,
                    },
                    temp:{
                        trigger:{player:['useSkillBegin','useCard1']},
                        silent:true,
                        firstDo:true,
                        init:function(player){
                            player.storage.qunyou2023_m3_xianlei_temp=[];
                        },
                        onremove:function(player){
                            delete player.storage.qunyou2023_m3_xianlei_temp;
                        },
                        filter:function(event,player){
                            var info=lib.skill[event.skill];
                            if(!info) return false;
                            if(player.storage.qunyou2023_m3_xianlei_temp.contains(event.skill)) return true;
                            if(player.storage.qunyou2023_m3_xianlei_temp.contains(info.sourceSkill)) return true;
                            if(player.storage.qunyou2023_m3_xianlei_temp.contains(info.group)) return true;
                            if(Array.isArray(info.group)&&player.storage.qunyou2023_m3_xianlei_temp.some((i)=>info.group.contains(i))) return true;
                            return false;
                        },
                        content:function(){
                            var info=lib.skill[trigger.skill];
                            if(player.storage.qunyou2023_m3_xianlei_temp.contains(trigger.skill)){
                                player.storage.qunyou2023_m3_xianlei_temp.remove(trigger.skill);
                                player.removeSkill(trigger.skill);
                            };
                            if(player.storage.qunyou2023_m3_xianlei_temp.contains(info.sourceSkill)){
                                player.storage.qunyou2023_m3_xianlei_temp.remove(info.sourceSkill);
                                player.removeSkill(info.sourceSkill);
                            };
                            if(player.storage.qunyou2023_m3_xianlei_temp.contains(info.group)){
                                player.storage.qunyou2023_m3_xianlei_temp.remove(info.group);
                                player.removeSkill(info.group);
                            };
                            if(Array.isArray(info.group)){
                                for(var i of player.storage.qunyou2023_m3_xianlei_temp){
                                    if(info.group.contains(i)){
                                        player.storage.qunyou2023_m3_xianlei_temp.remove(i);
                                        player.removeSkill(i);
                                    };
                                };
                            };
                        },
                        sub:true,
                    },
                    disable:{
                        charlotte:true,
                        mark:true,
                        intro:{
                            content:"本回合已成为过〖衔泪〗的目标",
                        },
                    },
                },
            },
            
            //qunyou2023_m3_sb_guojia
            "qunyou2023_m3_tiandu": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{player:'phaseBegin'},
                charlotte:true,
                forced:true,
                mark:true,
                intro:{
                    content:'你已被选为天之骄子',
                },
                content:function(){
                    player.die();
                },
            },
            "qunyou2023_m3_yiji": {
                audio:"ext:群友DIY/audio/skill:2",
                trigger:{player:'die'},
                direct:true,
                charlotte:true,
                skillAnimation:true,
                animationColor:'thunder',
                forceDie:true,
                content:function(){
                    "step 0"
                    player.chooseTarget(get.prompt2("qunyou2023_m3_yiji"),lib.filter.notMe).set('forceDie',true).set('ai',function(target){
                        if(target.hasSkill("qunyou2023_m3_tiandu")||target.hasSkill("qunyou2023_m3_yiji")) return 0;
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill("qunyou2023_m3_yiji",target);
                        player.line(target,'green');
                        target.addSkill("qunyou2023_m3_tiandu");
                        target.addSkill("qunyou2023_m3_yiji");
                    };
                },
                ai:{
                    expose:0.5,
                },
            },

            //qunyou2023_m4_shen_machao
        },
        translate: {
            // 分组部分
            "yuandan": "<span style='font-family: yuanli'>元旦活动将</span>",
            "yurenjie": "<span style='font-family: yuanli'>愚人节活动将</span>",
            "month1": "<span style='font-family: yuanli'>1月正常将</span>",
            "month2": "<span style='font-family: yuanli'>2月正常将</span>",
            "month3": "<span style='font-family: yuanli'>3月正常将</span>",
            "month4": "<span style='font-family: yuanli'>4月正常将</span>",


            // 武将部分
            //yd
            "qunyou2023_yd_huangyueying": "黄月英",
            "qunyou2023_yd_qun_huangyueying": "群黄月英",
            "qunyou2023_yd_luzhi": "卢植",
            "qunyou2023_yd_xiefuren": "谢夫人",
            "qunyou2023_yd_weidan": "韦诞",
            "qunyou2023_yd_xietiao": "谢窕",
            //yrj
            //m1
            "qunyou2023_m1_gansidui": "敢死队",
            "qunyou2023_m1_pujing": "普净",
            "qunyou2023_m1_caozhang": "曹彰",
            "qunyou2023_m1_fengji": "逢纪",
            "qunyou2023_m1_mou_zhanghe": "谋张郃",
            "qunyou2023_m1_donghe": "董和",
            //m2
            "qunyou2023_m2_jiangwei": "姜维",
            "qunyou2023_m2_liubei": "刘备",
            "qunyou2023_m2_dailaidongzhu": "带来洞主",
            "qunyou2023_m2_aerwa":"阿尔瓦",
            "qunyou2023_m2_aogusiting":"奥古斯汀",
            "qunyou2023_m2_qifu_zhangliao":"张辽",
            //m3
            "qunyou2023_m3_heiyukuaidou": "黑羽快斗",
            "qunyou2023_m3_feicunjianxin": "绯村剑心",
            "qunyou2023_m3_caocao": "曹操",
            "qunyou2023_m3_liubei": "刘备",
            "qunyou2023_m3_yitakuya": "伊塔库亚",
            "qunyou2023_m3_zhangti": "张悌",
            "qunyou2023_m3_shen_zhugeliang": "神诸葛亮",
            "qunyou2023_m3_jiaxu": "贾诩",
            "qunyou2023_m3_hongxia": "伊地知虹夏",
            "qunyou2023_m3_diaochan": "貂蝉",
            "qunyou2023_m3_caoanyang": "曹安阳",
            "qunyou2023_m3_caoqingming": "曹清明",
            "qunyou2023_m3_sb_guojia":"谋郭嘉",
            //m4
            "qunyou2023_m4_shen_machao": "神马超",


            // 技能部分

            //qunyou2023_yd_huangyueying
            "qunyou2023_yd_jizhi": "集智",
            "qunyou2023_yd_jizhi_info": "当场上有人使用锦囊牌时，你可以摸一张牌。你于回合内以此法获得的牌不计入本回合手牌上限。",
            "qunyou2023_yd_qicai": "奇才",
            "qunyou2023_yd_qicai_info": "锁定技，你使用锦囊牌无距离限制；其他角色不能弃置你装备区里的防具牌和宝物牌。你可以为你使用的普通锦囊牌增加或减少任意个目标。",

            //qunyou2023_yd_qun_huangyueying
            "qunyou2023_yd_yanrong": "掩容",
            "qunyou2023_yd_yanrong_info": "锁定技，其他角色首次对你使用的牌效果改为“弃置一张牌，然后弃置你的一张牌”（若自身无法弃置则无法对你使用牌）。你使用锦囊牌可额外指定一名没有触发〖掩容〗的角色为目标，且你用牌指定没有触发〖掩容〗的角色时摸一张牌。",
            "qunyou2023_yd_zhice": "智策",
            "qunyou2023_yd_zhice_info": "出牌阶段每名角色限一次，你可以弃置没有触发〖掩容〗的角色两张牌，然后视为使用一张未因此使用过的普通锦囊牌或摸一张牌。",

            //qunyou2023_yd_luzhi
            "qunyou2023_yd_mingren": "明任",
            "qunyou2023_yd_mingren_info": "准备阶段，若你没有“任”，则你摸两张牌，然后你将两张手牌置于武将牌上，称为“任”。结束阶段，你可以用任意张手牌替换换等量“任”。你的手牌上限+X（X为“任”的数量）。",
            "qunyou2023_yd_shouye": "授业",
            "qunyou2023_yd_shouye_info": "每回合每种牌名限一次，你可以将两张手牌或“任”交给一名其他角色，视为使用或打出一张基本牌。",
            "qunyou2023_yd_fenghan": "奉汉",
            "qunyou2023_yd_fenghan_info": "当一名角色的判定牌生效时，若此牌花色为♠，你可以将此牌当作“任”宣于武将牌上，然后令其重新判定。",

            //qunyou2023_yd_xiefuren
            "qunyou2023_yd_xinyou": "心幽",
            "qunyou2023_yd_xinyou_info": "锁定技，你的手牌没有上限。当你受到伤害或失去体力时，你改为弃置等量的牌。当你失去最后一张手牌后，你进入濒死状态；当你的手牌数大于0时，你脱离濒死状态。结束阶段，若本回合你没有使用过牌，你弃置两张牌（不触发〖绝响〗）。",
            "qunyou2023_yd_guiwang": "归望",
            "qunyou2023_yd_guiwang_info": "限定技，当你进入濒死状态时，你可以获得每名其他角色装备区内的一张牌，然后你翻面",
            "qunyou2023_yd_juexiang": "绝响",
            "qunyou2023_yd_juexiang_info": "锁定技，游戏开始时，你摸9张牌。当你一次性失去的牌数大于1张时，你摸等量的牌并弃X张牌（X为你此次失去的牌数且至多为3），若你因为〖心幽〗弃牌则弃牌数-1。当你进入濒死状态时，其他角色依次选择是否交给你一张牌。",

            //qunyou2023_yd_weidan
            "qunyou2023_yd_chengwen": "成文",
            "qunyou2023_yd_chengwen_info": "锁定技，当你失去手牌后，若你手牌中没有同名牌，你摸一张牌。",
            "qunyou2023_yd_dengjie": "登阶",
            "qunyou2023_yd_dengjie_info": "出牌阶段，你可以弃X张牌（X为此技能发动次数且至少为1），然后你的下一张牌无使用与次数限制。",
            "qunyou2023_yd_zhuanzhang": "撰章",
            "qunyou2023_yd_zhuanzhang_info": "限定技，出牌阶段开始时，你可以弃置你的所有手牌，然后将5张不同名的可主动使用的牌置入你的手中。",

            //qunyou2023_yd_xietiao
            "qunyou2023_yd_piaomiao": "缥缈",
            "qunyou2023_yd_piaomiao_info": "当你进入濒死状态时，你可以记录一种未记录过的花色的牌无法使用，然后摸两张牌并将体力回复至3点。若你有一种颜色的牌无法使用，你获得【翠枝】并增加一点体力上限；若你所有花色的牌均无法使用，你减少2点体力上限并取消所有用牌限制。(此技能无法被锁定)",
            "qunyou2023_yd_yunque": "云雀",
            "qunyou2023_yd_yunque_info": "结束阶段，你可根据本回合使用的花色数依次发动以下效果：1、弃置场上的一张牌；2、令一名角色回复一点体力；3、摸X张牌（X为你的体力上限），然后失去所有体力。",
            "qunyou2023_yd_cuizhi": "翠枝",
            "qunyou2023_yd_cuizhi_info": "其他角色造成伤害后，你可以弃一张〖缥缈〗记录过的花色的牌并选择一项：若其手牌数不小于你，你获得其一张牌；若其体力值不小于你，你对其造成一点伤害。",

            //qunyou2023_m1_gansidui
            "qunyou2023_m1_gansi": "敢死",
            "qunyou2023_m1_gansi_info": "出牌阶段，你令一名角色死亡，然后你死亡。",

            //qunyou2023_m1_pujing
            "qunyou2023_m1_jiemou": "揭谋",
            "qunyou2023_m1_jiemou_info": "结束阶段，你可以摸一张牌，然后将一张牌置于一名其他角色的武将牌上。若有角色用颜色相同的牌指定其为目标,你可以展示并令其获得此牌，然后取消其为目标。",
            "qunyou2023_m1_yunyou": "云游",
            "qunyou2023_m1_yunyou_info": "锁定技，你记录你回合内失去牌的花色。花色在记录中的牌对你造成伤害时防止之，然后从记录中移除此花色。",
            "qunyou2023_m1_duhua": "度化",
            "qunyou2023_m1_duhua_info": "限定技，当一名角色处于濒死状态时，你可以弃置X张牌，令其弃置区域里的所有牌，复原武将牌，摸X张牌并回复X点体力，然后其获得〖武圣〗。（X最大为5）",
            "qunyou2023_m1_duhua_wusheng": "武圣",
            "qunyou2023_m1_duhua_wusheng_info": "你可以将一张红色牌当【杀】使用或打出，你使用的红色【杀】无距离限制且可以无视防具。",

            //qunyou2023_m1_caozhang
            "qunyou2023_m1_xiongwu": "雄武",
            "qunyou2023_m1_xiongwu_info": "锁定技，你回合内使用【杀】的次数等于你的攻击距离。",
            "qunyou2023_m1_jiangchi": "将驰",
            "qunyou2023_m1_jiangchi_info": "出牌阶段限X次:1.摸一张牌使本回合使用【杀】次数-1;2.弃一张牌使本回合攻击距离+1且下一张【杀】无视防具（X为你的体力上限且一回合使用【杀】次数不应小于0）。",

            //qunyou2023_m1_fengji
            "qunyou2023_m1_jiebi": "诘愎",
            "qunyou2023_m1_jiebi_info": "出牌阶段，你可以依次发动：1、弃一张牌；2、失去一点体力；3、武将牌翻面。每发动一次视为使用一张不计入出牌次数且无出牌限制的【杀】；若此【杀】造成了伤害，你摸X张牌，然后本回合此技能失效（X为选项编号数）。",
            "qunyou2023_m1_zishi": "自恃",
            "qunyou2023_m1_zishi_info": "锁定技，每回合依次发动，当你成为其他角色使用牌的目标时：1、摸一张牌；2、回复一点体力；3、你与当前回合角色武将牌翻面。",

            //qunyou2023_m1_mou_zhanghe
            "qunyou2023_m1_shibian": "识变",
            "qunyou2023_m1_shibian_info": "一名角色的回合开始时，你可以令本回合手牌数始终等于其手牌数。",
            "qunyou2023_m1_liaodi": "料敌",
            "qunyou2023_m1_liaodi_info": "当你因〖识变〗摸牌后，你可以令本轮〖识变〗失效。",

            //qunyou2023_m1_donghe
            "qunyou2023_m1_hezhi": "和治",
            "qunyou2023_m1_hezhi_info": "锁定技，你使用非伤害类锦囊牌指定目标时，其摸一张牌。",
            "qunyou2023_m1_minxi": "民息",
            "qunyou2023_m1_minxi_info": "转换技，出牌阶段，阴：你可以交给X名手牌数不大于你的其他角色一张手牌；阳：你可以获得X名手牌数不少于你的其他角色一张牌。若有角色本阶段已成为过此技能的目标两次，则你令此技能失效直到回合结束，然后你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多X个目标（X为此技能本阶段发动次数+1）。",

            //qunyou2023_m2_jiangwei
            "qunyou2023_m2_tiaoxin": "挑衅",
            "qunyou2023_m2_tiaoxin_info": "出牌阶段限一次，你可以指定一名有牌的其他角色，该角色需对你使用一张【杀】，否则你获得其一张牌。",
            "qunyou2023_m2_huzhen": "护阵",
            "qunyou2023_m2_huzhen_info": "限定技，当一名角色进入濒死状态时，你可以将所有手牌以任意顺序置于牌堆顶或牌堆底，然后进行一次判定，若结果为♥，其回复体力至体力上限。",
            "qunyou2023_m2_jizhi": "继志",
            "qunyou2023_m2_jizhi_info": "觉醒技，准备阶段，若你没有手牌或你已累计发动过三次〖挑衅〗，你增加1点体力上限并回复1点体力，然后获得技能〖阵图〗。",
            "qunyou2023_m2_zhentu": "阵图",
            "qunyou2023_m2_zhentu_info": "当你需要使用一张【闪】时，你可以进行判定。若结果为红色，视为你使用一张【闪】；若结果为黑色，你可以视为使用一张无距离限制的【杀】。",

            //qunyou2023_m2_liubei
            "qunyou2023_m2_renwang": "仁望",
            "qunyou2023_m2_renwang_info": "锁定技，你每不因回合内使用而失去一张牌便获得一个“仁”标记。每回合限一次，你可以移去两枚“仁”来视为使用或打出一张基本牌。",
            "qunyou2023_m2_renze": "仁泽",
            "qunyou2023_m2_renze_info": "出牌阶段，你可以将任意张手牌交给其他角色。",
            "qunyou2023_m2_jiangqi": "将旗",
            "qunyou2023_m2_jiangqi_info": "主公技，出牌阶段限一次，你可以令一名蜀势力角色选择一项:①视为对你指定的另一名角色使用一张【杀】；②跳过下个回合的出牌阶段。",

            //qunyou2023_m2_dailaidongzhu
            "qunyou2023_m2_manyi": "蛮裔",
            "qunyou2023_m2_manyi_info": "锁定技，你的登场势力为“群”，【南蛮入侵】对你无效。当有角色打出【杀】响应【南蛮入侵】时，你摸一张牌并交给其一张牌。",
            "qunyou2023_m2_weixiang": "伪降",
            "qunyou2023_m2_weixiang_info": "群势力技，出牌阶段限一次，你可以与一名角色拼点，若你没赢，你获得其一张牌，并将势力修改为“蜀”；若你赢，你结束出牌阶段。",
            "qunyou2023_m2_panqin": "叛侵",
            "qunyou2023_m2_panqin_info": "蜀势力技，出牌阶段限一次，你可以与一名角色拼点，若你赢，你对其造成1点伤害，并将势力修改为“群”；若你没赢，你失去1点体力。",

            //qunyou2023_m2_aerwa
            "qunyou2023_m2_ganzhi":"感知",
            "qunyou2023_m2_ganzhi_info":"锁定技，游戏开始时，你令所有角色获得〖电荷〗。",
            "qunyou2023_m2_dianhe":"电荷",
            "qunyou2023_m2_dianhe_info":"转换技，锁定技。准备阶段，你变更转换技状态。当你受到伤害时，若伤害来源与你的〖电荷〗状态：不同，此伤害+1；相同：此伤害-1，然后你变更转换技状态。",
            "qunyou2023_m2_endian": "恩典",
            "qunyou2023_m2_endian_info": "出牌阶段开始时，你可以获得所有与你的〖电荷〗状态不同的角色各一张牌，然后变更〖电荷〗状态。",
            "qunyou2023_m2_qiji": "奇迹",
            "qunyou2023_m2_qiji_info": "锁定技，你的回合内，〖电荷〗状态与你不同的角色无法使用或打出牌。",

            //qunyou2023_m2_aogusiting
            "qunyou2023_m2_liezui": "猎罪",
            "qunyou2023_m2_liezui_info": "当一名角色受到伤害时，若伤害来源不为你，你可以弃1张牌和一个【猎罪】标记并防止此伤害，然后视为对伤害来源使用一张属性【杀】。",
            "qunyou2023_m2_yongfa": "永罚",
            "qunyou2023_m2_yongfa_info": "出牌阶段每种牌名限一次，你可以弃置一个【永罚】标记，视为使用一张无距离限制的单目标锦囊牌。",
            "qunyou2023_m2_shazhen": "歃阵",
            "qunyou2023_m2_shazhen_info": "锁定技，游戏开始时或当你进入濒死状态时，你减少1点体力上限并废除一个装备栏，然后将体力回复至上限、摸X张牌（X为你已废除的装备栏数）并选择一项：1、获得一个【猎罪】标记；2、获得一个【永罚】标记。",
            "qunyou2023_m2_xinhuo": "心火",
            "qunyou2023_m2_xinhuo_info": "锁定技，你的手牌上限+X（X为你已废除的装备栏数）。当你失去【永罚】标记时，你获得一个【猎罪】标记；当你失去【猎罪】标记时，你获得一个【永罚】标记。",

            //qunyou2023_m2_qifu_zhangliao
            "qunyou2023_m2_tuxi": "突袭",
            "qunyou2023_m2_tuxi_info": "摸牌阶段，你可以少摸任意张牌并获得等量的其他角色的各一张牌。若你获得的牌中包含装备牌，你翻面。",
            "qunyou2023_m2_zhesheng": "折盛",
            "qunyou2023_m2_zhesheng_info": "一名角色的出牌阶段开始时，若你已翻面，你可以将自己任意张牌扣置于武将牌旁，然后弃置该角色等量的牌。若如此做，当你从背面翻至正面时，你获得扣置的牌。",
        
            //qunyou2023_m3_heiyukuaidou
            "qunyou2023_m3_jiashu": "假术",
            "qunyou2023_m3_jiashu_info": "其他角色的出牌阶段开始时，你可以将所有手牌（至少一张）当做一张普通锦囊牌使用。当你以此法造成伤害时，你防止此伤害并摸一张牌。",
            "qunyou2023_m3_yueying": "月影",
            "qunyou2023_m3_yueying_info": "锁定技，若你没有手牌或你的装备区内没有牌，其他角色计算与你的距离+1。",
            "qunyou2023_m3_wuxing": "无形",
            "qunyou2023_m3_wuxing_info": "限定技，出牌阶段，你可以观看场外随机两张武将牌，然后选择其中一张替换你的武将牌。（你的体力及体力上限保持不变）",

            //qunyou2023_m3_weimingyixin
            "qunyou2023_m3_niren": "逆刃",
            "qunyou2023_m3_niren_info": "当你成为【杀】的目标时，你可以令此【杀】无效并对此【杀】的使用者使用一张不计入次数的【杀】，然后若此【杀】造成了伤害，你可以弃置其武器栏内的一张牌。",
            "qunyou2023_m3_badao": "拔刀",
            "qunyou2023_m3_badao_info": "当你使用【杀】造成伤害后，你可以弃置一张【闪】并获得目标的一张手牌。",
            "qunyou2023_m3_fengxin": "封心",
            "qunyou2023_m3_fengxin_info": "每轮限一次，你可以弃置一张牌，然后视为使用或打出一张【杀】。",

            //qunyou2023_m3_caocao
            "qunyou2023_m3_tenglong": "腾龙",
            "qunyou2023_m3_tenglong_info": "出牌阶段限一次，你可以展示牌堆顶的四张牌并获得其中的红色牌，然后本回合你造成的伤害+1。",
            "qunyou2023_m3_tunzhi": "吞志",
            "qunyou2023_m3_tunzhi_info": "结束阶段，你可以获得被你造成伤害过的角色的X张牌。（X为本回合你对其造成的伤害）。",

            //qunyou2023_m3_liubeoi
            "qunyou2023_m3_qianlong": "潜龙",
            "qunyou2023_m3_qianlong_info": "每回合限一次，你可以展示牌堆底的四张牌并获得的其中黑色牌，然后视为使用一张【酒】。如果此时你处于濒死状态，你额外回复一点体力。",
            "qunyou2023_m3_jingzhu": "惊箸",
            "qunyou2023_m3_jingzhu_info": "当你受到大于1点的伤害后，你可以将所有手牌交给一名其他角色，然后摸X张牌并防止所有你受到的伤害直到你的下个回合开始。（X为你已损失的体力值）。",

            //qunyou2023_m3_yitakuya
            "qunyou2023_m3_fengxing": "风行",
            "qunyou2023_m3_fengxing_info": "出牌阶段开始时，你可以令一名其他角色获得“灯”标记并移除其余“灯”标记，你计算与拥有“灯”标记角色的距离为0，你计算与其他角色距离为你与该角色的距离和拥有“灯”标记角色与该角色的距离的较小值。",
            "qunyou2023_m3_yuanxi": "远袭",
            "qunyou2023_m3_yuanxi_info": "每轮限一次，一名与你距离为2的其他角色摸牌阶段前，你可以交给其一张牌并令其跳过摸牌阶段。然后若场上有“灯”标记，你令拥有“灯”标记的角色获得其一张手牌。",

            //qunyou2023_m3_zhangti
            "qunyou2023_m3_jue": "沮遏",
            "qunyou2023_m3_jue_info": "出牌阶段每项限一次，你可以令一名角色执行一项：1、弃两张牌，然后跳过下个判定阶段；2、摸两张牌，然后跳过下个摸牌阶段；3、摸两张牌并弃一张牌，然后跳过下个出牌阶段；4、摸一张牌并弃两张牌，然后跳过下个弃牌阶段。",
            "qunyou2023_m3_zhongqin": "忠勤",
            "qunyou2023_m3_zhongqin_info": "锁定技，当一名角色跳过一个阶段后，你摸一张牌。",

            //qunyou2023_m3_shen_zhugeliang
            "qunyou2023_m3_buxi": "不熄",
            "qunyou2023_m3_buxi_info": "锁定技，当你进入濒死状态时，你减1点体力上限，然后将体力回复至1点；你的手牌上限为你的体力上限。",
            "qunyou2023_m3_zhentu": "阵图",
            "qunyou2023_m3_zhentu_info": "锁定技，结束阶段，若你的体力值大于1且体力上限小于7，你失去7-X点体力（X为你的体力上限，若不足则失去体力至1点）并选择一项：1、增加等量的体力上限，然后进行一个额外的摸牌阶段；2、摸等量的牌，然后进行一个额外的出牌阶段（此阶段内发动〖烁星〗不用失去体力上限）。",
            "qunyou2023_m3_shuoxin": "烁星",
            "qunyou2023_m3_shuoxin_info": "出牌阶段限一次，你可以减1点体力上限，将一张牌当做不计入次数的普通【杀】或任意属性【杀】使用，然后根据属性执行对应效果：无，你回复一点体力；火，此【杀】造成的伤害+1；雷，此【杀】无距离限制、无视防具且不可被响应；冰，此【杀】结算结束后，目标无法使用或打出牌直到回合结束。",

            //qunyou2023_m3_jiaxu
            "qunyou2023_m3_mouhuo": "谋祸",
            "qunyou2023_m3_mouhuo_info": "转换技，每回合限一次，当一名角色不因〖谋祸〗造成伤害后，阴：你视为对伤害来源使用一张不计入次数的【杀】；阳：你视为对受到伤害的角色使用一张不计入次数的【杀】。然后若此【杀】造成了伤害，你本回合〖谋祸〗的使用次数+1；若此【杀】未造成伤害，你本回合〖明哲〗的使用次数+1。",
            "qunyou2023_m3_mingzhe": "明哲",
            "qunyou2023_m3_mingzhe_info": "锁定技，每回合限一次，当你受到伤害时，此伤害-1，然后你摸一张牌。若造成伤害的牌为基本牌，你失去一点体力。",

            //qunyou2023_m3_hongxia
            "qunyou2023_m3_gu": "鼓",
            "qunyou2023_m3_gu_info": "结束阶段，你可以亮出牌堆顶4张牌，将一种花色的牌分配给任意其他角色或弃置，并将此花色记录为[ ]，然后获得其余牌；你使用[ ]花色的基本牌无次数限制。（[ ]初始为♥）",
            "qunyou2023_m3_yin": "音",
            "qunyou2023_m3_yin_info": "①你可以将一张[ ]花色的牌当做任意基本牌使用或打出，然后将此牌名记录为【】；②其他角色可以交给你一张[ ]花色的牌，视为使用或打出一张【】。（【】初始为【桃】）",
            
            //qunyou2023_m3_diaochan
            "qunyou2023_m3_huahun": "花魂",
            "qunyou2023_m3_huahun_info": "锁定技，当你受到伤害时，你摸两张牌；然后若此伤害不小于你的体力值，你防止此伤害并令此技能本回合失效。",
            "qunyou2023_m3_yingjin": "莹烬",
            "qunyou2023_m3_yingjin_info": "一名角色的准备阶段，你可以令其本回合造成与受到的伤害+1，然后其视为对你使用一张【决斗】。",
            "qunyou2023_m3_yingjin_add": "莹烬",
            "qunyou2023_m3_yingjin_add_info": "",
            "qunyou2023_m3_shaoxi": "韶息",
            "qunyou2023_m3_shaoxi_info": "每轮限一次，一名角色的出牌阶段结束时，你可以对其造成一点伤害，然后令其进行一个额外的出牌阶段。",

            //qunyou2023_m3_caoanyang
            "qunyou2023_m3_lianci": "炼词",
            "qunyou2023_m3_lianci_info":"出牌阶段，你可以将一张手牌置于牌堆底，然后亮出牌堆中一张不同牌名的同类型牌并选择一项：1、使用此牌；2、弃置此牌并摸一张牌。你以此法获得的牌本回合无法用来发动〖炼词〗，且不计入手牌上限。",
            "qunyou2023_m3_shangfu": "殇赋",
            "qunyou2023_m3_shangfu_info": "结束阶段或当你受到伤害后，你可以观看牌堆底X张牌（X为你已损失的体力值），然后将其分配给任意角色。若X不小于2且其中所有牌的类型均不同，你增加一点体力上限并回复一点体力。",

            //qunyou2023_m3_caoqingming
            "qunyou2023_m3_huaying": "化影",
            "qunyou2023_m3_huaying_info": "锁定技，①当你使用牌指定其他角色为目标后/当你成为其他角色使用牌的目标后，若该角色没有【形】，你令其获得【形】，否则你摸一张牌；②一名有【形】角色的准备阶段，其移去【形】，然后你摸一张牌。",
            "qunyou2023_m3_xianlei": "衔泪",
            "qunyou2023_m3_xianlei_info": "出牌阶段每名角色限一次/当你受到伤害后，你可以移去一名其他角色的【形】并选择一项：1、发动其武将牌上对应时机的技能；2、视为对其使用一张不计入次数的基本牌或普通锦囊牌（不触发〖化影〗）。",

            //qunyou2023_m3_sb_guojia
            "qunyou2023_m3_tiandu":"天妒",
            "qunyou2023_m3_tiandu_info":"锁定技，回合开始时，你立即死亡。",
            "qunyou2023_m3_yiji":"遗计",
            "qunyou2023_m3_yiji_info":"当你死亡时，你可以令一名其他角色获得〖天妒〗和〖遗计〗。",

            //qunyou2023_m4_shen_machao

        },
        //转换技显示
        dynamicTranslate: {
            //qunyou2023_m1_donghe
            "qunyou2023_m1_minxi": function (player) {
                var str = '转换技，出牌阶段，';
                if (player.storage.qunyou2023_m1_minxi) str += '阴：你可以交给X名手牌数不大于你的其他角色一张手牌；<span class="bluetext">阳：你可以获得X名手牌数不少于你的其他角色一张牌。</span>';
                else str += '<span class="bluetext">阴：你可以交给X名手牌数不大于你的其他角色一张手牌；</span>阳：你可以获得X名手牌数不少于你的其他角色一张牌。';
                str += '若有角色本阶段已成为过此技能的目标两次，则你令此技能失效直到回合结束，然后你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多X个目标（X为此技能本阶段发动次数+1）。';
                return str;
            },

            //qunyou2023_m3_jiaxu
            "qunyou2023_m3_mouhuo": function (player) {
                var str = '转换技，每回合限一次，当一名角色不因〖谋祸〗造成伤害后，';
                if (player.storage.qunyou2023_m3_mouhuo) str += '阴：你视为对伤害来源使用一张不计入次数的【杀】；<span class="bluetext">阳：你视为对受到伤害的角色使用一张不计入次数的【杀】。</span>';
                else str += '<span class="bluetext">阴：你视为对伤害来源使用一张不计入次数的【杀】；</span>阳：你视为对受到伤害的角色使用一张不计入次数的【杀】。';
                str += '然后若此【杀】造成了伤害，你本回合〖谋祸〗的使用次数+1；若此【杀】未造成伤害，你本回合〖明哲〗的使用次数+1。';
                return str;
            },

            //qunyou2023_m3_hongxia
            "qunyou2023_m3_gu":function (player) {
                return '结束阶段，你可以亮出牌堆顶4张牌，将一种花色的牌分配给任意其他角色或弃置，并将此花色记录为[ ]，然后获得其余牌；你使用['+get.translation(player.storage.qunyou2023_m3_gu)+']花色的基本牌无次数限制。（[ ]初始为♥）';
            },
            "qunyou2023_m3_yin":function (player) {
                return '①你可以将一张['+get.translation(player.storage.qunyou2023_m3_gu)+']花色的牌当做任意基本牌使用或打出，然后将此牌名记录为【】；②其他角色可以交给你一张['+get.translation(player.storage.qunyou2023_m3_gu)+']牌，视为使用或打出一张【'+get.translation(player.storage.qunyou2023_m3_yin)+'】。';
            },

        },
    };
    if (lib.device || lib.node) {
        for (var i in qunyou2023.character) qunyou2023.character[i][4].push('ext:群友DIY/image/character/' + i + '.jpg');
    } else {
        for (var i in qunyou2023.character) qunyou2023.character[i][4].push('db:extension-群友DIY/image/character:' + i + '.jpg');
    }
    return qunyou2023;
})