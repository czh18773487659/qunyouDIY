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
            lib.rank.rarity.legend.addArray(["qunyou_huangyueying", "qunyou_qunhuangyueying", "qunyou_xiefei", "qunyou_gansidui", "qunyou_mouzhanghe"]);

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
                            "qunyou_qunhuangyueying": ["female", "qun", 3, ["qunyou_yanrong", "qunyou_zhice"],
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
                            "qunyou_xiefei": ["female", "wu", 3, ["qunyou_piaomiao", "qunyou_yunque"],
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
                            "qunyou_mouzhanghe": ["male", "wei", 4, ["qunyou_shibian", "qunyou_liaodi"],
                                []
                            ],
                        },
                        skill: {
                            "qunyou_jizhi": {
                                trigger: {
                                    global: "useCard",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    var type = get.type(event.card, 'trick');
                                    return type == 'trick' && event.card.isCard;
                                },
                                init: function (player) {
                                    if (!player.storage.qunyou_jizhi) player.storage.qunyou_jizhi = [];
                                },
                                content: function () {
                                    'step 0'
                                    player.draw();
                                    'step 1'
                                    player.storage.qunyou_jizhi = player.storage.qunyou_jizhi.concat(result[0]);
                                    game.log(player.storage.qunyou_jizhi);
                                },
                                ai: {
                                    threaten: 1.4,
                                    noautowuxie: true,
                                },
                                mod: {
                                    ignoredHandcard: function (card, player) {
                                        if (player.storage.qunyou_jizhi.contains(card)) {
                                            return true;
                                        }
                                    },
                                    cardDiscardable: function (card, player, name) {
                                        if (name == 'phaseDiscard' && player.storage.qunyou_jizhi.contains(card)) {
                                            return false;
                                        }
                                    },
                                },
                                group: "qunyou_jizhi_reset",
                                subSkill: {
                                    reset: {
                                        trigger: {
                                            global: ["phaseAfter"],
                                        },
                                        silent: true,
                                        priority: 10,
                                        content: function () {
                                            player.storage.qunyou_jizhi = [];
                                        },
                                        sub: true,
                                        forced: true,
                                        popup: false,
                                    },
                                },
                            },
                            "qunyou_qicai": {
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
                                    if (event.targets && event.targets.length > 0) return true;
                                    var info = get.info(event.card);
                                    if (info.allowMultiple == false) return false;
                                    if (event.targets && !info.multitarget) {
                                        if (game.hasPlayer(function (current) {
                                                return !event.targets.contains(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                                            })) {
                                            return true;
                                        }
                                    }
                                    return false;
                                },
                                content: function () {
                                    'step 0'
                                    var prompt2 = '为' + get.translation(trigger.card) + '增加或减少一个目标'
                                    player.chooseTarget(get.prompt('qunyou_qicai'), function (card, player, target) {
                                        var player = _status.event.player;
                                        if (_status.event.targets.contains(target)) return true;
                                        return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                                    }).set('prompt2', prompt2).set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player) * (_status.event.targets.contains(target) ? -1 : 1);
                                    }).set('targets', trigger.targets).set('card', trigger.card);
                                    'step 1'
                                    if (result.bool) {
                                        if (!event.isMine() && !event.isOnline()) game.delayx();
                                        event.targets = result.targets;
                                    } else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (event.targets) {
                                        player.logSkill('qunyou_qicai', event.targets);
                                        if (trigger.targets.contains(event.targets[0])) trigger.targets.removeArray(event.targets);
                                        else trigger.targets.addArray(event.targets);
                                    }
                                    'step 3'
                                    event.goto(0);
                                },
                            },
                            "qunyou_yanrong": {
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                forced: true,
                                preHidden: true,
                                init: function (player) {
                                    if (!player.storage.qunyou_yanrong) player.storage.qunyou_yanrong = [];
                                },
                                filter: function (event, player) {
                                    return !player.storage.qunyou_yanrong.contains(event.player) && event.player != player;
                                },
                                content: function () {
                                    "step 0"
                                    trigger.getParent().excluded.add(player);
                                    trigger.player.chooseToDiscard(1, 'he', true);
                                    trigger.player.discardPlayerCard(player, true, 'he');
                                    "step 1"
                                    player.storage.qunyou_yanrong.add(trigger.player);
                                    trigger.player.addMark("qunyou_yanrong")
                                    game.log(player.storage.qunyou_yanrong);
                                },
                                marktext: "掩",
                                intro: {
                                    content: "已触发掩容",
                                    name: "掩容",
                                },
                                group: ["qunyou_yanrong_draw", "qunyou_yanrong_add"],
                                subSkill: {
                                    draw: {
                                        trigger: {
                                            player: "useCardToPlayer",
                                        },
                                        filter: function (event, player) {
                                            return !player.storage.qunyou_yanrong.contains(event.target);
                                        },
                                        content: function () {
                                            player.draw();
                                        },
                                        sub: true,
                                        forced: true,
                                        popup: false,
                                    },
                                    add: {
                                        trigger: {
                                            player: "useCard2",
                                        },
                                        direct: true,
                                        filter: function (event, player) {
                                            if (get.type(event.card) != 'trick') return false;
                                            if (event.targets && event.targets.length > 0) return true;
                                            var info = get.info(event.card);
                                            if (info.allowMultiple == false) return false;
                                            if (event.targets && !info.multitarget) {
                                                if (game.hasPlayer(function (current) {
                                                        return !event.targets.contains(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current) &&
                                                            !player.storage.qunyou_yanrong.contains(event.target)
                                                    })) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        },
                                        content: function () {
                                            'step 0'
                                            var prompt2 = '为' + get.translation(trigger.card) + '增加一个目标'
                                            player.chooseTarget(get.prompt('qunyou_qicai'), function (card, player, target) {
                                                var player = _status.event.player;
                                                if (_status.event.targets.contains(target)) return false;
                                                if (player.storage.qunyou_yanrong.contains(target)) return false;
                                                return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                                            }).set('prompt2', prompt2).set('ai', function (target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                return get.effect(target, trigger.card, player, player) * (_status.event.targets.contains(target) ? -1 : 1);
                                            }).set('targets', trigger.targets).set('card', trigger.card);
                                            'step 1'
                                            if (result.bool) {
                                                if (!event.isMine() && !event.isOnline()) game.delayx();
                                                event.targets = result.targets;
                                            } else {
                                                event.finish();
                                            }
                                            'step 2'
                                            if (event.targets) {
                                                player.logSkill('qunyou_qicai', event.targets);
                                                trigger.targets.addArray(event.targets);
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_zhice": {
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    return game.countPlayer(function (current) {
                                        return !player.storage.qunyou_yanrong.contains(current) &&
                                            !current.hasSkill('qunyou_zhice_reset') && current.countCards('he') > 1;
                                    }) > 0;
                                },
                                init: function (player) {
                                    if (!player.storage.qunyou_zhice_jinnang) player.storage.qunyou_zhice_jinnang = [];
                                },
                                chooseButton: {
                                    dialog: function (event, player) {
                                        var list = [];
                                        for (var i of lib.inpile) {
                                            if (get.type(i) == 'trick' && event.filterCard({
                                                    name: i,
                                                    isCard: true
                                                }) && !player.storage.qunyou_zhice_jinnang.contains(i)) {
                                                list.push(['锦囊', '', i]);
                                            }
                                        }
                                        // list.push("摸一张牌");
                                        return ui.create.dialog('智策', [list, 'vcard']);
                                    },
                                    check: function (button) {
                                        return _status.event.player.getUseValue({
                                            name: button.link[2],
                                            isCard: true
                                        });
                                    },
                                    backup: function (links, player) {
                                        return {
                                            viewAs: {
                                                name: links[0][2],
                                                isCard: true,
                                            },
                                            filterCard: () => false,
                                            selectCard: -1,
                                            popname: true,
                                            precontent: function () {
                                                "step 0"
                                                player.chooseTarget("弃置一名角色两张牌", function (card, player, target) {
                                                    if (player.storage.qunyou_yanrong.contains(target)) return false;
                                                    if (target.hasSkill('qunyou_zhice_reset')) return false;
                                                    if (target.countCards('he') < 2) return false;
                                                    return true;
                                                }, true);
                                                "step 1"
                                                event.target = result.targets[0]
                                                player.discardPlayerCard(event.target, 2, true);
                                                if (event.target != player) {
                                                    event.target.addTempSkill('qunyou_zhice_reset', {
                                                        player: 'phaseZhunbeiBegin'
                                                    });
                                                }
                                            },
                                            onuse: function (result, player) {
                                                player.storage.qunyou_zhice_jinnang.push(result.card.name);
                                            },
                                        }
                                    },
                                    prompt: function (links, player) {
                                        return '请选择' + get.translation(links[0][2]) + '的目标';
                                    },
                                },
                                group: ["qunyou_zhice_draw"],
                                subSkill: {
                                    draw: {
                                        enable: "phaseUse",
                                        filter: function (event, player) {
                                            return game.countPlayer(function (current) {
                                                return !player.storage.qunyou_yanrong.contains(current) &&
                                                    !current.hasSkill('qunyou_zhice_reset') && current.countCards('he') > 1;
                                            }) > 0;
                                        },
                                        content: function () {
                                            "step 0"
                                            player.chooseTarget("弃置一名角色两张牌", function (card, player, target) {
                                                if (player.storage.qunyou_yanrong.contains(target)) return false;
                                                if (target.hasSkill('qunyou_zhice_reset')) return false;
                                                if (target.countCards('he') < 2) return false;
                                                return true;
                                            });
                                            "step 1"
                                            event.target = result.targets[0]
                                            player.discardPlayerCard(event.target, 2, true);
                                            if (event.target != player) {
                                                event.target.addTempSkill('qunyou_zhice_reset', {
                                                    player: 'phaseZhunbeiBegin'
                                                });
                                            }
                                            player.draw();
                                        },
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
                            "qunyou_mingren": {
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
                                    return !player.getExpansions('qunyou_mingren').length;
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
                                        player.addToExpansion(result.cards, player, 'give', 'log').gaintag.add('qunyou_mingren');
                                    };
                                },
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return num + player.getExpansions('qunyou_mingren').length;
                                    },
                                },
                                group: "qunyou_mingren_jieshu",
                                subSkill: {
                                    jieshu: {
                                        trigger: {
                                            player: "phaseJieshuBegin",
                                        },
                                        filter: function (event, player) {
                                            return player.countCards('h') > 0 && player.getExpansions('qunyou_mingren').length > 0;
                                        },
                                        direct: true,
                                        content: function () {
                                            "step 0"
                                            var cards = player.getExpansions('qunyou_mingren');
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
                                                pushs.removeArray(player.getExpansions('qunyou_mingren'));
                                                gains.removeArray(player.getCards('h'));
                                                if (!pushs.length || pushs.length != gains.length) return;
                                                player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('qunyou_mingren');
                                                game.log(player, '将', pushs, '作为“星”置于武将牌上');
                                                player.gain(gains, 'gain2');
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_shouye": {
                                enable: ["chooseToUse", "chooseToRespond"],
                                hiddenCard: function (player, name) {
                                    if (get.type(name) == 'basic' && lib.inpile.contains(name) && !player.storage.qunyou_shouye.contains(i)) return true;
                                },
                                init: function (player) {
                                    if (!player.storage.qunyou_shouye) player.storage.qunyou_shouye = [];
                                },
                                filter: function (event, player) {
                                    if (event.responded || (player.countCards('h') + player.getExpansions('qunyou_mingren').length < 2)) return false;
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'basic' && event.filterCard({
                                                name: i
                                            }, player, event) && !player.storage.qunyou_shouye.contains(i)) return true;
                                    }
                                    return false;
                                },
                                chooseButton: {
                                    dialog: function (event, player) {
                                        var list = [];
                                        for (var i of lib.inpile) {
                                            if (get.type(i) == 'basic' && event.filterCard({
                                                    name: i
                                                }, player, event) && !player.storage.qunyou_shouye.contains(i)) {
                                                list.push(['基本', '', i]);
                                                if (i == 'sha') {
                                                    for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                                }
                                            }
                                        }
                                        return ui.create.dialog('授业', [list, 'vcard'], 'hidden')
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
                                                suit: 'none',
                                                number: null,
                                                isCard: true,
                                            },
                                            precontent: function () {
                                                "step 0"
                                                player.chooseTarget("选择移交牌的对象", 1, true, function (card, player, target) {
                                                    return target != player
                                                }).set('ai', function (target) {
                                                    return get.attitude(player, target) + 0.5;
                                                });
                                                "step 1"
                                                event.target = result.targets[0];
                                                var list = player.getExpansions('qunyou_mingren');
                                                list.push(get.copy(player.getCards('h')));
                                                game.log(list);
                                                player.chooseCardButton("请移交2张牌", 2, player.getExpansions('qunyou_mingren').concat(get.copy(player.getCards('h'))), true);
                                                "step 2"
                                                if (result.bool) {
                                                    event.target.gain(result.links, player, 'giveAuto');
                                                }
                                            },
                                            onuse: function (result, player) {
                                                player.storage.qunyou_shouye.push(result.card.name);
                                            },
                                        }
                                    },
                                },
                                group: ["qunyou_shouye_reset"],
                                subSkill: {
                                    reset: {
                                        trigger: {
                                            global: "phaseEnd",
                                        },
                                        forced: true,
                                        preHidden: true,
                                        sub: true,
                                        charlotte: true,
                                        content: function () {
                                            player.storage.qunyou_shouye = []
                                        },
                                    },
                                },
                            },
                            "qunyou_fenghan": {
                                trigger: {
                                    global: "judge",
                                },
                                filter: function (event, player) {
                                    return get.suit(event.player.judging[0]) == 'spade';
                                },
                                content: function () {
                                    "step 0"
                                    var card = get.cards()[0];
                                    if (trigger.player.judging[0].clone) {
                                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                        game.broadcast(function (card) {
                                            if (card.clone) {
                                                card.clone.classList.remove('thrownhighlight');
                                            }
                                        }, trigger.player.judging[0]);
                                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                    }
                                    player.addToExpansion(trigger.player.judging[0], player, 'give', 'log').gaintag.add('qunyou_mingren');
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
                            "qunyou_xinyou": {
                                trigger: {
                                    global: "gameStart",
                                },
                                forced: true,
                                content: function () {
                                    "step 0"
                                    player.draw(9);
                                },
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return Infinity;
                                    },
                                },
                                group: ["qunyou_xinyou_discard", "qunyou_xinyou_defend"],
                                subSkill: {
                                    discard: {
                                        trigger: {
                                            player: "phaseJieshuBegin",
                                        },
                                        frequent: true,
                                        filter: function (event, player) {
                                            //if(player.getHistory('skipped').contains('phaseUse')) return false;
                                            return player.getHistory('useCard').length == 0;
                                        },
                                        content: function () {
                                            player.chooseToDiscard('he', 2, true)
                                        },
                                        sub: true,
                                    },
                                    defend: {
                                        trigger: {
                                            player: ["damageBegin3", "loseHpBegin"],
                                        },
                                        direct: true,
                                        forced: true,
                                        filter: function (event, player) {
                                            return player.countCards('he') >= event.num;
                                        },
                                        content: function () {
                                            "step 0"
                                            trigger.cancel();
                                            player.chooseToDiscard('he', trigger.num, true);
                                            "step 1"
                                            if (trigger.num > 1) {
                                                player.draw();
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_guiwang": {
                                unique: true,
                                init: function (player) {
                                    player.storage.qunyou_guiwang = false;
                                },
                                filter: function (event, player) {
                                    return player.storage.qunyou_guiwang == false;
                                },
                                skillAnimation: true,
                                animationColor: "gray",
                                trigger: {
                                    player: "dying",
                                },
                                limited: true,
                                marktext: "归",
                                mark: true,
                                intro: {
                                    content: "limited",
                                },
                                audio: "ext:群友DIY2023:2",
                                content: function () {
                                    "step 0"
                                    player.awakenSkill('qunyou_guiwang');
                                    var targets = game.filterPlayer();
                                    targets.remove(player);
                                    targets.sort(lib.sort.seat);
                                    event.targets = targets;
                                    event.num = 0;
                                    "step 1"
                                    if (num < event.targets.length) {
                                        if (event.targets[num].countGainableCards(player, 'e')) {
                                            player.gainPlayerCard(event.targets[num], true, 'e');
                                        }
                                        event.num++;
                                        event.redo();
                                    }
                                    "step 2"
                                    player.turnOver();
                                },
                            },
                            "qunyou_juexiang": {
                                trigger: {
                                    player: ["loseAfter"],
                                    global: ["loseAsyncAfter", "addToExpansionAfter"],
                                },
                                direct: true,
                                filter: function (event, player) {
                                    var evt = event.getl(player);
                                    return evt && evt.cards2 && evt.cards2.length > 3;
                                },
                                content: function () {
                                    'step 0'
                                    player.draw(trigger.num - 3);
                                },
                                group: ["qunyou_juexiang_die", "qunyou_juexiang_fuhuo"],
                                subSkill: {
                                    die: {
                                        trigger: {
                                            player: "loseAfter",
                                            global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                                        },
                                        direct: true,
                                        filter: function (event, player) {
                                            if (player.countCards('h')) return false;
                                            var evt = event.getl(player);
                                            return evt && evt.player == player && evt.hs && evt.hs.length > 0;
                                        },
                                        content: function () {
                                            player.loseHp();
                                        },
                                        sub: true,
                                    },
                                    fuhuo: {
                                        trigger: {
                                            player: "dying",
                                        },
                                        content: function () {
                                            "step 0"
                                            var targets = game.filterPlayer();
                                            targets.remove(player);
                                            targets.sort(lib.sort.seat);
                                            event.targets = targets;
                                            event.num = 0;
                                            "step 1"
                                            if (num < event.targets.length) {
                                                if (event.targets[num].countCards('he')) {
                                                    event.targets[num].chooseCard('he', '是否交给' + get.translation(player) + '一张牌？').set('ai', function (card) {
                                                        if (_status.event.goon) return 7 - get.value(card);
                                                        return 0;
                                                    }).set('goon', get.attitude(target, player) > 0);
                                                }
                                            }
                                            'step 2'
                                            if (result.bool) {
                                                player.gain(result.cards, event.targets[num], 'giveAuto');
                                                var num = 1 - player.hp;
                                                if (num) player.recover(num);
                                            } else {
                                                game.log(event.targets[num], '拒绝给牌');
                                            }
                                            event.num++;
                                            event.goto(1);
                                        },
                                        sub: true,
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
                            "qunyou_piaomiao": {
                                trigger: {
                                    player: "dying",
                                },
                                forced: true,
                                locked: true,
                                init: function (player) {
                                    if (!player.storage.qunyou_piaomiao) player.storage.qunyou_piaomiao = [];
                                },
                                content: function () {
                                    "step 0"
                                    var list = ["spade", "heart", "club", "diamond"];
                                    for (var suit of player.storage.qunyou_piaomiao) {
                                        list.remove(suit);
                                    }
                                    player.chooseControl(list)
                                        .set('prompt', "请选择一种花色无法使用");
                                    "step 1"
                                    event.suit = result.control;
                                    player.storage.qunyou_piaomiao.push(event.suit);
                                    player.draw(2);
                                    var num = 3 - player.hp;
                                    if (num) player.recover(num);
                                    "step 2"
                                    var flag_black = player.storage.qunyou_piaomiao.contains("spade") && player.storage.qunyou_piaomiao.contains("club") && (event.suit == "spade" || event.suit == "club");
                                    var flag_red = player.storage.qunyou_piaomiao.contains("heart") && player.storage.qunyou_piaomiao.contains("diamond") && (event.suit == "heart" || event.suit == "diamond");
                                    if (flag_black) {
                                        player.gainMaxHp(1);
                                        player.addSkill("qunyou_cuizhi");
                                    }
                                    if (flag_red) {
                                        player.gainMaxHp(1);
                                        player.addSkill("qunyou_cuizhi");
                                    }
                                    "step 3"
                                    if (player.storage.qunyou_piaomiao.length == 4) {
                                        player.loseMaxHp(2);
                                        player.addSkill("qunyou_piaomiao_wuxian");
                                        player.removeSkill("qunyou_piaomiao")
                                    }
                                },
                                group: ["qunyou_piaomiao_nouse"],
                                subSkill: {
                                    nouse: {
                                        sub: true,
                                        mod: {
                                            cardEnabled: function (card, player) {
                                                if (player.storage.qunyou_piaomiao.contains(get.suit(card))) return false;
                                            },
                                        },
                                    },
                                    wuxian: {
                                        mod: {
                                            targetInRange: function (card, player, target) {
                                                return true;
                                            },
                                            cardUsableTarget: function (card, player, target) {
                                                return true;
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_yunque": {
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    var list = [],
                                        history = player.getHistory('useCard');
                                    for (var i of history) {
                                        list.add(get.suit(i.card));
                                    }
                                    return list.length > 0;
                                },
                                content: function () {
                                    "step 0"
                                    var list = [],
                                        history = player.getHistory('useCard');
                                    for (var i of history) {
                                        list.add(get.suit(i.card));
                                    }
                                    event.list = list;
                                    "step 1"
                                    if (event.list.length > 0) {
                                        player.chooseTarget('弃置场上一张牌', 1, function (card, player, target) {
                                            return target.countCards('ej');
                                        })
                                    } else {
                                        event.finish();
                                    }
                                    "step 2"
                                    if (result.bool) {
                                        player.discardPlayerCard(result.targets[0], 'ej', true)
                                    } else {
                                        event.finish();
                                    }
                                    "step 3"
                                    if (event.list.length > 1) {
                                        player.chooseTarget('令一名角色回复一点体力', 1)
                                    } else {
                                        event.finish();
                                    }
                                    "step 4"
                                    if (result.bool) {
                                        result.targets[0].recover();
                                    } else {
                                        event.finish();
                                    }
                                    "step 5"
                                    if (event.list.length > 2) {
                                        player.chooseBool("摸等同于自身体力上限的牌,自身进入濒死。")
                                    } else {
                                        event.finish();
                                    }
                                    "step 6"
                                    if (result.bool) {
                                        player.draw(player.maxHp);
                                        player.loseHp(player.hp);
                                    } else {
                                        event.finish();
                                    }
                                },
                            },
                            "qunyou_cuizhi": {
                                trigger: {
                                    global: "damageSource",
                                },
                                filter: function (event, player) {
                                    if (player == event.source) return false;
                                    return player.countCards('h') <= event.source.countCards('h') || player.hp <= event.source.hp;
                                },
                                content: function () {
                                    "step 0"
                                    if (player.countCards('h') <= trigger.source.countCards('h')) {
                                        player.chooseBool("是否获得" + get.translation(trigger.source) + "的一张牌")
                                    }
                                    "step 1"
                                    if (result.bool) {
                                        player.gainPlayerCard(trigger.source, 'he', true, 1);
                                    }
                                    "step 2"
                                    if (player.hp <= trigger.source.hp) {
                                        player.chooseBool("是否获得" + get.translation(trigger.source) + "的1点体力")
                                    } else {
                                        event.finish();
                                    }
                                    "step 3"
                                    if (result.bool) {
                                        trigger.source.loseHp();
                                        player.recover();
                                    }
                                },
                            },
                            "qunyou_gansi": {
                                usable: 1,
                                enable: "phaseUse",
                                check: function () {
                                    return false;
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt('qunyou_gansi')).set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) * (target.isDamaged() ? 2 : 1);
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        event.target = result.targets[0];
                                        event.target.die();
                                        player.die();
                                    }
                                },
                            },
                            "qunyou_jiemou": {
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
                                            }
                                            if (target.countCards('h') > _status.event.player.countCards('h')) return 0;
                                            return att - 4;
                                        },
                                        prompt: get.prompt2('qunyou_jiemou'),
                                    });
                                    "step 2"
                                    if (result.bool) {
                                        var target = result.targets[0];
                                        var cards = result.cards;
                                        target.addToExpansion(cards, player, 'give').gaintag.add('qunyou_jiemou');
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
                                group: "qunyou_jiemou_kongzhi",
                                subSkill: {
                                    kongzhi: {
                                        trigger: {
                                            global: "useCardToPlayered",
                                        },
                                        filter: function (event, player, name) {
                                            var cards = event.target.getExpansions('qunyou_jiemou');
                                            for (var i of cards) {
                                                if (get.color(event.card) == get.color(i)) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        },
                                        content: function () {
                                            "step 0"
                                            event.list = []
                                            var cards = trigger.target.getExpansions('qunyou_jiemou');
                                            for (var i of cards) {
                                                if (get.color(trigger.card) == get.color(i)) {
                                                    event.list.push(i);
                                                }
                                            }
                                            trigger.player.gain(event.list, 'gain2', 'log');
                                            "step 1"
                                            trigger.getParent().excluded.add(trigger.target);
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_yunyou": {
                                trigger: {
                                    player: "loseEnd",
                                },
                                forced: true,
                                locked: true,
                                init: function (player) {
                                    if (!player.storage.qunyou_yunyou) player.storage.qunyou_yunyou = [];
                                },
                                filter: function (event, player) {
                                    return player == _status.currentPhase;
                                },
                                content: function () {
                                    for (var card of trigger.cards) {
                                        var suit = get.suit(card);
                                        if (!player.storage.qunyou_yunyou.contains(suit)) {
                                            player.storage.qunyou_yunyou.add(suit);
                                            game.log(player.storage.qunyou_yunyou);
                                        }
                                    }
                                },
                                mark: true,
                                intro: {
                                    marktext: "云",
                                    content: function (storage, player, skill) {
                                        var str = '失去的卡牌的花色：';
                                        var suits = player.storage.qunyou_yunyou ? player.storage.qunyou_yunyou : [];
                                        for (var suit of suits) {
                                            str += get.translation(suit);
                                        }
                                        return str;
                                    },
                                },
                                group: ["qunyou_yunyou_undamage"],
                                subSkill: {
                                    undamage: {
                                        trigger: {
                                            player: "damageBegin",
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            if (!event.card || !get.suit(event.card) || get.suit(event.card) == 'none') return false;
                                            var suits = player.storage.qunyou_yunyou;
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
                                            "step 1"
                                            player.storage.qunyou_yunyou.remove(get.suit(trigger.card));
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou_duhua": {
                                limited: true,
                                unique: true,
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
                                    if (trigger.player.isLinked()) {
                                        trigger.player.link();
                                    }
                                    if (trigger.player.isTurnedOver()) {
                                        trigger.player.turnOver();
                                    }
                                    "step 2"
                                    trigger.player.draw(event.drawnum);
                                    trigger.player.recover(event.drawnum);
                                    trigger.player.addSkill("qunyou_duhuayanshengwusheng");
                                },
                                mark: true,
                                intro: {
                                    content: "limited",
                                },
                                skillAnimation: true,
                                init: function (player, skill) {
                                    player.storage[skill] = false;
                                },
                            },
                            "qunyou_duhuayanshengwusheng": {
                                mod: {
                                    targetInRange: function (card) {
                                        if (get.color(card) == 'red' && card.name == 'sha') return true;
                                    },
                                },
                                locked: false,
                                audio: "wusheng",
                                audioname: ["re_guanyu", "guanzhang", "jsp_guanyu", "guansuo"],
                                enable: ["chooseToRespond", "chooseToUse"],
                                filterCard: function (card, player) {
                                    if (get.zhu(player, 'shouyue')) return true;
                                    return get.color(card) == 'red';
                                },
                                position: "hes",
                                viewAs: {
                                    name: "sha",
                                },
                                viewAsFilter: function (player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (!player.countCards('hes', {
                                                color: 'red'
                                            })) return false;
                                    }
                                },
                                prompt: "将一张红色牌当杀使用或打出",
                                check: function (card) {
                                    var val = get.value(card);
                                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                    return 5 - val;
                                },
                                group: ["qunyou_duhuayanshengwusheng_qinggang"],
                                subSkill: {
                                    qinggang: {
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
                                        sub: true,
                                    },
                                },
                                ai: {
                                    respondSha: true,
                                    skillTagFilter: function (player) {
                                        if (get.zhu(player, 'shouyue')) {
                                            if (!player.countCards('hes')) return false;
                                        } else {
                                            if (!player.countCards('hes', {
                                                    color: 'red'
                                                })) return false;
                                        }
                                    },
                                    yingbian: function (card, player, targets, viewer) {
                                        if (get.attitude(viewer, player) <= 0) return 0;
                                        var base = 0,
                                            hit = false;
                                        if (get.cardtag(card, 'yingbian_hit')) {
                                            hit = true;
                                            if (targets.filter(function (target) {
                                                    return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                })) base += 5;
                                        }
                                        if (get.cardtag(card, 'yingbian_all')) {
                                            if (game.hasPlayer(function (current) {
                                                    return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                })) base += 5;
                                        }
                                        if (get.cardtag(card, 'yingbian_damage')) {
                                            if (targets.filter(function (target) {
                                                    return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
                                                        target: target,
                                                        card: card,
                                                    }, true)) && !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                })) base += 5;
                                        }
                                        return base;
                                    },
                                    canLink: function (player, target, card) {
                                        if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                        if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                                target: target,
                                                card: card,
                                            }, true)) return false;
                                        if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                        return true;
                                    },
                                    basic: {
                                        useful: [5, 3, 1],
                                        value: [5, 3, 1],
                                    },
                                    order: function (item, player) {
                                        if (player.hasSkillTag('presha', true, null, true)) return 10;
                                        if (lib.linked.contains(get.nature(item))) {
                                            if (game.hasPlayer(function (current) {
                                                    return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                }) && game.countPlayer(function (current) {
                                                    return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                }) > 1) return 3.1;
                                            return 3;
                                        }
                                        return 3.05;
                                    },
                                    result: {
                                        target: function (player, target, card, isLink) {
                                            var eff = function () {
                                                if (!isLink && player.hasSkill('jiu')) {
                                                    if (!target.hasSkillTag('filterDamage', null, {
                                                            player: player,
                                                            card: card,
                                                            jiu: true,
                                                        })) {
                                                        if (get.attitude(player, target) > 0) {
                                                            return -7;
                                                        } else {
                                                            return -4;
                                                        }
                                                    }
                                                    return -0.5;
                                                }
                                                return -1.5;
                                            }();
                                            if (!isLink && target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                                    target: target,
                                                    card: card,
                                                }, true)) return eff / 1.2;
                                            return eff;
                                        },
                                    },
                                    tag: {
                                        respond: 1,
                                        respondShan: 1,
                                        damage: function (card) {
                                            if (card.nature == 'poison') return;
                                            return 1;
                                        },
                                        natureDamage: function (card) {
                                            if (card.nature) return 1;
                                        },
                                        fireDamage: function (card, nature) {
                                            if (card.nature == 'fire') return 1;
                                        },
                                        thunderDamage: function (card, nature) {
                                            if (card.nature == 'thunder') return 1;
                                        },
                                        poisonDamage: function (card, nature) {
                                            if (card.nature == 'poison') return 1;
                                        },
                                    },
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
                            "qunyou_shibian": {
                                trigger: {
                                    global: 'phaseBegin'
                                },
                                init: function (player) {
                                    if (!player.storage.qunyou_shibian) player.storage.qunyou_shibian = player;
                                },
                                filter: function (event, player) {
                                    return event.player != player && !player.hasSkill("qunyou_shibian_2");
                                },
                                content: function () {
                                    "step 0"
                                    player.storage.qunyou_shibian = trigger.player;
                                    "step 1"
                                    player.addTempSkill("qunyou_shibian_draw");
                                    var num = player.storage.qunyou_shibian.countCards('h') - player.countCards('h');
                                    if (num >= 0) player.draw(num);
                                    else player.chooseToDiscard('h', true, -num);
                                    
                                },
                                subSkill: {
                                    draw: {
                                        trigger: {
                                            global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            var num = player.storage.qunyou_shibian.countCards('h');
                                            return player.countCards('h') != num;
                                        },
                                        content: function () {
                                            var num = player.storage.qunyou_shibian.countCards('h') - player.countCards('h');
                                            if (num > 0) player.draw(num);
                                            else player.chooseToDiscard('h', true, -num);
                                        },
                                    },
                                    2: {}
                                }
                            },
                            "qunyou_liaodi": {
                                trigger:{
                                    player:"gainAfter",
                                },
                                filter:function (event,player){
                                    return event.getParent().name=='draw'&&event.getParent(2).name=='qunyou_shibian_draw';
                                },
                                content:function (){
                                    player.removeSkill("qunyou_shibian_draw");
                                    player.addTempSkill("qunyou_shibian_2",'roundStart')
                                },
                            },
                        },
                        //武将分栏
                        characterSort: {
                            qunyou: {
                                "yuandan": ["qunyou_xiefuren", "qunyou_weidan", "qunyou_luzhi", "qunyou_huangyueying", "qunyou_qunhuangyueying", "qunyou_xiefei"],
                                "month1": ["qunyou_gansidui", "qunyou_pujing", "qunyou_caozhang", "qunyou_fengji", "qunyou_mouzhanghe"]
                            },
                        },
                        translate: {
                            // 武将部分
                            "qunyou_huangyueying": "黄月英",
                            "qunyou_qunhuangyueying": "群黄月英",
                            "qunyou_luzhi": "卢植",
                            "qunyou_xiefuren": "谢夫人",
                            "qunyou_weidan": "韦诞",
                            "qunyou_xiefei": "谢妃",
                            "qunyou_gansidui": "敢死队",
                            "qunyou_pujing": "普净",
                            "qunyou_caozhang": "曹彰",
                            "qunyou_fengji": "逢纪",
                            "qunyou_mouzhanghe": "谋张郃",
                            // 技能部分
                            "qunyou_jizhi": "集智",
                            "qunyou_jizhi_info": "当场上有人使用锦囊牌时，你可以摸一张牌。你于回合内以此法获得的牌不计入本回合手牌上限。",
                            "qunyou_qicai": "奇才",
                            "qunyou_qicai_info": "锁定技，你使用锦囊牌无距离限制;其他角色不能弃置你装备区里的防具牌和宝物牌。你可以为你使用的普通锦囊牌增加或减少任意个目标。",
                            "qunyou_yanrong": "掩容",
                            "qunyou_yanrong_info": "锁定技,其他角色首次对你使用的牌效果变为“弃置一张牌,然后弃置你的一张牌”(若自身无法弃置则无法对你使用牌）。你使用锦囊牌可额外指定一名没有触发【掩容】的角色为目标,且你用牌指定没有触发【掩容】的角色时摸一张牌。",
                            "qunyou_zhice": "智策",
                            "qunyou_zhice_info": "出牌阶段，你可以没有触发【掩容】的角色的弃置两张牌,视为使用一张未因此使用过的普通锦囊牌或模一张牌。(每回合每名角色限一次)。",
                            "qunyou_mingren": "明任",
                            "qunyou_mingren_info": "准备阶段,若你没有“任”,则你摸两张牌,然后你将两张手牌置于武将牌上,称为任。结束阶段,你可以用任意张手牌替换换等量任。你的手牌上限+×（X为“任”的数量）。",
                            "qunyou_shouye": "授业",
                            "qunyou_shouye_info": "授业：每回合每种牌名限一次。当你需要使用或打出基本牌时,你将两张手牌或任交给一名其他角色,视为使用或打出此基本牌。",
                            "qunyou_fenghan": "奉汉",
                            "qunyou_fenghan_info": "当一名角色的判定牌生效时,若此牌花色为黑桃,你可以将此牌当作“任”宣于武将牌上,然后令其出新判定。",
                            "qunyou_xinyou": "心幽",
                            "qunyou_xinyou_info": "锁定技,游戏开始时,你额外摸9张牌。你的手牌没有上限。你的回合结束时,若本回合你没有使用过牌，你弃置两张牌。当你受到伤害或失去体力时，你改为弃置等量的牌,若你因此失去的牌数大于一张,你摸一张牌",
                            "qunyou_guiwang": "归望",
                            "qunyou_guiwang_info": "限定技，当你进入濒死状态时,你可以获得每名其他角色装备区内的一张牌，然后你翻面",
                            "qunyou_juexiang": "绝响",
                            "qunyou_juexiang_info": "锁定技,你一次性失去牌的数量至多为3。当你失去最后一张手牌后你进入濒死状态。当你进入濒死状态时,其他角色依次选择是否交给你一张牌,当你的手牌数大于0时,你立即脱离濒死状态",
                            "qunyou_chengwen": "成文",
                            "qunyou_chengwen_info": "锁定技,当你失去手牌后,若你手牌中没有同名牌,你摸一张牌。",
                            "qunyou_dengjie": "登阶",
                            "qunyou_dengjie_info": "出牌阶段,你可以弃X张牌（X为此技能发动次数且至少为1），然后你的下一张牌无使用与次数限制。",
                            "qunyou_zhuanzhang": "撰章",
                            "qunyou_zhuanzhang_info": "限定技,出牌阶段开始时，弃置你的所有手牌，然后将5张不同名的可主动使用的牌置入你的手中。",
                            "qunyou_piaomiao": "缥缈",
                            "qunyou_piaomiao_info": "锁定技,当你进入濒死状态时，你可选择一个未选择的花色无法使用,然后摸两张牌并将体力恢复至3。若你有一种颜色的牌无法使用，你获得【翠枝】并增加一点体力上限;若你所有花色均无法使用,你减少2点体力上限取消所有用牌限制。",
                            "qunyou_yunque": "云雀",
                            "qunyou_yunque_info": "回合结束时,你可依据本回合使用的花色数依次发动以下效果:1.弃置场上一张牌;2.令一名角色回复一点体力;3.摸等同于自身体力上限的牌,自身进入濒死。",
                            "qunyou_cuizhi": "翠枝",
                            "qunyou_cuizhi_info": "其他角色造成伤害结算后,若你手牌数不多于其,你获得其一张牌;若你体力值不多于其,其流失一点体力,你回复一点体力。",
                            "qunyou_gansi": "敢死",
                            "qunyou_gansi_info": "出牌阶段，你令一名角色死亡，然后你死亡。",
                            "qunyou_jiemou": "揭谋",
                            "qunyou_jiemou_info": "结束阶段,你可以摸一张牌,然后将一张牌置于一名其他角色的武将牌上。若有角色用颜色相同的牌指定其为目标,你可以展示并令其获得此牌，然后取消其为目标。",
                            "qunyou_yunyou": "云游",
                            "qunyou_yunyou_info": "锁定技,你记录你回合内失去牌的花色。花色在记录中的牌对你造成伤害时防止之,然后从记录中移除此花色。",
                            "qunyou_duhua": "度化",
                            "qunyou_duhua_info": "限定技,当一名角色处于濒死状态时,你可以弃置X张牌,令其弃置区域里的所有牌,复原武将牌,摸X张牌并回复×点体力,然后其获得【武圣】。（×最大为5)",
                            "qunyou_duhuayanshengwusheng": "武圣",
                            "qunyou_duhuayanshengwusheng_info": "你可以将一张红色牌当【杀】使用或打出,你使用的红色【杀】无距离限制且可以无视防具。",
                            "qunyou_xiongwu": "雄武",
                            "qunyou_xiongwu_info": "锁定技，你回合内使用【杀】的次数等于你的攻击距离。",
                            "qunyou_jiangchi": "将驰",
                            "qunyou_jiangchi_info": "出牌阶段限X次:1.摸一张牌使本回合使用【杀】次数-1;2.弃一张牌使本回合攻击距离+1且下一张【杀】无视防具(X为你的体力上限且一回合使用【杀】次数不应小于0)。",
                            "qunyou_jiebi": "诘愎",
                            "qunyou_jiebi_info": "出牌阶段可以依次发动，1.弃一张牌;2.失去一点体力;3.武将牌翻面。每发动一次视为使用一张不计入出牌次数且无出牌限制的【杀】;若此做造成了伤害,则你摸X张牌,然后本回合此技能失效(X为选项编号数)。",
                            "qunyou_zishi": "自恃",
                            "qunyou_zishi_info": "锁定技,每回合依次发动,当你成为其他角色使用牌的目标时:1.摸一张牌;2.回复一点体力;3.你与当前回合角色武将牌翻面。",
                            "qunyou_shibian": "识变",
                            "qunyou_shibian_info": "一名角色的回合开始时，你可以令本回合手牌数始终等于其手牌数。",
                            "qunyou_liaodi": "料敌",
                            "qunyou_liaodi_info": "当你因“识变”摸牌后，你可以令本轮“识变”失效。",
                            //分组部分
                            "yuandan": "<span style='font-family: yuanli'>元旦活动将</span>",
                            "month1": "<span style='font-family: yuanli'>1月正常将</span>"
                        },
                    }
                    if (lib.device || lib.node) {
                        for (var i in qunyou.character) qunyou.character[i][4].push('ext:群友DIY2023/' + i + '.jpg');
                    } else {
                        for (var i in qunyou.character) qunyou.character[i][4].push('db:extension-群友DIY2023:' + i + '.jpg');
                    }
                    return qunyou;
                })
                lib.config.all.characters.push('qunyou');
                if (!lib.config.characters.contains('qunyou')) lib.config.characters.push('qunyou');
                lib.translate['qunyou_character_config'] = '<span width="78" height="25">群友DIY2023_1</span>';

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