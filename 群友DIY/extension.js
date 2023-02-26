game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "群友DIY",

        content: function (config, pack) {
            //评级
            if (lib.rank.rarity.junk) {
                lib.rank.rarity.junk.addArray([
                    /*2022*/
                    "qunyou2022_yuejiyuanshuai", "qunyou2022_midangdawang", "qunyou2022_sp_linghu", "qunyou2022_pengtuo", "qunyou2022_zhandisi",
                    /*2023_yd*/
                    /*2023_m1*/
                    /*2023_m2*/
                ]);
            }
            if (lib.rank.rarity.common) {
                lib.rank.rarity.common.addArray([
                    /*2022*/
                    "qunyou2022_dengzhi", "qunyou2022_lijueguosi", "qunyou2022_jinhuansanjie", "qunyou2022_wangyun", "qunyou2022_mengjie", "qunyou2022_dongtuna", "qunyou2022_mizhu", "qunyou2022_jinxianggongzhu", "qunyou2022_laoba", "qunyou2022_sp_xuchu", "qunyou2022_sp_xuchu", "qunyou2022_xiaoqiao", "qunyou2022_zhangbiao", "qunyou2022_wenqiao", "qunyou2022_huangwudie", "qunyou2022_re_zhanghe", "qunyou2022_liubei", "qunyou2022_suibian", "qunyou2022_sunjun", "qunyou2022_simazhi", "qunyou2022_langxiongdi", "qunyou2022_bolilingmeng", "qunyou2022_gesi", "qunyou2022_longcuigongzhu", "qunyou2022_sunnichang",
                    /*2023_yd*/
                    "qunyou2023_yd_xiefuren",
                    /*2023_m1*/
                    /*2023_m2*/
                ]);
            }
            if (lib.rank.rarity.rare) {
                lib.rank.rarity.rare.addArray([
                    /*2022*/
                    "qunyou2022_liuba", "qunyou2022_mengyue", "qunyou2022_jiangwei", "qunyou2022_re_guohuai", "qunyou2022_shihuan", "qunyou2022_xiahoushi", "qunyou2022_chunaizhanshen", "qunyou2022_zixushangren", "qunyou2022_zhangxi",
                    /*2023_yd*/
                    /*2023_m1*/
                    "qunyou2023_m1_caozhang",
                    /*2023_m2*/
                    "qunyou2023_m2_liubei", "qunyou2023_m2_dailaidongzhu",
                ]);
            }
            if (lib.rank.rarity.epic) {
                lib.rank.rarity.epic.addArray([
                    /*2022*/
                    "qunyou2022_yangfu", "qunyou2022_re_sunce", "qunyou2022_yuanxi", "qunyou2022_taotieyoumo", "qunyou2022_jingxiang_zhangjiao", "qunyou2022_huzhao", "qunyou2022_tengyin", "qunyou2022_tenggongzhu", "qunyou2022_zibaoerhao",
                    /*2023_yd*/
                    "qunyou2023_yd_weidan", "qunyou2023_yd_luzhi",
                    /*2023_m1*/
                    "qunyou2023_m1_pujing", "qunyou2023_m1_fengji", "qunyou2023_m1_donghe",
                    /*2023_m2*/
                    "qunyou2023_m2_jiangwei",
                ]);
            }
            if (lib.rank.rarity.legend) {
                lib.rank.rarity.legend.addArray([
                    /*2022*/
                    "qunyou2022_luxun1", "qunyou2022_luxun2", "qunyou2022_wujie", "qunyou2022_huanfuren",
                    /*2023_yd*/
                    "qunyou2023_yd_huangyueying", "qunyou2023_yd_qun_huangyueying", "qunyou2023_yd_xietiao",
                    /*2023_m1*/
                    "qunyou2023_m1_gansidui", "qunyou2023_m1_mou_zhanghe",
                    /*2023_m2*/
                ]);
            }



            //阵亡配音
            lib.skill._dieAudio = {
                trigger: {
                    global: 'dieBegin'
                },
                priority: 2,
                forced: true,
                unique: true,
                content: function () {
                    game.playAudio('..', 'extension', '群友DIY/audio/die', trigger.player.name);
                },
            };
        },
        precontent: function (qunyou2022) {
            if (qunyou2022.enable) {


                //qunyou2022
                game.import('character', function () {
                    var qunyou2022 = {
                        name: 'qunyou2022', //武将包命名（必填）
                        connect: false, //该武将包是否可以联机（必填）
                        character: {
                            "qunyou2022_luxun1": ["male", "wu", 3, ["qunyou2022_qianxun1", "qunyou2022_lianying1"],
                                []
                            ],
                            "qunyou2022_luxun2": ["male", "wu", 3, ["qunyou2022_qianxun2", "qunyou2022_lianying2"],
                                []
                            ],
                            "qunyou2022_yangfu": ["male", "wei", 4, ["qunyou2022_feiqu", "qunyou2022_yjian", "qunyou2022_qianmou"],
                                []
                            ],
                            "qunyou2022_liuba": ["male", "shu", 3, ["qunyou2022_pingjia", "qunyou2022_qinggao"],
                                []
                            ],
                            "qunyou2022_dengzhi": ["male", "shu", 3, ["qunyou2022_yaomeng", "qunyou2022_wenbing"],
                                []
                            ],
                            "qunyou2022_lijueguosi": ["male", "qun", 4, ["qunyou2022_fuzuo"],
                                []
                            ],
                            "qunyou2022_jinhuansanjie": ["male", "qun", 6, ["qunyou2022_xunliao", "qunyou2022_beici"],
                                []
                            ],
                            "qunyou2022_wangyun": ["male", "qun", 4, ["qunyou2022_lianji"],
                                []
                            ],
                            "qunyou2022_yuejiyuanshuai": ["male", "qun", 5, ["qunyou2022_diechui", "qunyou2022_xueshang"],
                                []
                            ],
                            "qunyou2022_midangdawang": ["male", "qun", 4, ["qunyou2022_qiangdi"],
                                []
                            ],
                            "qunyou2022_mengyue": ["female", "qun", 4, ["qunyou2022_yueren", "qunyou2022_xieneng"],
                                []
                            ],
                            "qunyou2022_sijiyingji": ["female", "wei", 4, ["qunyou2022_zhongshen", "qunyou2022_zuifa"],
                                []
                            ],
                            "qunyou2022_sp_linghu": ["female", "qun", 5, ["qunyou2022_sangwei"],
                                []
                            ],
                            "qunyou2022_mengjie": ["male", "shu", 3, ["qunyou2022_chuzhang", "qunyou2022_cishang"],
                                []
                            ],
                            "qunyou2022_dongtuna": ["male", "qun", 4, ["qunyou2022_kuifu", "qunyou2022_xianmeng"],
                                []
                            ],
                            "qunyou2022_mizhu": ["male", "shu", 4, ["qunyou2022_ziyuan", "qunyou2022_jugu"],
                                []
                            ],
                            "qunyou2022_jinxianggongzhu": ["female", "wei", 3, ["qunyou2022_lizhuang", "qunyou2022_wudu"],
                                []
                            ],
                            "qunyou2022_laoba": ["male", "qun", 5, ["qunyou2022_shishi","qunyou2022_cheshuo"],
                                []
                            ],
                            "qunyou2022_pengtuo": ["male", "qun", 4, ["qunyou2022_guzhu"],
                                []
                            ],
                            "qunyou2022_sp_xuchu": ["male", "wei", 5, ["qunyou2022_tianqiong", "qunyou2022_pofeng", "qunyou2022_xuechuang", "qunyou2022_junbei"],
                                []
                            ],
                            "qunyou2022_sp_shen_liubei": ["male", "shen", 3, ["qunyou2022_baidi", "qunyou2022_jieyi", "qunyou2022_xuehai"],
                                []
                            ],
                            "qunyou2022_xiaoqiao": ["female", "wu", 3, ["qunyou2022_xiuhua", "qunyou2022_jinghong"],
                                []
                            ],
                            "qunyou2022_zhangbiao": ["male", "shu", 4, ["qunyou2022_tuijun", "qunyou2022_wuli"],
                                []
                            ],
                            "qunyou2022_re_sunce": ["male", "wu", "4/5", ["qunyou2022_hunshang", "qunyou2022_yingba"],
                                []
                            ],
                            "qunyou2022_yuanxi": ["male", "qun", 4, ["qunyou2022_zuoshi", "qunyou2022_liangna"],
                                []
                            ],
                            "qunyou2022_wenqiao": ["male", "jin", 3, ["qunyou2022_ranxi", "qunyou2022_hongyi"],
                                []
                            ],
                            "qunyou2022_huangwudie": ["female", "shu", 3, ["qunyou2022_shifan", "qunyou2022_hongzhuang", "qunyou2022_sheyi"],
                                []
                            ],
                            "qunyou2022_re_zhanghe": ["male", "wei", 4, ["qiaobian", "qunyou2022_jixian"],
                                []
                            ],
                            "qunyou2022_liubei": ["male", "shu", 4, ["qunyou2022_shuangjian", "qunyou2022_longzhang"],
                                []
                            ],
                            "qunyou2022_suibian": ["male", "wei", 4, ["qunyou2022_liushi", "qunyou2022_fudu"],
                                []
                            ],
                            "qunyou2022_sunjun": ["male", "wu", 5, ["qunyou2022_xiongyi", "qunyou2022_jiaoli"],
                                []
                            ],
                            "qunyou2022_jiangwei": ["male", "shu", 4, ["qunyou2022_lianbing", "qunyou2022_xianshou"],
                                []
                            ],
                            "qunyou2022_zhandisi": ["female", "qun", 3, ["qunyou2022_qiangmai", "qunyou2022_qiangmai2"],
                                []
                            ],
                            "qunyou2022_taotieyoumo": ["male", "qun", 4, ["qunyou2022_jingtun", "qunyou2022_zhouxue"],
                                []
                            ],
                            "qunyou2022_simazhi": ["male", "qun", 3, ["qunyou2022_renhui", "qunyou2022_minxin"],
                                []
                            ],
                            "qunyou2022_langxiongdi": ["male", "wei", 4, ["qunyou2022_shangjin", "qunyou2022_shishou"],
                                []
                            ],
                            "qunyou2022_jingxiang_zhangjiao": ["male", "qun", 3, ["qunyou2022_sanhe", "qunyou2022_cedian"],
                                []
                            ],
                            "qunyou2022_re_guohuai": ["male", "wei", 4, ["qunyou2022_jingce"],
                                []
                            ],
                            "qunyou2022_bolilingmeng": ["female", "qun", 4, ["qunyou2022_tuizhi", "qunyou2022_youxian"],
                                []
                            ],
                            "qunyou2022_shihuan": ["male", "wei", 4, ["qunyou2022_fagu", "qunyou2022_jieliang"],
                                []
                            ],
                            "qunyou2022_huzhao": ["male", "qun", 3, ["qunyou2022_chengfu", "qunyou2022_liyin", "qunyou2022_shuzhi"],
                                []
                            ],
                            "qunyou2022_wujie": ["male", "shen", 8, ["qunyou2022_dilie", "qunyou2022_tianbeng", "qunyou2022_tuteng"],
                                []
                            ],
                            "qunyou2022_xiahoushi": ["female", "shu", 3, ["qunyou2022_yanyu", "qunyou2022_qiaoshi"],
                                []
                            ],
                            "qunyou2022_gesi": ["male", "shu", 99, ["qunyou2022_kuangzhan", "qunyou2022_xianji"],
                                []
                            ],
                            "qunyou2022_tenggongzhu": ["female", "wu", 3, ["qunyou2022_lianli", "qunyou2022_dianpei2"],
                                []
                            ],
                            "qunyou2022_tengyin": ["male", "wu", 3, ["qunyou2022_xiujie", "qunyou2022_zhongjian"],
                                []
                            ],
                            "qunyou2022_huanfuren": ["female", "wei", 1, ["qunyou2022_cailan", "qunyou2022_xunxu"],
                                []
                            ],
                            "qunyou2022_caoyu": ["male", "wei", 4, ["qunyou2022_yanchu", "qunyou2022_fenggong"],
                                []
                            ],
                            "qunyou2022_chunaizhanshen": ["male", "wu", 5, ["qunyou2022_fuai", "qunyou2022_shenwei", "qunyou2022_hanlie"],
                                []
                            ],
                            "qunyou2022_zibaoerhao": ["male", "qun", 5, ["qunyou2022_hengzhi", "qunyou2022_zibao"],
                                []
                            ],
                            "qunyou2022_longcuigongzhu": ["female", "qun", 3, ["qunyou2022_hongyun", "qunyou2022_dianpei", "qunyou2022_jiying"],
                                []
                            ],
                            "qunyou2022_zixushangren": ["male", "qun", 3, ["qunyou2022_yuyan", "qunyou2022_xianzhi", "qunyou2022_fuluan"],
                                []
                            ],
                            "qunyou2022_sunnichang": ["female", "wu", 3, ["qunyou2022_wuxian", "qunyou2022_xianming"],
                                []
                            ],
                            "qunyou2022_zhangxi": ["male", "qun", 3, ["qunyou2022_yizun", "qunyou2022_weihan"],
                                []
                            ],
                        },
                        //武将介绍
                        characterIntro: {},
                        //武将称号
                        characterTitle: {
                            "qunyou2022_yangfu": "公辅之节",
                        },
                        skill: {
                            //qunyou2022_luxun1
                            "qunyou2022_qianxun1": {
                                trigger: {
                                    player: ["phaseJudgeBefore", "phaseDrawBefore"],
                                },
                                forced: true,
                                content: function () {
                                    trigger.cancel();
                                    game.log(player, '跳过了', event.triggername == 'phaseJudgeBefore' ? '判定阶段' : '摸牌阶段');
                                },
                            },
                            "qunyou2022_lianying1": {
                                trigger: {
                                    player: "loseAfter",
                                },
                                forced: true,
                                content: function () {
                                    player.draw();
                                },
                            },

                            //qunyou2022_luxun2
                            "qunyou2022_qianxun2": {
                                trigger: {
                                    player: ["phaseJudgeBefore"],
                                },
                                forced: false,
                                check: function (event, player) {
                                    return player.countCards('h') < 0;
                                },
                                content: function () {
                                    trigger.cancel();
                                    player.skip('phaseDraw');
                                },
                            },
                            "qunyou2022_lianying2": {
                                trigger: {
                                    player: "loseAfter",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return _status.currentPhase == player;
                                },
                                content: function () {
                                    player.draw();
                                },
                            },

                            //qunyou2022_yangfu
                            "qunyou2022_feiqu": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return player.countCards('h') && game.hasPlayer((current) => (player.canCompare(current)));
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget("匪躯：请选择拼点对象", function (card, player, target) {
                                        return player.canCompare(target);
                                    }).set('ai', function (target) {
                                        if (!_status.event.goon) return 0;
                                        return -get.attitude(_status.event.player, target);
                                    }).set('goon', player.needsToDiscard() || player.hasCard(function (card) {
                                        var val = get.value(card);
                                        if (val < 0) return true;
                                        if (val <= 5) {
                                            return card.number >= 11;
                                        }
                                        if (val <= 6) {
                                            return card.number >= 12;
                                        }
                                        return false;
                                    }));
                                    'step 1'
                                    if (!result.bool) event.finish();
                                    player.logSkill('qunyou2022_feiqu', result.targets);
                                    event.target = result.targets[0];
                                    player.chooseToCompare(event.target);
                                    'step 2'
                                    if (result.bool) {
                                        var list = [];
                                        list.push("当" + get.translation(player) + "的牌进入弃牌堆时，你须弃置一张与其类型相同的牌（无相同类型则不弃），直到其下回合开始");
                                        list.push("直到" + get.translation(player) + "下回合开始，你的手牌上限-X（X为其本回合进入弃牌堆的总牌数）");
                                        var next = event.target.chooseControl();
                                        next.set("prompt", "匪躯：请选择一项");
                                        next.set("choiceList", list);
                                    } else {
                                        player.chooseUseTarget("匪躯：视为使用一张【决斗】", {
                                            name: 'juedou',
                                            isCard: true
                                        }, true);
                                        event.finish();
                                    };
                                    'step 3'
                                    if (result.control == "选项一") event.target.addTempSkill("qunyou2022_feiqu_1",{player:'phaseAfter'});
                                    else event.target.addTempSkill("qunyou2022_feiqu_2",{player:'phaseAfter'});
                                },
                                subSkill: {
                                    1: {
                                        trigger: {
                                            global: ["useCard", "respond", "loseAfter"],
                                        },
                                        direct: true,
                                        mark: true,
                                        intro: {
                                            content: "当〖匪躯〗角色的牌进入弃牌堆时，你须弃置一张与其类型相同的牌（无相同类型则不弃）",
                                        },
                                        filter: function (event, player) {
                                            if (!event.player.hasSkill("qunyou2022_feiqu")) return false;
                                            if (event.name.indexOf('lose') == 0 && (event.getlx === false || event.position != ui.discardPile)) return false;
                                            return event.cards;
                                        },
                                        content: function () {
                                            trigger.player.logSkill('qunyou2022_feiqu');
                                            for (var i of trigger.cards) {
                                                var type_discard = get.type(i, 'trick');
                                                if (player.countCards('he', function (card) {
                                                        return get.type(card, 'trick') == type_discard;
                                                    }) > 0) {
                                                    player.chooseToDiscard('he', true, function (card) {
                                                        return get.type(card, 'trick') == type_discard;
                                                    });
                                                };
                                            };
                                        },
                                        sub: true,
                                    },
                                    2: {
                                        trigger: {
                                            global: ["useCard", "respond", "loseAfter"],
                                        },
                                        onremove: true,
                                        mark: true,
                                        intro: {
                                            content: "手牌上限-#",
                                        },
                                        direct: true,
                                        filter: function (event, player) {
                                            if (!event.player.hasSkill("qunyou2022_feiqu")) return false;
                                            if (event.name.indexOf('lose') == 0 && (event.getlx === false || event.position != ui.discardPile)) return false;
                                            return event.cards;
                                        },
                                        content: function () {
                                            trigger.player.logSkill('qunyou2022_feiqu');
                                            player.addMark('qunyou2022_feiqu_2', trigger.num);
                                        },
                                        mod: {
                                            maxHandcard: function (player, num) {
                                                return num - player.countMark('qunyou2022_feiqu_2');
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_yjian": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    global: ["equipAfter", "addJudgeAfter", "loseAfter", "gainAfter", "loseAsyncAfter"],
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        var evt = event.getl(current);
                                        return evt && evt.hs && evt.hs.length && current.countCards('h') == 0 && !current.hasSkill('qunyou2022_yjian_disable');
                                    });
                                },
                                content: function () {
                                    "step 0"
                                    event.list = game.filterPlayer(function (current) {
                                        var evt = trigger.getl(current);
                                        return evt && evt.hs && evt.hs.length;
                                    }).sortBySeat(_status.currentPhase);
                                    "step 1"
                                    var target = event.list.shift();
                                    event.target = target;
                                    if (target.isAlive() && target.countCards('h') == 0) {
                                        player.chooseBool(get.prompt2('qunyou2022_yjian', target)).set('ai', function () {
                                            return get.attitude(_status.event.player, _status.event.getParent().target) > 0;
                                        });
                                    } else event.goto(4);
                                    "step 2"
                                    event.bool = result.bool;
                                    if (event.bool) {
                                        player.logSkill('qunyou2022_yjian', target);
                                        target.draw(2);
                                        if (target != player) {
                                            target.chooseCard('选择还给' + get.translation(player) + '的牌', true, 'he').set('ai', function (card) {
                                                if (get.attitude(target, player) > 0) {
                                                    return get.value(card);
                                                } else {
                                                    return 7 - get.value(card);
                                                }
                                            });
                                        };
                                    };
                                    "step 3"
                                    if (event.bool) {
                                        if (result.bool) player.gain(result.cards, target, 'giveAuto');
                                        if (player != _status.currentPhase) {
                                            player.chooseToUse({
                                                prompt: '衣谏：使用一张【杀】',
                                                filterCard: function (card, player) {
                                                    return get.name(card) == 'sha' && lib.filter.filterCard.apply(this, arguments);
                                                },
                                                addCount: false,
                                            });
                                        }
                                        target.addTempSkill("qunyou2022_yjian_disable");
                                    };
                                    "step 4"
                                    if (event.list.length) event.goto(1);
                                },
                                subSkill: {
                                    disable: {
                                        mark: true,
                                        intro: {
                                            content: "本回合已成为过〖" + get.translation("qunyou2022_yjian") + "〗的目标",
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_qianmou": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    source: "damageSource",
                                },
                                frequent: true,
                                preHidden: true,
                                content: function () {
                                    player.draw();
                                    player.chooseToDiscard('he', true);
                                },
                            },

                            //qunyou2022_liuba
                            "qunyou2022_pingjia": {
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return player != target && target.countCards('he') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.choosePlayerCard(target, 'he',
                                        [1, Math.min(target.countCards('he'), 2)], get.prompt('qunyou2022_pingjia', target));
                                    'step 1'
                                    player.storage.count = result.links.length;
                                    player.storage.target = target;
                                    if (result.bool && result.links.length) {
                                        player.gain(result.links.slice(0), target);
                                    }
                                    'step 2'
                                    player.addTempSkill('qunyou2022_pingjia_back', 'phaseAfter');
                                },
                                subSkill: {
                                    back: {
                                        trigger: {
                                            player: "phaseUseEnd",
                                        },
                                        forced: true,
                                        charlotte: true,
                                        onremove: true,
                                        filter: function (event, player) {
                                            return player.storage.target.isAlive();
                                        },
                                        content: function () {
                                            'step 0'
                                            player.chooseCard('选择还的牌', true, player.storage.count, 'he').set('ai', function (card) {
                                                if (get.attitude(target, player) > 0) {
                                                    return get.value(card);
                                                } else {
                                                    return 7 - get.value(card);
                                                }
                                            });
                                            'step 1'
                                            // target.gain(result.cards,player,'giveAuto');
                                            player.storage.target.gain(result.cards, player, 'giveAuto');
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_qinggao": {
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    // var evt=event.getParent();
                                    // var source=evt.player;
                                    // var phsu=evt.getParent('phaseUse');
                                    // if(!source||source==player||source!=phsu.player) return false;
                                    // return source.getHistory('useCard',function(evt2){
                                    //     return evt2.getParent('phaseUse')==phsu;
                                    // }).indexOf(evt)==0;
                                    var evt = event.getParent();
                                    var source = evt.player;
                                    var phsu = evt.getParent('phaseUse');
                                    if (!source || source == player || player != _status.currentPhase) return false;
                                    return source.getHistory('useCard').indexOf(evt) == 0;
                                },
                                content: function () {
                                    trigger.excluded.add(player);
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, current, isLink) {
                                            if (isLink || !player.isPhaseUsing()) return;
                                            var num;
                                            var evt = _status.event.getParent('useCard'),
                                                evt2 = _status.event.getParent('phaseUse');
                                            if (evt.card == card) {
                                                num = player.getHistory('useCard', function (evt) {
                                                    return evt.getParent('phaseUse') == evt2;
                                                }).indexOf(evt);
                                            } else num = player.getHistory('useCard', function (evt) {
                                                return evt.getParent('phaseUse') == evt2;
                                            }).length;
                                            if (num > 0) return;
                                            // if(num==0&&get.tag(card,'damage')) return 'zerotarget';
                                            // if(num==1&&get.color(card)=='black') return 'zeroplayertarget';
                                            // ai会把你看成第1张伤害牌失效
                                            if (num == 0) return 'zerotarget';

                                        },
                                    },
                                },
                            },

                            //qunyou2022_dengzhi
                            "qunyou2022_yaomeng": {
                                audio: "ext:群友DIY/skill/audio:2",
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return player.canCompare(target);
                                },
                                filter: function (event, player) {
                                    return player.countCards('h') > 0;
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseToCompare(target);
                                    "step 1"
                                    if (!result.tie) {
                                        if (result.bool) {
                                            player.draw(3);
                                            target.draw(1);
                                        } else {
                                            target.draw(3);
                                            player.draw(1);
                                        }
                                    } else {
                                        player.draw(1);
                                        target.draw(1);
                                    }
                                },
                                ai: {
                                    expose: 0.3,
                                    threaten: 1.2,
                                },
                            },
                            "qunyou2022_wenbing": {
                                trigger: {
                                    global: "phaseEnd",
                                },
                                filter: function (event, player) {
                                    return player.storage.qunyou2022_wenbing;
                                },
                                check: function (event, player) {
                                    return get.attitude(player, _status.currentPhase) > 0;
                                },
                                content: function () {
                                    game.log("稳兵摸牌");
                                    _status.currentPhase.draw();
                                },
                                group: ["qunyou2022_wenbing_count", "qunyou2022_wenbing_add"],
                                subSkill: {
                                    count: {
                                        trigger: {
                                            player: ["loseAfter", "gainAfter"],
                                            global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter"],
                                        },
                                        forced: true,
                                        silent: true,
                                        content: function () {
                                            if (player.storage.qunyou2022_wenbing) {
                                                if (player.storage.count != player.countCards("h")) {
                                                    player.storage.qunyou2022_wenbing = false;
                                                }
                                            } else {
                                                event.finish();
                                            }
                                        },
                                        sub: true,
                                        popup: false,
                                    },
                                    add: {
                                        trigger: {
                                            global: "phaseBegin",
                                        },
                                        forced: true,
                                        silent: true,
                                        content: function () {
                                            player.storage.qunyou2022_wenbing = true;
                                            player.storage.count = player.countCards("h");
                                        },
                                        sub: true,
                                        popup: false,
                                    },
                                },
                                ai: {
                                    expose: 0.3,
                                },
                            },

                            //qunyou2022_lijueguosi
                            "qunyou2022_fuzuo": {
                                audio: "ext:群友DIY/skill/audio:2",
                                enable: "phaseUse",
                                usable: 1,
                                selectTarget: -1,
                                multitarget: true,
                                multiline: true,
                                content: function () {
                                    "step 0"
                                    event.current = player;
                                    event.currented = [];
                                    "step 1"
                                    event.currented.push(event.current);
                                    event.current.animate('target');
                                    event.current.chooseTarget("覆祚:视为对一名角色使用【杀】", true, function (card, player, target) {
                                        return event.current.inRange(target);
                                    }).set('ai', function (target) {
                                        //如果玩家有藤甲，队友会砍你刷牌。
                                        var cards = player.getCards('e', function (card) {
                                            return get.name(card) == 'tengjia';
                                        });
                                        if (cards.length > 0 && target == player) return get.attitude(event.current, target) > 0;
                                        return get.attitude(event.current, target) < 0;
                                    })
                                    "step 2"
                                    event.current.useCard({
                                        name: 'sha',
                                        isCard: true
                                    }, result.targets[0], false);
                                    "step 3"
                                    event.current = event.current.next;
                                    if (!event.currented.contains(event.current)) {
                                        game.delay(0.5);
                                        event.goto(1);
                                    }
                                },
                                group: 'qunyou2022_fuzuo_draw',
                                subSkill: {
                                    draw: {
                                        trigger: {
                                            global: "useCardToTargeted",
                                        },
                                        filter: function (event, player) {
                                            return event.card.name == 'sha' && event.target == player && event.getParent(2).name == "qunyou2022_fuzuo";
                                        },
                                        direct: true,
                                        content: function () {
                                            "step 0"
                                            player.draw(2);
                                        },
                                    },
                                },
                            },

                            //qunyou2022_jinhuansanjie
                            "qunyou2022_xunliao": {
                                audio: "ext:群友DIY/skill/audio:2",
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    if (player.hasSkill('qunyou2022_xunliao_disable')) return false;
                                    return !player.storage.qunyou2022_xunliao1 ||
                                        !player.storage.qunyou2022_xunliao2 ||
                                        !player.storage.qunyou2022_xunliao3;
                                },
                                content: function () {
                                    "step 0"
                                    event.list = [];
                                    if (!player.storage.qunyou2022_xunliao1) event.list.push("失去1点体力并视为使用一张无距离与次数限制的【杀】");
                                    if (!player.storage.qunyou2022_xunliao2) event.list.push("失去1点体力上限并视为使用一张单目标锦囊牌");
                                    if (!player.storage.qunyou2022_xunliao3) event.list.push("翻面并视为使用一张【南蛮入侵】");
                                    var next = player.chooseControl('cancel2');
                                    next.set('prompt', '獯獠：请选择一项');
                                    next.set('choiceList', event.list);
                                    "step 1"
                                    event.index = result.index;
                                    if (result.control == 'cancel2') event.finish();
                                    if (event.index == event.list.indexOf('失去1点体力上限并视为使用一张单目标锦囊牌')) {
                                        var list = [];
                                        for (var i of lib.inpile) {
                                            if (get.type(i) == 'trick' && !get.tag({
                                                    name: i,
                                                    isCard: true
                                                }, 'multitarget')) list.push(['锦囊', '', i]);
                                        };
                                        var next = player.chooseButton(['视为使用一张单目标锦囊牌', [list, 'vcard']]);
                                        next.set('filterButton', function (button) {
                                            return player.hasUseTarget({
                                                name: button.link[2]
                                            });
                                        });
                                    };
                                    "step 2"
                                    switch (event.index) {
                                        case event.list.indexOf("失去1点体力并视为使用一张无距离与次数限制的【杀】"):
                                            player.loseHp();
                                            player.logSkill("qunyou2022_xunliao");
                                            player.chooseUseTarget({
                                                name: 'sha',
                                                isCard: true
                                            }, '视为使用一张无距离与次数限制的【杀】', true, 'nodistance');
                                            player.storage.qunyou2022_xunliao1 = true;
                                            break;
                                        case event.list.indexOf('失去1点体力上限并视为使用一张单目标锦囊牌'):
                                            player.loseMaxHp();
                                            player.logSkill("qunyou2022_xunliao");
                                            if (result.links[0][2]) {
                                                lib.skill.qunyou2022_xunliao_x.viewAs = {
                                                    name: result.links[0][2],
                                                    isCard: true
                                                };
                                                lib.skill.qunyou2022_xunliao_x.prompt = '视为使用一张' + get.translation(result.links[0][2]);
                                                var next = player.chooseToUse(true);
                                                next.set('norestore', true);
                                                next.set('_backupevent', 'qunyou2022_xunliao_x');
                                                next.backup('qunyou2022_xunliao_x');
                                                player.storage.qunyou2022_xunliao2 = true;
                                            };
                                            break;
                                        case event.list.indexOf("翻面并视为使用一张【南蛮入侵】"):
                                            player.turnOver();
                                            player.logSkill("qunyou2022_xunliao");
                                            player.chooseUseTarget({
                                                name: 'nanman',
                                                isCard: true
                                            }, true, '视为使用一张【南蛮入侵】');
                                            player.storage.qunyou2022_xunliao3 = true;
                                            break;
                                    };
                                    "step 3"
                                    if (!player.hasHistory('sourceDamage', function (evt) {
                                            var evtx = evt.getParent('useCard');
                                            return evtx.card == card && evtx.getParent() == event && game.hasPlayer2(function (current) {
                                                evtx.targets.contains(current) && !current.isAlive();
                                            });
                                        })) {
                                        player.addTempSkill('qunyou2022_xunliao_disable');
                                    };
                                },
                                group: "qunyou2022_xunliao_add",
                                subSkill: {
                                    add: {
                                        trigger: {
                                            player: "phaseEnd",
                                        },
                                        direct: true,
                                        popup: false,
                                        content: function () {
                                            player.storage.qunyou2022_xunliao1 = false;
                                            player.storage.qunyou2022_xunliao2 = false;
                                            player.storage.qunyou2022_xunliao3 = false;
                                        },
                                        sub: true,
                                    },
                                    disable: {
                                        mark: true,
                                        intro: {
                                            content: "本回合不能再使用〖獯獠〗",
                                        },
                                        sub: true,
                                    },
                                    x: {
                                        filterCard: function () {
                                            return false
                                        },
                                        selectCard: -1,
                                        popname: true,
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_beici": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                forced: true,
                                logTarget: "player",
                                filter: function (event, player) {
                                    // 如果没花色显然是转换杀，如果没点数也显然是转换杀,没实体卡的也是转化杀
                                    // if(event.card.name!='sha') return false;
                                    // if(!typeof get.number(event.card)=='number') return true;
                                    // if(!typeof get.suit(event.card)=='suit') return true;
                                    // if(!event.card.isCard) return true;
                                    // return false;
                                    return event.card.name == 'sha' && !(event.card && event.card.isCard);

                                },
                                content: function () {
                                    'step 0'
                                    player.loseHp();
                                },
                            },

                            //qunyou2022_wangyun
                            "qunyou2022_lianji": {
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                content: function () {
                                    player.draw(2);
                                    var next = player.phaseUse();
                                    event.next.remove(next);
                                    trigger.next.push(next);
                                    player.addTempSkill("qunyou2022_lianji_remove");
                                },
                                subSkill: {
                                    remove: {
                                        trigger: {
                                            player: "phaseUseEnd",
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            var history = player.getHistory('sourceDamage', function (evt) {
                                                return evt.getParent('phaseUse') == event;
                                            });
                                            return history.length == 0;
                                        },
                                        content: function () {
                                            player.loseHp();
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_yuejiyuanshuai
                            "qunyou2022_diechui": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    player: "phaseEnd",
                                },
                                init: function (player) {
                                    if (!player.storage.qunyou2022_diechui) player.storage.qunyou2022_diechui = [];
                                },
                                filter: function (event) {
                                    return player.countCards('h');
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseCard('将一张手牌置于武将牌上作为“锤”', true);
                                    "step 1"
                                    if (result.cards && result.cards.length) {
                                        player.lose(result.cards, ui.special, 'toStorage');
                                        player.storage.qunyou2022_diechui = player.storage.qunyou2022_diechui.concat(result.cards);
                                        player.syncStorage('qunyou2022_diechui');
                                        player.markSkill('qunyou2022_diechui');
                                        game.log(player, '将', result.cards, '置于武将牌上作为“锤”');
                                    }
                                },
                                intro: {
                                    content: "cards",
                                    onunmark: function (storage, player) {
                                        if (storage && storage.length) {
                                            player.$throw(storage, 1000);
                                            game.cardsDiscard(storage);
                                            game.log(storage, '被置入了弃牌堆');
                                            storage.length = 0;
                                        }
                                    },
                                },
                                group: ["qunyou2022_diechui_add"],
                                subSkill: {
                                    add: {
                                        trigger: {
                                            source: "damageBegin1",
                                        },
                                        prompt: function () {
                                            return '弃置一张【锤】使【杀】的伤害+1'
                                        },
                                        check: function (event, player) {
                                            return get.attitude(player, event.player) < 0;
                                        },
                                        filter: function (event) {
                                            return event.getParent().name == 'sha';
                                        },
                                        content: function () {
                                            'step 0'
                                            player.chooseButton([get.prompt('qunyou2022_diechui_add'), player.getStorage('qunyou2022_diechui')]);
                                            'step 1'
                                            // var card=player.storage.qunyou2022_diechui.randomGet();
                                            if (result.bool) {
                                                var card = result.links[0];
                                                game.cardsDiscard(card);
                                                player.$throw(card);
                                                player.storage.qunyou2022_diechui.remove(card);
                                                game.log(card, '进入了弃牌堆');
                                                trigger.num += 1;
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_xueshang": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    global: "dieAfter",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.player != player && player.storage.qunyou2022_diechui.length > 0 && event.player.group == 'qun';
                                    // 
                                },
                                content: function () {
                                    player.loseHp();
                                },
                            },

                            //qunyou2022_midangdawang
                            "qunyou2022_qiangdi": {
                                audio: "ext:群友DIY/audio/skill:2",
                                trigger: {
                                    player: "phaseZhunbeiBegin",
                                },
                                frequent: true,
                                preHidden: true,
                                content: function () {
                                    'step 0'
                                    player.judge(function (card) {
                                        if (card.name == 'sha') return 1;
                                        return 0;
                                    });
                                    'step 1'
                                    if (result.judge > 0) {
                                        player.addTempSkill("qunyou2022_qiangdi_distance");
                                        player.addTempSkill("qunyou2022_qiangdi_directHit");
                                    } else {
                                        if (result.color == 'black') {
                                            player.addTempSkill("qunyou2022_qiangdi_distance");
                                        } else if (result.color == 'red') {
                                            player.addTempSkill("qunyou2022_qiangdi_directHit");
                                        };
                                    };
                                },
                                subSkill: {
                                    distance: {
                                        mod: {
                                            targetInRange: function (card, player, target, now) {
                                                if (card.name == 'sha') return true;
                                            },
                                        },
                                        sub: true,
                                    },
                                    directHit: {
                                        trigger: {
                                            player: "useCardToPlayered",
                                        },
                                        direct: true,
                                        filter: function (event, player) {
                                            return event.target && event.card.name == 'sha';
                                        },
                                        logTarget: "target",
                                        content: function () {
                                            trigger.directHit.addArray(trigger.target);
                                        },
                                        ai: {
                                            "directHit_ai": true,
                                            skillTagFilter: function (player, tag, arg) {
                                                return get.attitude(player, arg.target) <= 0 && arg.card.name == 'sha';
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_mengyue
                            "qunyou2022_yueren": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    player: "phaseDrawBegin1",
                                },
                                mark: true,
                                marktext: "☯",
                                zhuanhuanji: true,
                                intro:{
                                    content:function (player) {
                                        var str = '转换技，摸牌阶段，你可以改为亮出牌堆顶的一张牌并获得之，然后：';
                                        if (player.storage.qunyou2022_yueren) str += '阴：本回合你可以将该牌当任意普通锦囊牌使用。';
                                        else str += '阳：本回合你可以将该牌当任意基本牌使用。';
                                        return str;
                                    },
                                },
                                filter: function (event, player) {
                                    return !event.numFixed;
                                },
                                content: function () {
                                    "step 0"
                                    trigger.changeToZero();
                                    var cards = get.cards(1);
                                    player.showCards(cards);
                                    player.gain(cards,'gain2').gaintag.add('qunyou2022_yueren');
                                    "step 1"
                                    if (!player.storage.qunyou2022_yueren) player.addTempSkill("qunyou2022_yueren_yin");
                                    else player.addTempSkill("qunyou2022_yueren_yang");
                                    player.changeZhuanhuanji('qunyou2022_yueren');
                                },
                                subSkill: {
                                    yin: {
                                        enable: "phaseUse",
                                        onremove:function(player){
                                            player.removeGaintag('qunyou2022_yueren');
                                        },
                                        filter: function (event, player) {
                                            return player.countCards('h', function (cardx) {
                                                return cardx.hasGaintag('qunyou2022_yueren');
                                            }) > 0;
                                        },
                                        chooseButton: {
                                            dialog: function (player) {
                                                var list = [];
                                                for (var i = 0; i < lib.inpile.length; i++) {
                                                    if (get.type(lib.inpile[i]) == 'trick') list.push(['锦囊', '', lib.inpile[i]]);
                                                }
                                                return ui.create.dialog(get.translation('qunyou2022_yueren'), [list, 'vcard']);
                                            },
                                            filter: function (button, player) {
                                                return lib.filter.filterCard({name: button.link[2]}, player, _status.event.getParent());
                                            },
                                            check: function (button) {
                                                var player = _status.event.player;
                                                var recover = 0,
                                                    lose = 1,
                                                    players = game.filterPlayer();
                                                for (var i = 0; i < players.length; i++) {
                                                    if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                                        return (button.link[2] == 'juedou') ? 2 : -1;
                                                    }
                                                    if (!players[i].isOut()) {
                                                        if (players[i].hp < players[i].maxHp) {
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
                                                }
                                                if (lose > recover && lose > 0) return (button.link[2] == 'nanman') ? 1 : -1;
                                                if (lose < recover && recover > 0) return (button.link[2] == 'taoyuan') ? 1 : -1;
                                                return (button.link[2] == 'wuzhong') ? 1 : -1;
                                            },
                                            backup: function (links, player) {
                                                return {
                                                    selectCard: 1,
                                                    filterCard: function (card, player) {
                                                        return card.hasGaintag('qunyou2022_yueren');
                                                    },
                                                    position: 'h',
                                                    audio: "ext:群友DIY/skill/audio:2",
                                                    popname: true,
                                                    viewAs: {name:links[0][2]},
                                                }
                                            },
                                        },
                                        ai: {
                                            order: 1,
                                            result: {
                                                player: function (player) {
                                                    var num = 0;
                                                    var cards = player.getCards('h', function (cardx) {
                                                        return player.storage.yueren2[0] == cardx;
                                                    });
                                                    if (cards.length >= 3 && player.hp >= 3) return 0;
                                                    for (var i = 0; i < cards.length; i++) {
                                                        num += Math.max(0, get.value(cards[i], player, 'raw'));
                                                    }
                                                    num /= cards.length;
                                                    num *= Math.min(cards.length, player.hp);
                                                    return 12 - num;
                                                },
                                            },
                                            threaten: 1.6,
                                        },
                                        sub: true,
                                    },
                                    yang: {
                                        enable: "phaseUse",
                                        onremove:function(player){
                                            player.removeGaintag('qunyou2022_yueren');
                                        },
                                        filter: function (event, player) {
                                            return player.countCards('h', function (cardx) {
                                                return cardx.hasGaintag('qunyou2022_yueren');
                                            }) > 0;
                                        },
                                        chooseButton: {
                                            dialog: function (player) {
                                                var list = [];
                                                for (var i = 0; i < lib.inpile.length; i++) {
                                                    var name = lib.inpile[i];
                                                    if (name == 'sha') {
                                                        list.push(['基本', '', 'sha']);
                                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                                    } 
                                                    else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                                };
                                                return ui.create.dialog(get.translation('qunyou2022_yueren'), [list, 'vcard']);
                                            },
                                            filter: function (button, player) {
                                                return lib.filter.filterCard({name:button.link[2]}, player, _status.event.getParent());
                                            },
                                            backup: function (links, player) {
                                                return {
                                                    selectCard: 1,
                                                    filterCard: function (card, player) {
                                                        return card.hasGaintag('qunyou2022_yueren');
                                                    },
                                                    position: 'h',
                                                    audio: "ext:群友DIY/skill/audio:2",
                                                    popname: true,
                                                    viewAs: {name: links[0][2], nature: links[0][3]},
                                                }
                                            },
                                        },
                                        ai: {
                                            order: 1,
                                            result: {
                                                player: function (player) {
                                                    var num = 0;
                                                    var cards = player.getCards('h', function (cardx) {
                                                        return player.storage.yueren2[0] == cardx;
                                                    });
                                                    if (cards.length >= 3 && player.hp >= 3) return 0;
                                                    for (var i = 0; i < cards.length; i++) {
                                                        num += Math.max(0, get.value(cards[i], player, 'raw'));
                                                    }
                                                    num /= cards.length;
                                                    num *= Math.min(cards.length, player.hp);
                                                    return 12 - num;
                                                },
                                            },
                                            threaten: 1.2,
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_xieneng": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                frequent:true,
                                filter: function (event, player) {
                                    return player.countCards('h')<player.maxHp;
                                },
                                content: function () {
                                    'step 0'
                                    player.drawTo(player.maxHp);
                                    player.chooseToDiscard("弃1张牌，否则失去1点体力",'he').set('ai',function(card){
                                        return 7-get.value(card);
                                    });
                                    'step 1'
                                    if(!result.bool) player.loseHp();
                                },
                            },

                            //qunyou2022_sijiyingji
                            "qunyou2022_zhongshen": {
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return player.hp - player.storage.qunyou2022_zhongshen_hp < 0;
                                },
                                init: function (player) {
                                    player.storage.qunyou2022_zhongshen_hp = 0;
                                },
                                content: function () {
                                    player.addTempSkill('qunyou2022_zhongshen_effect');
                                },
                                group: "qunyou2022_zhongshen_hp",
                                subSkill: {
                                    hp: {
                                        trigger: {
                                            player: "phaseEnd",
                                        },
                                        direct: true,
                                        content: function () {
                                            player.storage.qunyou2022_zhongshen_hp = player.hp;
                                            player.addTempSkill('qunyou2022_zhongshen_mark', {
                                                player: "phaseUseBegin"
                                            });
                                        },
                                        sub: true,
                                    },
                                    mark: {
                                        charlotte: true,
                                        mark: true,
                                        intro: {
                                            markcount: function (storage, player) {
                                                return player.storage.qunyou2022_zhongshen_hp;
                                            },
                                            content: function (storage, player) {
                                                return "上个回合结束时，你的体力值为" + player.storage.qunyou2022_zhongshen_hp;
                                            },
                                        },
                                    },
                                    effect: {
                                        trigger: {
                                            player: "useCard",
                                        },
                                        direct: true,
                                        mark: true,
                                        intro: {
                                            content: "使用牌无距离与次数限制；<br>每当你使用黑色基本或锦囊牌后，你摸一张牌。",

                                        },
                                        filter: function (event, player) {
                                            if (_status.currentPhase != player) return false;
                                            if (get.type(event.card) == 'equip') return false;
                                            return get.color(event.card) == 'black';
                                        },
                                        content: function () {
                                            player.draw();
                                        },
                                        mod: {
                                            cardUsable: function (card, player) {
                                                return true;
                                            },
                                            targetInRange: function (card, player) {
                                                return true;
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_zuifa": {
                                audio: "ext:群友DIY/audio/skill:2",
                                trigger: {
                                    global: "useCard2",
                                },
                                filter: function (event, player) {
                                    return event.card && event.card.name == 'sha' && event.player != player && get.color(event.card) != 'none';
                                },
                                prompt: function (event) {
                                    var color = get.color(event.card);
                                    if (color == 'red') return "令" + get.translation(event.player) + "失去1点体力值并收回此【杀】，然后本回合不能再对除你外的角色使用【杀】";
                                    return "令此【杀】伤害+1，然后你也成为该【杀】的目标";
                                },
                                content: function () {
                                    event.color = get.color(trigger.cards);
                                    if (event.color == 'red') {
                                        trigger.player.loseHp();
                                        trigger.player.gain(trigger.cards, 'gain2');
                                        trigger.player.addTempSkill("qunyou2022_zuifa_check");
                                        trigger.player.storage.qunyou2022_zuifa_check = player;
                                    } else {
                                        trigger.baseDamage++;
                                        if (!trigger.targets.contains(player)) {
                                            trigger.targets.addArray(player);
                                            game.log(player, '成为了额外目标');
                                        };
                                    }
                                },
                                ai: {
                                    threaten: 1.1,
                                },
                                group: "qunyou2022_zuifa_none",
                                subSkill: {
                                    none: {
                                        trigger: {
                                            global: "useCard2",
                                        },
                                        filter: function (event, player) {
                                            return event.cards && event.cards.name == 'sha' && event.player != player && get.color(event.cards) == 'none' && player.countCards('hes');
                                        },
                                        direct: true,
                                        content: function () {
                                            "step 0"
                                            player.chooseToDiscard("弃一张牌，然后获得此【杀】", "hes");
                                            "step 1"
                                            if (result.bool) {
                                                player.gain(trigger.cards, 'gain2');
                                                player.logSkill("qunyou2022_zuifa");
                                            };
                                        },
                                        sub: true,
                                    },
                                    check: {
                                        mark: true,
                                        marktext: "罪罚",
                                        intro: {
                                            content: function (storage, player) {
                                                return "只能对" + get.translation(player.storage.qunyou2022_zuifa_check) + "使用【杀】";
                                            },
                                        },
                                        mod: {
                                            playerEnabled: function (card, player, target) {
                                                if (card.name == 'sha' && player.storage.qunyou2022_zuifa_check != target) return false;
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_sp_linghu
                            "qunyou2022_shangwei": {
                                audio: "ext:群友DIY/audio/skill:2",
                                trigger: {
                                    global: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return event.source && event.player.isIn() && get.distance(player, event.player) <= 1;
                                },
                                content: function () {
                                    'step 0'
                                    // 加强1：你摸1，
                                    //player.draw()
                                    'step 1'
                                    event.target = trigger.source;
                                    var cards = player.getCards('h');
                                    var hs = event.target.getCards('h');
                                    var dialog = ['赏味：选择要操作的牌', '<div class="text center">' + get.translation(event.target) + '的手牌</div>', hs, '<div class="text center">你的手牌</div>', cards];
                                    var next = player.chooseButton(dialog, 2);
                                    next.set('filterButton', function (button) {
                                        if (ui.selected.buttons.length) return get.owner(button.link) != get.owner(ui.selected.buttons[0].link);
                                        return true;
                                    });
                                    next.set('cards1', hs).set('cards2', cards);
                                    'step 2'
                                    if (result.bool) {
                                        var cards = result.links;
                                        if (get.owner(cards[0]) != player) cards.reverse();
                                        player.$giveAuto(cards[0], event.target);
                                        event.target.gain(cards[0], player);
                                        event.target.give(cards[1], player);
                                    };
                                },
                                ai: {
                                    threaten: 2,
                                },
                            },

                            //qunyou2022_mengjie
                            "qunyou2022_chuzhang": {
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return target.hp < target.maxHp;
                                },
                                content: function () {
                                    'step 0'
                                    target.recover();
                                    var list = [];
                                    list.push("摸一张牌");
                                    if (game.hasPlayer((current) => (current.countDiscardableCards(player, 'ej')))) list.push("弃置场上一张牌");
                                    var next = player.chooseControl(list);
                                    next.set('prompt', '除瘴:请选择一项');
                                    'step 1'
                                    if (result.control == "摸一张牌") {
                                        player.draw();
                                        event.finish();
                                    } else {
                                        player.chooseTarget('除瘴:弃置场上一张牌', 1, true, function (card, player, target) {
                                            return target.countDiscardableCards(player, 'ej');
                                        });
                                    };
                                    'step 2'
                                    if (result.target) {
                                        player.discardPlayerCard(result.targets[0], 'ej', true);
                                    };
                                },
                                ai: {
                                    order: 9,
                                    result: {
                                        target: function (player, target) {
                                            if (target.hp == 1) return 5;
                                            if (player == target && player.countCards('h') > player.hp) return 5;
                                            return 2;
                                        },
                                    },
                                    threaten: 2,
                                },
                            },
                            "qunyou2022_cishang": {
                                audio: "ext:群友DIY/audio/skill:2",
                                trigger: {
                                    player: "die",
                                },
                                forceDie: true,
                                direct: true,
                                skillAnimation: true,
                                animationColor: "gray",
                                content: function () {
                                    'step 0'
                                    var next = player.chooseTarget('辞赏:选择一名其他角色，令其增加1点体力上限', lib.filter.notMe);
                                    next.set('forceDie', true);
                                    next.set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                    'step 1'
                                    if (result.target) {
                                        result.target.gainMaxHp();
                                        player.logSkill("qunyou2022_cishang");
                                    };
                                },
                            },

                            //qunyou2022_dongtuna
                            "qunyou2022_kuifu": {
                                audio: "ext:群友DIY/audio/skill:2",
                                trigger: {
                                    global: "phaseBefore",
                                    player: "enterGame",
                                },
                                forced: true,
                                filter: function (event) {
                                    return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                                },
                                content: function () {
                                    'step 0'
                                    var next = player.chooseTarget('选择【傀附】的目标', lib.translate.qunyou2022_kuifu_info, true, function (card, player, target) {
                                        return target != player && !target.hasSkill('qunyou2022_kuifu_draw');
                                    });
                                    next.set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att < 0) return -att + 3;
                                        return Math.random();
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var target = result.targets[0];
                                        player.line(target, 'green');
                                        game.log(target, '成为了', '【傀附】', '的目标');
                                        target.storage.qunyou2022_kuifu2 = player;
                                        target.addTempSkill('qunyou2022_kuifu_draw', {
                                            player: 'die'
                                        });
                                    }
                                },
                                subSkill: {
                                    draw: {
                                        mark: true,
                                        intro: {
                                            content: "你造成伤害后，董茶那摸一张牌",
                                        },
                                        nopop: true,
                                        trigger: {
                                            source: "damageSource",
                                        },
                                        forced: true,
                                        popup: false,
                                        charlotte: true,
                                        content: function () {
                                            player.storage.qunyou2022_kuifu2.draw();
                                        },
                                        onremove: true,
                                        sub: true,
                                    },
                                    die: {
                                        trigger: {
                                            global: "dieAfter",
                                        },
                                        forced: true,
                                        direct: true,
                                        silent: true,
                                        popup: false,
                                        filter: function (event, player) {
                                            return event.player.hasSkill('qunyou2022_kuifu_draw');
                                        },
                                        content: function () {
                                            "step 0"
                                            player.logSkill('qunyou2022_kuifu');
                                            var next = player.chooseTarget('请将' + get.translation(trigger.player) + '的「附」交给一名其他角色')
                                            next.set('ai', function (target) {
                                                var player = _status.event.player;
                                                return 10 + get.attitude(player, target);
                                            });
                                            "step 1"
                                            if (result.bool && result.targets && result.targets.length) {
                                                var target = result.targets[0];
                                                player.line(target, 'fire');
                                                target.addTempSkill('qunyou2022_kuifu_draw', {
                                                    player: 'die'
                                                });
                                                game.delay();
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_xianmeng": {
                                audio: "ext:群友DIY/qudio/skill:2",
                                enable: "phaseUse",
                                usable: 1,
                                delay: false,
                                filter: function (event, player) {
                                    return player.countCards('h', {
                                            suit: 'spade'
                                        }) &&
                                        player.countCards('h', {
                                            suit: 'club'
                                        }) &&
                                        player.countCards('h', {
                                            suit: 'heart'
                                        }) &&
                                        player.countCards('h', {
                                            suit: 'diamond'
                                        });
                                },
                                filterTarget: function (card, player, target) {
                                    return target != player;
                                },
                                check: function (target) {
                                    return -get.attitude(_status.event.player, target);
                                },
                                filterCard: true,
                                selectCard: -1,
                                position: 'h',
                                content: function () {
                                    'step 0'
                                    target.damage(target.hp, 'nocard');
                                    target.storage.qunyou2022_xianmeng_lose = player;
                                    target.addTempSkill('qunyou2022_xianmeng_lose', {
                                        player: 'phaseAfter'
                                    })
                                },
                                ai: {
                                    threaten: 2,
                                },
                                subSkill: {
                                    lose: {
                                        mark: true,
                                        intro: {
                                            content: function (storage, player) {
                                                return "你每回复1点体力，" + get.translation(player.storage.qunyou2022_xianmeng_lose) + "失去1点体力";
                                            },
                                        },
                                        trigger: {
                                            player: "recoverAfter",
                                        },
                                        forced: true,
                                        popup: false,
                                        charlotte: true,
                                        content: function () {
                                            player.storage.qunyou2022_xianmeng_lose.loseHp(trigger.num);
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_mizhu
                            "qunyou2022_ziyuan": {
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return true;
                                },
                                getAuto:function(player){
                                    var hs=player.getCards('he');
                                    var bool=false,index,i;
                                    for(var i=1;i<hs.length;i++){
                                        var num=get.number(hs[i]);
                                        index=i.toString(2);
                                        while(index.length<hs.length){
                                            index=('0'+index);
                                        }
                                        for(var k=0;k<ss.length;k++){
                                            if(index[k]=='1') num+=get.number(hs[k]);
                                        }
                                        if(num==13){
                                            bool=true;
                                            break;
                                        }
                                    }
                                    if(!bool) return [];
                                    var list=[hs[i]];
                                    for(var j=0;j<hs.length;j++){
                                        if(index[j]=='1') list.push(hs[j]);
                                    }
                                    return list;
                                },
                                content: function () {
                                    'step 0'
                                    target.draw(4);
                                    if (target==player) event.finish();
                                    'step 1'
                                    var next = target.chooseCard('he', [1, target.countCards('h')], 'qunyou2022_ziyuan：交给' + get.translation(player) + '点数合计为13的手牌并失去1点体力，否则立即死亡');
                                    next.set('filterCard', function(card){
                                        var num=0;
                                        for(var i=0;i<ui.selected.cards.length;i++){
                                            num+=get.number(ui.selected.cards[i]);
                                        }
                                        return get.number(card)+num<=13;
                                    });
                                    next.set('selectCard',function(){
                                        var num=0;
                                        for(var i=0;i<ui.selected.cards.length;i++){
                                            num+=get.number(ui.selected.cards[i]);
                                        }
                                        if(num==13) return ui.selected.cards.length;
                                        return ui.selected.cards.length+2;
                                    });
                                    next.set('cardResult',function(){
                                        var cards=player.getCards('he');
                                        var l=cards.length;
                                        var all=Math.pow(l,2);
                                        var list=[];
                                        for(var i=1;i<all;i++){
                                            var array=[];
                                            for(var j=0;j<l;j++){
                                                if(Math.floor((i%Math.pow(2,j+1))/Math.pow(2,j))>0) array.push(cards[j])
                                            }
                                            var numx=0;
                                            for(var k of array){
                                                numx+=get.number(k);
                                            }
                                            if(numx==13) list.push(array);
                                        }
                                        if(list.length){
                                            list.sort(function(a,b){
                                                return get.value(a)-get.value(b);
                                            });
                                            return list[0];
                                        }
                                        return list;
                                    }());
                                    next.set('autolist',lib.skill.qunyou2022_ziyuan.getAuto(player));
                                    next.set('processAI',function(){
                                        if(_status.event.autolist&&_status.event.autolist.length>0){
                                            return {
                                                bool:true,
                                                links:_status.event.autolist,
                                            }
                                        }
                                        return {bool:false};
                                    });
                                    next.set('complexCard', true);
                                    'step 2'
                                    if (result.bool) {
                                        var num = 0;
                                        for (var i of result.cards) num += get.number(i);
                                        player.gain(result.cards, target, 'giveAuto');
                                        target.loseHp();
                                    }
                                    else{
                                        target.die().set("source",player);
                                    };
                                },
                                ai: {
                                    order: 5,
                                    result: {
                                        target: function (player, target) {
                                            if (target==player) return 4;
                                            if (target.countCards('he') < 2) return -target.hp*1.25;
                                            return target.countCards("he")-target.hp;
                                        },
                                    },
                                    threaten: 3,
                                },
                            },
                            "qunyou2022_jugu": {
                                mod: {
                                    maxHandcard: function (player, num) {
                                        return num - player.maxHp;
                                    },
                                },
                                trigger: {
                                    global: "phaseBefore",
                                    player: "enterGame",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return (event.name != 'phase' || game.phaseNumber == 0);
                                },
                                content: function () {
                                    player.chooseToDiscard(player.maxHp, true);
                                },
                            },

                            //qunyou2022_jinxianggongzhu
                            "qunyou2022_lizhuang": {
                                enable: "phaseUse",
                                usable: 1,
                                filterTarget: function (card, player, target) {
                                    return target.countCards('e') > 0;
                                },
                                content: function () {
                                    'step 0'
                                    // 血小于等于2，然后是非友好对象，选择废除扎死
                                    // var goon = player.hp<=2&&get.attitude(player,target)<0;
                                    var goon = false;
                                    target.chooseControl(function () {
                                        if (_status.event.goon) return '选项二';
                                        return '选项一';
                                    }).set('goon', goon).set('prompt', 'qunyou2022_lizhuang').set('choiceList', ['令' + get.translation(player) + '弃置你装备区里的一张牌', '获得你装备区内的所有牌并受到一点伤害']);
                                    'step 1'
                                    if (result.control == '选项一') {
                                        player.discardPlayerCard(target, true, 'e');
                                        event.finish();
                                    } else {
                                        target.disableEquip('equip1');
                                        target.disableEquip('equip2');
                                        target.disableEquip('equip3');
                                        target.disableEquip('equip4');
                                        target.disableEquip('equip5');
                                        player.damage(2, target);
                                    }
                                },
                            },
                            "qunyou2022_wudu": {
                                trigger: {
                                    player: "damageEnd",
                                },
                                frequent: true,
                                filter: function (event) {
                                    return (event.num > 0)
                                },
                                content: function () {
                                    "step 0"
                                    event.count = 1;
                                    "step 1"
                                    // player.draw(2);
                                    event.given = 0;
                                    "step 2"
                                    player.chooseCardTarget({
                                        filterCard: true,
                                        selectCard: 1,
                                        filterTarget: function (card, player, target) {
                                            return player != target
                                        },
                                        ai1: function (card) {
                                            if (ui.selected.cards.length > 0) return -1;
                                            if (card.name == 'du') return 20;
                                            return (_status.event.player.countCards('h') - _status.event.player.hp);
                                        },
                                        ai2: function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                if (target.hasSkillTag('nodu')) return 0;
                                                return 1 - att;
                                            }
                                            return att - 4;
                                        },
                                        prompt: '请选择要送人的卡牌'
                                    });
                                    "step 3"
                                    if (result.bool) {
                                        player.line(result.targets, 'green');
                                        result.targets[0].gain(result.cards, player, 'giveAuto');
                                        player.draw(player.maxHp - player.hp);
                                        event.given += result.cards.length;
                                        if (event.count < trigger.num) {
                                            delete event.temp;
                                            event.count++;
                                            player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                        } else event.finish();
                                    } else if (event.count < trigger.num) {
                                        delete event.temp;
                                        event.count++;
                                        player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                    } else event.finish();
                                    "step 4"
                                    if (result.bool) {
                                        player.logSkill(event.name);
                                        event.goto(1);
                                    }
                                },
                                ai: {
                                    maixie: true,
                                    "maixie_hp": true,
                                    result: {
                                        effect: function (card, player, target) {
                                            if (get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                if (!target.hasFriend()) return;
                                                var num = 1;
                                                if (get.attitude(player, target) > 0) {
                                                    if (player.needsToDiscard()) {
                                                        num = 0.7;
                                                    } else {
                                                        num = 0.5;
                                                    }
                                                }
                                                if (player.hp >= 4) return [1, num * 2];
                                                if (target.hp == 3) return [1, num * 1.5];
                                                if (target.hp == 2) return [1, num * 0.5];
                                            }
                                        },
                                    },
                                    threaten: 0.6,
                                },
                            },

                            //qunyou2022_laoba
                            "qunyou2022_shishi": {
                                audio:"ext:群友DIY/audio/skill:1",
                                enable: "phaseUse",
                                usable: 1,
                                mark:true,
                                intro: {
                                    content: function (storage, player) {
                                        if (player.storage.qunyou2022_shishi) return "所有【"+get.translation(player.storage.qunyou2022_shishi)+"】均视为【毒】";
                                        return "未发动〖食屎〗";
                                    },
                                },
                                content: function () {
                                    'step 0'
                                    player.loseHp();
                                    var list = [];
                                    for (var i of lib.inpile){
                                        if(player.storage.qunyou2022_shishi_du.contains(i)) continue;
                                        if(get.type(i)=="basic") list.push(['基本', '', i]);
                                    };
                                    player.chooseButton(['食屎：声明一种基本牌，所有此牌名的牌均视为【毒】直到你的下回合开始', [list, 'vcard']],true);
                                    'step 1'
                                    if(result.links[0][2]){
                                        player.storage.qunyou2022_shishi=result.links[0][2];
                                        for (var i of game.players) {
                                            i.storage.qunyou2022_shishi_du.push(result.links[0][2]);
                                        };
                                    };
                                },
                                group:["qunyou2022_shishi_add","qunyou2022_shishi_remove"],
                                subSkill: {
                                    du: {
                                        audio:"ext:群友DIY/audio/skill:1",
                                        trigger:{
                                            player:['loseAfter','compare'],
                                            global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter','addToExpansionAfter'],
                                            target:'compare',
                                        },
                                        init:function(player){
                                            player.storage.qunyou2022_shishi_du=[];
                                        },
                                        filter:function(event,player,name){
                                            if(name=='compare'){
                                                if(player==event.player){
                                                    if(event.iwhile>0) return false;
                                                    return event.card1.name=='du';
                                                }
                                                return event.card2.name=='du';
                                            }
                                            if(event.name!='equip'&&event.name!='addJudge'&&!event.visible) return false;
                                            var evt=event.getl(player);
                                            if(!evt||!evt.hs||!evt.hs.filter(function(i){
                                                return get.name(i,player)=='du';
                                            }).length) return false;
                                            return true;
                                        },
                                        forced:true,
                                        charlotte: true,
                                        content:function(){
                                            'step 0'
                                            if(trigger.delay===false) game.delayx();
                                            'step 1'
                                            game.log(player,'触发了','#g【毒】','的效果');
                                            var num=1;
                                            if(typeof trigger.getl=='function'){
                                                num=trigger.getl(player).hs.filter(function(i){
                                                    return get.name(i,player)=='du';
                                                }).length;
                                            }
                                            player.loseHp(num).type='du';
                                        },
                                        mod: {
                                            cardname: function (card, player, name) {
                                                if (player.storage.qunyou2022_shishi_du.contains(card.name)) return 'du';
                                            },
                                        },
                                    },
                                    add:{
                                        trigger:{
                                            global:'phaseBefore',
                                            player:'enterGame',
                                        },
                                        direct: true,
                                        silent:true,
                                        filter:function(event,player){
                                            return event.name!='phase'||game.phaseNumber==0;
                                        },
                                        logTarget:()=>game.filterPlayer().sortBySeat(),
                                        content:function(){
                                            'step 0'
                                            game.countPlayer(function(current){
                                                current.addSkill('qunyou2022_shishi_du');
                                            });
                                            game.delayx();
                                        },
                                    },
                                    remove: {
                                        trigger: {
                                            player: "phaseBegin",
                                        },
                                        direct: true,
                                        silent:true,
                                        filter:function(event,player){
                                            return player.storage.qunyou2022_shishi;
                                        },
                                        content: function () {
                                            "step 0"
                                            var list = game.filterPlayer(function (current) {
                                                return current.storage.qunyou2022_shishi_du.contains(player.storage.qunyou2022_shishi);
                                            });
                                            if (list.length) {
                                                for (var i of list){
                                                    i.storage.qunyou2022_shishi_du.remove(player.storage.qunyou2022_shishi);
                                                };
                                            };
                                            "step 1"
                                            player.storage.qunyou2022_shishi=undefined;
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_cheshuo": {
                                audio:"ext:群友DIY/audio/skill:1",
                                trigger:{
                                    player:"phaseUseBegin",
                                },
                                forced:true,
                                direct:true,
                                content: function () {
                                    'step 0'
                                    var next=player.chooseTarget("观看一名其他角色的手牌，然后减少其下回合手牌上限");
                                    next.set('filterTarget',function(target){
                                        return target!=player;
                                    });
                                    next.set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill("qunyou2022_cheshuo",result.targets[0]);
                                        result.targets[0].addTempSkill("qunyou2022_cheshuo_discard",{player:"phaseAfter"});
                                        if(result.targets[0].countCards('h')) player.viewHandcards(result.targets[0]);
                                    }
                                },
                                mod:{
                                    ignoredHandcard:function(card,player){
                                        if(player.storage.qunyou2022_shishi_du.contains(card.name)){
                                            return true;
                                        }
                                    },
                                    cardDiscardable:function(card,player,name){
                                        if(name=='phaseDiscard'&&player.storage.qunyou2022_shishi_du.contains(card.name)){
                                            return false;
                                        }
                                    },
                                },
                                subSkill:{
                                    discard:{
                                        mark:true,
                                        marktext:"屎",
                                        forced:true,
                                        intro: {
                                            content: function (storage, player) {
                                                var num=0;
                                                for (var i of player.getCards('h')){
                                                    if(player.storage.qunyou2022_shishi_du.contains(i.name)) num++;
                                                };
                                                return "手牌上限-"+num;
                                            },
                                        },
                                        mod: {
                                            maxHandcard: function (player, num) {
                                                var num1=0;
                                                for (var i of player.getCards('h')){
                                                    if(player.storage.qunyou2022_shishi_du.contains(i.name)) num1++;
                                                };
                                                return num-num1;
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_pengtuo
                            "qunyou2022_guzhu": {
                                trigger: {
                                    global: "phaseBegin",
                                },
                                filter: function (event, player) {
                                    return event.player != player && (player.countCards('h') == 1 || player.hp == 1);
                                },
                                content: function () {
                                    player.useCard({
                                        name: 'sha',
                                        isCard: true
                                    }, trigger.player);
                                },
                            },

                            //qunyou2022_sp_xuchu
                            "qunyou2022_tianqiong": {
                                trigger: {
                                    player: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return (event.source && player.countCards('h') > 0 && event.num > 0);
                                },
                                content: function () {
                                    player.chooseToDiscard('h', player.countCards('h'), true);
                                    trigger.source.chooseToDiscard('h', trigger.source.countCards('h'), true);
                                },
                                ai: {
                                    "maixie_defend": true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (player.countCards('h') > target.countCards('h') && get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                                if (get.attitude(target, player) < 0) return [1, 1];
                                            }
                                        },
                                    },
                                },
                            },
                            "qunyou2022_pofeng": {
                                trigger: {
                                    player: "phaseDrawBegin1",
                                },
                                filter: function (event, player) {
                                    return !event.numFixed;
                                },
                                content: function () {
                                    'step 0'
                                    trigger.changeToZero();
                                    player.chooseTarget("弃置其装备区所有牌", true)
                                    'step 1'
                                    if (result.bool) {
                                        player.discardPlayerCard(result.targets[0], true, 'e', result.targets[0].countCards('e'));
                                    }

                                },
                            },
                            "qunyou2022_xuechuang": {
                                trigger: {
                                    global: "useCard",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.card.name == 'tao' && event.player != player;
                                },
                                content: function () {
                                    player.useCard({
                                        name: 'sha',
                                        isCard: true
                                    }, trigger.player);
                                },
                            },
                            "qunyou2022_junbei": {
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                filter: function (event, player) {
                                    return player.hp < player.maxHp && player.countCards('h') == 0;
                                },
                                content: function () {
                                    "step 0"
                                    event.num = player.getDamagedHp();
                                    player.draw(event.num);
                                },
                                ai: {
                                    threaten: function (player, target) {
                                        if (target.hp == 1) return 3;
                                        if (target.hp == 2) return 1.5;
                                        return 0.5;
                                    },
                                    effect: {
                                        target: function (card, player, target) {
                                            if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                        },
                                    },
                                },
                            },

                            //qunyou2022_sp_shen_liubei
                            "qunyou2022_baidi": {
                                trigger: {
                                    player: ["linkBefore", "enterGame"],
                                    global: "phaseBefore",
                                },
                                locked: true,
                                forced: true,
                                filter: function (event, player) {
                                    if (event.name == 'link') return player.isLinked();
                                    return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
                                },
                                content: function () {
                                    if (trigger.name != 'link') player.link(true);
                                    else trigger.cancel();
                                },
                                ai: {
                                    effect: {
                                        target: function (card) {
                                            if (card.name == 'tiesuo') return 'zeroplayertarget';
                                        },
                                    },
                                },
                                group: ["qunyou2022_baidi_tengjia1", "qunyou2022_baidi_tengjia2", "qunyou2022_baidi_tengjia3"],
                                subSkill: {
                                    "tengjia1": {
                                        audio: "tengjia",
                                        equipSkill: true,
                                        noHidden: true,
                                        inherit: "tengjia1",
                                        filter: function (event, player) {
                                            if (!lib.skill.tengjia1.filter(event, player)) return false;
                                            if (!player.isEmpty(2)) return false;
                                            return true;
                                        },
                                        sub: true,
                                        trigger: {
                                            target: ["useCardToBefore"],
                                        },
                                        forced: true,
                                        priority: 6,
                                        content: function () {
                                            trigger.cancel();
                                        },
                                        ai: {
                                            effect: {
                                                target: function (card, player, target, current) {
                                                    if (target.hasSkillTag('unequip2')) return;
                                                    if (player.hasSkillTag('unequip', false, {
                                                            name: card ? card.name : null,
                                                            target: target,
                                                            card: card
                                                        }) || player.hasSkillTag('unequip_ai', false, {
                                                            name: card ? card.name : null,
                                                            target: target,
                                                            card: card
                                                        })) return;
                                                    //if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
                                                    if (card.name == 'nanman' || card.name == 'wanjian') return 'zerotarget';
                                                    if (card.name == 'sha') {
                                                        var equip1 = player.getEquip(1);
                                                        if (equip1 && equip1.name == 'zhuque') return 1.9;
                                                        if (!card.nature) return 'zerotarget';
                                                    }
                                                },
                                            },
                                        },
                                    },
                                    "tengjia2": {
                                        audio: "tengjia",
                                        equipSkill: true,
                                        noHidden: true,
                                        inherit: "tengjia2",
                                        filter: function (event, player) {
                                            if (!lib.skill.tengjia2.filter(event, player)) return false;
                                            if (!player.isEmpty(2)) return false;
                                            return true;
                                        },
                                        sub: true,
                                        trigger: {
                                            player: "damageBegin3",
                                        },
                                        forced: true,
                                        content: function () {
                                            trigger.num++;
                                        },
                                        ai: {
                                            fireAttack: true,
                                            effect: {
                                                target: function (card, player, target, current) {
                                                    if (card.name == 'sha') {
                                                        if (card.nature == 'fire') return 2;
                                                        if (player.hasSkill('zhuque_skill')) return 1.9;
                                                    }
                                                    if (get.tag(card, 'fireDamage') && current < 0) return 2;
                                                },
                                            },
                                        },
                                    },
                                    "tengjia3": {
                                        audio: "tengjia",
                                        equipSkill: true,
                                        noHidden: true,
                                        inherit: "tengjia3",
                                        filter: function (event, player) {
                                            if (!lib.skill.tengjia3.filter(event, player)) return false;
                                            if (!player.isEmpty(2)) return false;
                                            return true;
                                        },
                                        sub: true,
                                        trigger: {
                                            target: "shaBefore",
                                        },
                                        forced: true,
                                        content: function () {
                                            trigger.cancel();
                                        },
                                    },
                                },
                            },
                            "qunyou2022_jieyi": {
                                trigger: {
                                    player: "loseAfter",
                                },
                                filter: function (event, player) {
                                    return player != _status.currentPhase && event.name == 'lose';
                                },
                                content: function () {
                                    "step 0"
                                    // 横置目标角色
                                    // result.targets[0].link(true);
                                    if (_status.currentPhase.isLinked()) {
                                        _status.currentPhase.link(false);
                                    } else {
                                        _status.currentPhase.link(true);
                                    }
                                },
                            },
                            "qunyou2022_xuehai": {
                                skillAnimation: true,
                                animationColor: "thunder",
                                unique: true,
                                juexingji: true,
                                audio: "ext:群友DIY2:2",
                                derivation: ["wushen", "paoxiao"],
                                trigger: {
                                    player: "dying",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return !player.storage.qunyou2022_xuehai;
                                },
                                content: function () {
                                    "step 0"
                                    player.loseMaxHp();
                                    "step 1"
                                    if (player.hp < 2) {
                                        player.recover(2 - player.hp);
                                    }
                                    "step 2"
                                    player.addSkill('wushen');
                                    player.addSkill('paoxiao')
                                    player.storage.qunyou2022_xuehai = true;
                                    player.awakenSkill('qunyou2022_xuehai');
                                },
                            },

                            //qunyou2022_xiaoqiao
                            "qunyou2022_xiuhua": {
                                trigger: {
                                    target: "shaBefore",
                                },
                                forced: true,
                                audio: "ext:群友DIY2:2",
                                filter: function (event, player) {
                                    return (event.card.name == 'sha' && get.color(event.card) == 'red')
                                },
                                content: function () {
                                    trigger.cancel();
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target) {
                                            if (card.name == 'sha' && get.color(card) == 'red') return 'zerotarget';
                                        },
                                    },
                                },
                            },
                            "qunyou2022_jinghong": {
                                trigger: {
                                    player: "phaseDiscardBegin",
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseTarget("选择交换手牌的男性角色", function (card, player, target) {
                                        return target.hasSex('male');
                                    });
                                    "step 1"
                                    player.swapHandcards(result.targets[0]);
                                },
                            },

                            //qunyou2022_zhangbiao
                            "qunyou2022_tuijun": {
                                trigger: {
                                    player: "useCardAfter",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.card.name == 'sha' &&
                                        !event.player.hasHistory('sourceDamage', function (evt) {
                                            return evt.card == event.card;
                                        });
                                },
                                content: function () {
                                    trigger.targets.sortBySeat()
                                    for (var i of trigger.targets) {
                                        //i的上家掉血
                                        i.next.damage(1, player);
                                        //i的下家掉血
                                        i.previous.damage(1, player);
                                    }
                                },
                            },
                            "qunyou2022_wuli": {
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return (event.player.getStat('damage') || 0) == 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget('与一名已受伤的角色各摸1张牌', function (card, player, target) {
                                        return target.hp < target.maxHp;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        player.draw();
                                        result.targets[0].draw();
                                    }
                                },
                            },

                            //qunyou2022_re_sunce
                            "qunyou2022_hunshang": {
                                trigger: {
                                    player: ["phaseBefore", "changeHp"],
                                },
                                forced: true,
                                popup: false,
                                init: function (player) {
                                    if (game.online) return;
                                    player.removeAdditionalSkill('qunyou2022_hunshang');
                                    var list = [];
                                    if (player.hp > 2) {
                                        list.push('reyingzi');
                                        list.push('jiang');
                                    }
                                    if (player.hp <= 2) {
                                        list.push('yinghun');
                                        list.push('qianxun');
                                    }
                                    if (list.length > 0) {
                                        player.addAdditionalSkill('qunyou2022_hunshang', list);
                                    }
                                },
                                derivation: ["reyingzi", "jiang", "yinghun", "qianxun"],
                                content: function () {
                                    player.removeAdditionalSkill('qunyou2022_hunshang');
                                    var list = [];
                                    if (player.hp > 2) {
                                        list.push('reyingzi');
                                        list.push('jiang');
                                    }
                                    if (player.hp <= 2) {
                                        list.push('yinghun');
                                        list.push('qianxun');
                                    }
                                    if (list.length > 0) {
                                        player.addAdditionalSkill('qunyou2022_hunshang', list);
                                    }
                                },
                                group: ["qunyou2022_hunshang_add"],
                                subSkill: {
                                    add: {
                                        enable: "phaseUse",
                                        usable: 1,
                                        filter: function (event, player) {
                                            return player.isMaxHandcard(true);
                                        },
                                        position: "he",
                                        filterCard: true,
                                        selectCard: [1, Infinity],
                                        prompt: "弃置任意张牌并摸等量的牌",
                                        check: function (card) {
                                            return 6 - get.value(card)
                                        },
                                        content: function () {
                                            player.draw(cards.length);
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_yingba": {
                                enable: "phaseUse",
                                usable: 1,
                                selectTarget: 1,
                                filterTarget: function (card, player, target) {
                                    return player != target;
                                },
                                content: function () {
                                    'step 0'
                                    target.addTempSkill('qunyou2022_yingba_sub', {
                                        player: 'phaseEnd'
                                    });
                                    var list = ['回复1点体力并弃一张牌', '失去1点体力并摸一张牌'];
                                    var next = player.chooseControl();
                                    next.set('prompt', '英霸：请选择一项');
                                    next.set('choiceList', list);
                                    'step 1'
                                    if (result.control == '选项一') {
                                        player.recover();
                                        player.chooseToDiscard(1, 'he', true);
                                    } else {
                                        player.loseHp();
                                        player.draw();
                                    };
                                },
                                group: ["qunyou2022_yingba_mark", "qunyou2022_yingba_skip", "qunyou2022_yingba_add"],
                                subSkill: {
                                    mark: {
                                        trigger: {
                                            source: "damageSource",
                                        },
                                        preHidden: true,
                                        forced: true,
                                        mark: true,
                                        intro: {
                                            content: "本回合内使用【杀】造成了#点伤害",
                                        },
                                        onremove: true,
                                        filter: function (event, player) {
                                            return event.card && event.card.name == 'sha' && player.isPhaseUsing();
                                        },
                                        content: function () {
                                            player.addMark('qunyou2022_yingba_mark', trigger.num);
                                        },
                                        sub: true,
                                    },
                                    skip: {
                                        trigger: {
                                            player: "phaseDiscardBefore",
                                        },
                                        preHidden: true,
                                        forced: true,
                                        filter: function (event, player) {
                                            return player.countMark('qunyou2022_yingba_mark') >= 2;
                                        },
                                        content: function () {
                                            trigger.cancel();
                                        },
                                        sub: true,
                                    },
                                    add: {
                                        trigger: {
                                            player: "phaseAfter",
                                        },
                                        preHidden: true,
                                        forced: true,
                                        content: function () {
                                            if (player.countMark('qunyou2022_yingba_mark') >= player.maxHp) player.insertPhase();
                                            player.removeMark('qunyou2022_yingba_mark', player.countMark('qunyou2022_yingba_mark'));
                                        },
                                        sub: true,
                                    },
                                    sub: {
                                        charlotte: true,
                                        mark: true,
                                        intro: {
                                            content: "手牌上限-1",
                                        },
                                        mod: {
                                            maxHandcard: function (player, num) {
                                                return num - 1;
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_yuanxi
                            "qunyou2022_zuoshi": {
                                mark: true,
                                marktext: "☯",
                                zhuanhuanji: true,
                                intro: {
                                    content: function (storage, player, skill) {
                                        var str = player.storage.qunyou2022_zuoshi ? "结束阶段，你可以摸两张牌并弃两张牌，然后对一名其他角色造成1点伤害，其视为对与其距离为1的其他角色依次使用一张【杀】。":"出牌阶段开始时，你可以摸"+(player.hp+2)+"张牌；出牌阶段结束时，若你本回合造成伤害值不大于2，你弃置区域内的所有牌。";
                                        return str;
                                    },
                                },
                                group: ["qunyou2022_zuoshi_yin", "qunyou2022_zuoshi_yang"],
                                subSkill: {
                                    "yin": {
                                        audio: "ext:群友DIY/skill/audio:2",
                                        trigger: {
                                            player: "phaseUseBegin",
                                        },
                                        filter: function (event, player) {
                                            return !player.storage.qunyou2022_zuoshi;
                                        },
                                        prompt: function () {
                                            var player=_status.event.player;
                                            return '摸'+(player.hp+2)+'张牌；出牌阶段结束时，若你本回合造成伤害值不大于2，你弃置区域内的所有牌。'
                                        },
                                        content: function () {
                                            player.changeZhuanhuanji('qunyou2022_zuoshi');
                                            var cards = get.cards(player.hp + 2);
                                            player.gain(cards,'gain2').gaintag.add('qunyou2022_zuoshi_uncount');
                                            player.addTempSkill('qunyou2022_zuoshi_lose');
                                            player.addTempSkill('qunyou2022_zuoshi_uncount');
                                        },
                                        sub: true,
                                    },
                                    "yang": {
                                        audio: "ext:群友DIY/skill/audio:2",
                                        trigger: {
                                            player: "phaseJieshuBegin",
                                        },
                                        filter: function (event, player) {
                                            return player.storage.qunyou2022_zuoshi;
                                        },
                                        prompt: function () {
                                            return '摸两张牌并弃两张牌，然后对一名其他角色造成1点伤害，其视为对与其距离为1的其他角色依次使用一张【杀】。'
                                        },
                                        content: function () {
                                            'step 0'
                                            player.changeZhuanhuanji('qunyou2022_zuoshi');
                                            var cards = get.cards(2);
                                            player.gain(cards,'gain2').gaintag.add('qunyou2022_zuoshi_uncount');
                                            player.addTempSkill('qunyou2022_zuoshi_uncount');
                                            player.chooseToDiscard(2, true, 'he');
                                            player.chooseTarget('对一名其他角色造成1点伤害，其视为对与其距离为1的其他角色依次使用一张【杀】。', function (card, player, target) {
                                                return player != target;
                                            }, true);
                                            'step 1'
                                            if (result.bool) {
                                                event.target = result.targets[0];
                                                event.target.damage('nocard');
                                                event.target.useCard({
                                                    name: 'sha'
                                                }, game.filterPlayer(function (current) {
                                                    return get.distance(current, event.target) == 1;
                                                }))
                                            }
                                        },
                                        sub: true,
                                    },
                                    lose: {
                                        charlotte: true,
                                        forced: true,
                                        trigger: {
                                            player: "phaseUseAfter",
                                        },
                                        filter: function (event, player) {
                                            return (event.player.getStat('damage') || 0) < 3;
                                        },
                                        content: function () {
                                            player.discard(player.getCards('hej'));
                                        },
                                        sub: true,
                                    },
                                    uncount: {
                                        onremove: function (player) {
                                            player.removeGaintag('qunyou2022_zuoshi_uncount');
                                        },
                                        mod: {
                                            ignoredHandcard: function (card, player) {
                                                if (card.hasGaintag('qunyou2022_zuoshi_uncount')) {
                                                    return true;
                                                }
                                            },
                                            cardDiscardable: function (card, player, name) {
                                                if (name == 'phaseDiscard' && card.hasGaintag('qunyou2022_zuoshi_uncount')) {
                                                    return false;
                                                }
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_liangna": {
                                audio: "ext:群友DIY/skill/audio:2",
                                trigger: {
                                    target: "useCardToTarget",
                                },
                                direct:true,
                                filter: function (event, player) {
                                    if(player.hasSkill("qunyou2022_liangna_disable")) return false;
                                    var type = get.type(event.card);
                                    return player.countCards('he') >= 2 && ((type == 'basic' || type == 'trick') && get.tag(event.card, 'damage') > 0);
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseToDiscard('he', 2);
                                    "step 1"
                                    if(result.bool){
                                        player.logSkill("qunyou2022_liangna");
                                        var evt = trigger.getParent();
                                        evt.excluded.addArray(evt.targets);
                                    };
                                },
                                group: ["qunyou2022_liangna_get"],
                                subSkill: {
                                    get: {
                                        audio: "ext:群友DIY/skill/audio:2",
                                        trigger: {
                                            player: "phaseJieshuBegin",
                                        },
                                        filter: function (event, player) {
                                            return player.countCards('h') == 0 || player.countCards('e') == 0;
                                        },
                                        content: function () {
                                            'step 0'
                                            if (player.countCards('h') == 0) {
                                                player.draw(2);
                                            }
                                            'step 1'
                                            if (player.countCards('e') == 0) {
                                                var equip = get.discardPile(function (card) {
                                                    return get.type(card) == 'equip' && player.hasUseTarget(card);
                                                });
                                                if (equip) {
                                                    player.chooseUseTarget(equip, 'nothrow', 'nopopup', true);
                                                }
                                            }
                                        },
                                        sub: true,
                                    },
                                    disable:{
                                        mark:true,
                                        intro:{
                                            content:"本回合已发动〖良纳①〗",
                                        },
                                        sub:true,
                                    },
                                },
                            },

                            //qunyou2022_wenqiao
                            "qunyou2022_ranxi": {
                                enable: "phaseUse",
                                usable: 1,
                                filter: function (event, player) {
                                    return player.countCards('he', {
                                        color: 'red'
                                    }) > 0;
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseCard('he', {
                                        color: 'red'
                                    }, true);
                                    'step 1'
                                    if (result.bool) {
                                        player.lose(result.cards, ui.discardPile)
                                        player.$throw(result.cards, 1000);
                                        player.draw();
                                    }
                                    'step 2'
                                    player.chooseTarget("观看一名其他角色的手牌", function (card, player, target) {
                                        return target != player && target.countCards('h') > 0;
                                    })
                                    'step 3'
                                    event.target1 = result.targets[0];
                                    event.list1 = [];
                                    event.list2 = [];
                                    if (player.countCards('h') > 0) {
                                        var chooseButton = player.chooseButton([1, 2], ['你的手牌', player.getCards('h'), get.translation(event.target1.name) + '的手牌', event.target1.getCards('h')]);
                                    } else {
                                        var chooseButton = player.chooseButton([1, 2], [get.translation(event.target1.name) + '的手牌', event.target1.getCards('h')]);
                                    }
                                    chooseButton.set('target', event.target1);
                                    chooseButton.set('filterButton', function (button) {
                                        var type = get.type(button.link);
                                        if (!((type == 'basic' || type == 'trick') && get.tag(button.link, 'damage') > 0)) {
                                            return false;
                                        }
                                        if (ui.selected.buttons.length == 1) {
                                            return get.owner(button.link) == get.owner(ui.selected.buttons[0].link);
                                        }
                                        return true;
                                    });
                                    'step 4'
                                    if (result.bool) {
                                        var list = result.links;
                                        for (var i = 0; i < list.length; i++) {
                                            if (get.owner(list[i]) == player) {
                                                event.list1.push(list[i]);
                                            } else {
                                                event.list2.push(list[i]);
                                            };
                                        };
                                        if (event.list1.length && event.list2.length) {
                                            event.target1.discard(event.list2).delay = false;
                                            player.discard(event.list1);
                                        } else if (event.list2.length) {
                                            event.target1.discard(event.list2);
                                        } else player.discard(event.list1);
                                    };
                                    'step 5'
                                    if (event.list1.length + event.list2.length == 2) {
                                        if (event.list1.length == 0) player.loseHp();
                                        if (event.list1.length == 2) player.recover();
                                    };
                                },
                            },
                            "qunyou2022_hongyi": {
                                trigger: {
                                    player: ["recoverAfter", "loseHpEnd", "damageEnd"],
                                },
                                usable: 1,
                                content: function () {
                                    'step 0'
                                    player.chooseTarget("选择一名其他复原武将牌，并和其各摸一张牌", function (card, player, target) {
                                        return target != player;
                                    })
                                    'step 1'
                                    event.target = result.targets[0];
                                    if (event.target.isTurnedOver()) event.target.turnOver();
                                    if (event.target.isLinked()) {
                                        event.target.link();
                                    }
                                    player.draw();
                                    event.target.draw();
                                    // 'step 2'
                                    // player.addTempSkill('qunyou2022_hongyi_1');
                                },
                            },

                            //qunyou2022_huangwudie
                            "qunyou2022_shifan": {
                                trigger: {
                                    source: "damageSource",
                                },
                                filter: function (event, player) {
                                    return !player.hasSkill('qunyou2022_shifan_2') && event.card && event.card.name == 'sha';
                                },
                                content: function () {
                                    player.addTempSkill('qunyou2022_shifan_2', 'roundStart');
                                    // 获得一个直到其回合结束的判定技能
                                    trigger.player.addTempSkill('qunyou2022_shifan_judge', {
                                        player: 'phaseAfter'
                                    });
                                },
                                subSkill: {
                                    "2": {
                                        sub: true,
                                    },
                                    judge: {
                                        trigger: {
                                            player: "phaseDrawEnd",
                                        },
                                        charlotte: true,
                                        content: function () {
                                            'step 0'
                                            player.judge(function (card) {
                                                if (get.suit(card) == 'spade') return 1;
                                                if (get.suit(card) == 'club') return 2;
                                                return 0;
                                            });
                                            "step 1"
                                            switch (result.judge) {
                                                case 0:
                                                    player.chooseToDiscard('he', 1, true);
                                                    break;
                                                case 1:
                                                    player.loseHp();
                                                    break;
                                                case 2:
                                                    var get_player = game.filterPlayer(function (current) {
                                                        return current.hasSkill('qunyou2022_shifan');
                                                    })[0];
                                                    get_player.gainPlayerCard(player, 'he', true, 1);
                                                    break;
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_hongzhuang": {
                                trigger: {
                                    player: ["useCard", "respond"],
                                },
                                usable: 1,
                                content: function () {
                                    'step 0'
                                    var list = [];
                                    list.push("令一名角色摸一张牌");
                                    // 界曹仁解围的写法
                                    if (player.canMoveCard()) {
                                        list.push("移动场上一张牌");
                                    }
                                    event.list = list;
                                    player.chooseControl()
                                        .set('prompt', get.translation(player) + '发动了红妆，请选择一项')
                                        .set('choiceList', event.list)
                                    'step 1'
                                    if (result.index == 0) {
                                        player.chooseTarget('令一名角色摸一张牌', 1);
                                    } else {
                                        // 界曹仁解围的写法
                                        player.moveCard(true);
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        result.targets[0].draw();
                                    }
                                },
                            },
                            "qunyou2022_sheyi": {
                                mod: {
                                    attackFrom: function (from, to, distance) {
                                        return distance - from.hp;
                                        // 无限是return -Infinity;
                                    },
                                },
                            },

                            //qunyou2022_re_zhanghe
                            "qunyou2022_jixian": {
                                trigger: {
                                    global: "phaseBegin",
                                },
                                filter: function (event, player) {
                                    return event.player != player &&
                                        (player.storage.qunyou2022_jixian_judge ||
                                            player.storage.qunyou2022_jixian_draw ||
                                            player.storage.qunyou2022_jixian_use ||
                                            player.storage.qunyou2022_jixian_discard);
                                },
                                direct: true,
                                init: function (player) {
                                    player.storage.qunyou2022_jixian_judge = true;
                                    player.storage.qunyou2022_jixian_draw = true;
                                    player.storage.qunyou2022_jixian_use = true;
                                    player.storage.qunyou2022_jixian_discard = true;
                                },
                                content: function () {
                                    'step 0'
                                    var list = [];
                                    if (player.storage.qunyou2022_jixian_judge) list.push("判定阶段");
                                    if (player.storage.qunyou2022_jixian_draw) list.push("摸牌阶段");
                                    if (player.storage.qunyou2022_jixian_use) list.push("出牌阶段");
                                    if (player.storage.qunyou2022_jixian_discard) list.push("弃牌阶段");
                                    list.push("cancel2");
                                    player.chooseControl(list).set('prompt', '机先：令其跳过一个阶段')
                                    'step 1'
                                    if (result.control == "cancel2") event.finish();
                                    player.logSkill('qunyou2022_jixian');
                                    switch (result.control) {
                                        case "判定阶段":
                                            trigger.player.skip('phaseJudge');
                                            player.storage.qunyou2022_jixian_judge = false;
                                            break;
                                        case "摸牌阶段":
                                            trigger.player.skip('phaseDraw');
                                            player.storage.qunyou2022_jixian_draw = false;
                                            break;
                                        case "出牌阶段":
                                            trigger.player.skip('phaseUse');
                                            player.storage.qunyou2022_jixian_use = false;
                                            break;
                                        case "弃牌阶段":
                                            trigger.player.skip('phaseDiscard');
                                            player.storage.qunyou2022_jixian_discard = false;
                                            break;
                                    };
                                },
                                group: "qunyou2022_jixian_add",
                                subSkill: {
                                    add: {
                                        trigger: {
                                            global: "dieAfter",
                                        },
                                        filter: function (event, player) {
                                            return event.source && event.source.isAlive() && event.source == player &&
                                                (!player.storage.qunyou2022_jixian_judge ||
                                                    !player.storage.qunyou2022_jixian_draw ||
                                                    !player.storage.qunyou2022_jixian_use ||
                                                    !player.storage.qunyou2022_jixian_discard);
                                        },
                                        content: function () {
                                            'step 0'
                                            var list = [];
                                            if (!player.storage.qunyou2022_jixian_judge) list.push("判定阶段");
                                            if (!player.storage.qunyou2022_jixian_draw) list.push("摸牌阶段");
                                            if (!player.storage.qunyou2022_jixian_use) list.push("出牌阶段");
                                            if (!player.storage.qunyou2022_jixian_discard) list.push("弃牌阶段");
                                            list.push("cancel2");
                                            player.chooseControl(list).set('prompt', '机先：恢复一个阶段')
                                            'step 1'
                                            if (result.control == "cancel2") event.finish();
                                            player.logSkill('qunyou2022_jixian');
                                            switch (result.control) {
                                                case "判定阶段":
                                                    player.storage.qunyou2022_jixian_judge = true;
                                                    break;
                                                case "摸牌阶段":
                                                    player.storage.qunyou2022_jixian_draw = true;
                                                    break;
                                                case "出牌阶段":
                                                    player.storage.qunyou2022_jixian_use = true;
                                                    break;
                                                case "弃牌阶段":
                                                    player.storage.qunyou2022_jixian_discard = true;
                                                    break;
                                            };
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_liubei
                            "qunyou2022_shuangjian": {
                                shaRelated: true,
                                trigger: {
                                    global: "useCard",
                                },
                                filter: function (event, player) {
                                    return event.card.name == 'sha' &&
                                        event.player.getHistory('useCard', function (evt) {
                                            return get.name(evt.card) == 'sha';
                                        }).length == 2 &&
                                        event.player.isPhaseUsing();
                                },
                                content: function () {
                                    trigger.player.draw(2);
                                },
                                group: ["qunyou2022_shuangjian_1"],
                                subSkill: {
                                    "1": {
                                        trigger: {
                                            global: "phaseJieshuBegin",
                                        },
                                        filter: function (event, player) {
                                            if (event.player.getHistory('useCard', function (evt) {
                                                    return get.name(evt.card) == 'sha'
                                                }).length == 0) {
                                                return false;
                                            }
                                            return event.player.getHistory('useCard', function (evt) {
                                                return get.name(evt.card) == 'sha' && get.color(evt.card) != 'red'
                                            }).length == 0
                                        },
                                        content: function () {
                                            trigger.player.draw(2);
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_longzhang": {
                                zhuSkill: true,
                                forced: true,
                                locked: true,
                                trigger: {
                                    global: ["phaseBefore", "dieAter"],
                                    player: ["enterGame", "phaseBegin"],
                                },
                                filter: function (event, player) {
                                    if (!player.hasZhuSkill('jiuyuan')) return false;
                                    return true;
                                },
                                derivation: ["rejijiang", "refangquan"],
                                content: function () {
                                    if (game.filterPlayer(function (current) {
                                            return get.distance(current, player) == 1 && current.group == 'shu';
                                        }).length > 0) {
                                        player.addSkill('rejijiang');
                                    }
                                    if (game.filterPlayer(function (current) {
                                            return player.inRange(current) && current.group == 'shu';
                                        }) == 0) {
                                        player.addSkill('refangquan');
                                    }
                                },
                            },

                            //qunyou2022_suibian
                            "qunyou2022_liushi": {
                                locked: true,
                                forced: true,
                                trigger: {
                                    global: "phaseBefore",
                                    player: "enterGame",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return (event.name != 'phase' || game.phaseNumber == 0);
                                },
                                content: function () {
                                    "step 0"
                                    event.count = player.hp;
                                    "step 1"
                                    event.count--;
                                    "step 2"
                                    if (event.count >= 0) {
                                        player.loseHp();
                                        event.goto(1);
                                    }
                                },
                            },
                            "qunyou2022_fudu": {
                                trigger: {
                                    player: "changeHp",
                                },
                                locked: true,
                                forced: true,
                                content: function () {
                                    var num = game.countPlayer(function (current) {
                                        return current.hp != player.hp;
                                    });
                                    player.draw(num);
                                },
                            },

                            //qunyou2022_sunjun
                            "qunyou2022_xiongyi": {
                                trigger: {
                                    player: "phaseBegin",
                                },
                                forced: true,
                                locked: true,
                                content: function () {
                                    'step 0'
                                    player.loseHp();
                                    'step 1'
                                    player.draw(player.hp);
                                },
                                group: ["qunyou2022_xiongyi_wansha"],
                                subSkill: {
                                    wansha: {
                                        trigger: {
                                            global: "dying",
                                        },
                                        global: "qunyou2022_xiongyi_wansha2",
                                        forced: true,
                                        preHidden: true,
                                        filter: function (event, player, name) {
                                            return _status.currentPhase == player && event.player != player;
                                        },
                                        content: function () {},
                                        sub: true,
                                    },
                                    "wansha2": {
                                        mod: {
                                            cardSavable: function (card, player) {
                                                if (!_status.currentPhase) return;
                                                if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('qunyou2022_xiongyi_wansha') && _status.currentPhase != player) {
                                                    if (card.name == 'tao') return false;
                                                }
                                            },
                                            cardEnabled: function (card, player) {
                                                if (!_status.currentPhase) return;
                                                if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('qunyou2022_xiongyi_wansha') && _status.currentPhase != player) {
                                                    if (card.name == 'tao') return false;
                                                }
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_jiaoli": {
                                trigger: {
                                    player: "dying",
                                },
                                content: function () {
                                    'step 0'
                                    player.loseMaxHp();
                                    player.recover(1 - player.hp);
                                    'step 1'
                                    _status.currentPhase.draw(player.maxHp);
                                },
                            },

                            //qunyou2022_jiangwei
                            "qunyou2022_lianbing": {
                                trigger: {
                                    player: "phaseDrawBefore",
                                },
                                init: function (player) {
                                    if (!player.storage.qunyou2022_lianbing) player.storage.qunyou2022_lianbing = [];
                                },
                                content: function () {
                                    "step 0"
                                    player.skip('phaseDraw');
                                    var list = ["将至多两名其他角色的各一张手牌置于你的武将牌上称为“兵”", "将一名其他角色的一张牌置于你的武将牌上称为“兵”"];
                                    event.list = list;
                                    player.chooseControl()
                                        .set('prompt', get.translation(player) + '发动了【敛兵】，请选择一项')
                                        .set('choiceList', event.list);
                                    "step 1"
                                    if (result.index == 0) {
                                        event.num = 0;
                                    } else {
                                        event.num = 1;
                                    }
                                    "step 2"
                                    player.chooseTarget(get.prompt2('qunyou2022_lianbing'), [1, 2 - event.num], function (card, player, target) {
                                        if (event.num == 0) {
                                            return target.countCards('h') > 0;
                                        } else {
                                            return target.countCards('he') > 0;
                                        }
                                    }, function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                    "step 3"
                                    if (result.bool) {
                                        result.targets.sortBySeat();
                                        player.logSkill('qunyou2022_lianbing', result.targets);
                                        event.targets = result.targets;
                                    } else {
                                        event.finish();
                                    }
                                    "step 4"
                                    if (event.targets.length) {
                                        var target = event.targets.shift();
                                        event.current = target;
                                        if (event.num == 0) {
                                            player.choosePlayerCard(target, 'h', true);
                                        } else {
                                            player.choosePlayerCard(target, true);
                                        }
                                    } else {
                                        player.draw(1);
                                        event.finish();
                                    }
                                    "step 5"
                                    if (result.bool) {
                                        player.storage.qunyou2022_lianbing = player.storage.qunyou2022_lianbing.concat(result.links);
                                        player.markSkill('qunyou2022_lianbing');
                                        player.syncStorage('qunyou2022_lianbing');
                                        event.current.lose(result.links, ui.special, 'toStorage');
                                        event.current.$give(result.links, player, false);
                                        event.goto(4);
                                    }

                                },
                                intro: {
                                    content: "cards",
                                    onunmark: function (storage, player) {
                                        if (storage && storage.length) {
                                            player.$throw(storage, 1000);
                                            game.cardsDiscard(storage);
                                            game.log(storage, '被置入了弃牌堆');
                                            storage.length = 0;
                                        }
                                    },
                                },
                                group: ["qunyou2022_lianbing_nodiscard"],
                                subSkill: {
                                    nodiscard: {
                                        trigger: {
                                            player: "phaseDiscardBefore",
                                        },
                                        preHidden: true,
                                        forced: true,
                                        filter: function (event, player) {
                                            return player.storage.qunyou2022_lianbing.length != 0;
                                        },
                                        content: function () {
                                            trigger.cancel();
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_xianshou": {
                                enable: ["chooseToUse", "chooseToRespond"],
                                hiddenCard: function (player, name) {
                                    if (get.type(name) == 'trick' && lib.inpile.contains(name) && player.storage.qunyou2022_lianbing.length > 1) return true;
                                },
                                filter: function (event, player) {
                                    if (player.storage.qunyou2022_lianbing.length < 2) return false;
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'trick' && event.filterCard({
                                                name: i
                                            }, player, event)) return true;
                                    }
                                    return false;
                                },
                                chooseButton: {
                                    dialog: function (event, player) {
                                        var list = [];
                                        for (var i of lib.inpile) {
                                            if (get.type(i) == 'trick' && event.filterCard({
                                                    name: i
                                                }, player, event)) {
                                                list.push(['锦囊', '', i]);
                                            }
                                        }
                                        return ui.create.dialog('险守', [list, 'vcard'], 'hidden')
                                    },
                                    backup: function (links, player) {
                                        return {
                                            selectCard: -1,
                                            filterCard: function () {
                                                return false
                                            },
                                            viewAs: {
                                                name: links[0][2],
                                                nature: links[0][3],
                                                suit: 'none',
                                                number: null,
                                                isCard: true,
                                            },
                                            precontent: function () {
                                                'step 0'
                                                if (player.storage.qunyou2022_lianbing.length == 2) {
                                                    event.directresult = player.storage.qunyou2022_lianbing.slice(0);
                                                } else {
                                                    player.chooseCardButton('移去两张“逆”', 2, player.storage.qunyou2022_lianbing, true);
                                                }
                                                'step 1'
                                                if (event.directresult || result.bool) {
                                                    var links = event.directresult || result.links;
                                                    for (var i = 0; i < links.length; i++) {
                                                        player.storage.qunyou2022_lianbing.remove(links[i]);
                                                    }
                                                    player.syncStorage('qunyou2022_lianbing');
                                                    player.$throw(links);
                                                    game.log(event.target, '被移去了', links);
                                                    game.cardsDiscard(links);
                                                }
                                                'step 2'
                                                player.draw(1);
                                            },
                                        }
                                    },
                                    prompt: function (links, player) {
                                        var name = links[0][2];
                                        var nature = links[0][3];
                                        return '移去两张"兵"视为使用' + (get.translation(nature) || '') + get.translation(name);
                                    },
                                },
                            },

                            //qunyou2022_zhandisi
                            "qunyou2022_qiangmai": {
                                trigger: {
                                    global: "loseAfter",
                                },
                                filter: function (event, player) {
                                    if (event.player == player) return false;
                                    for (var i = 0; i < event.cards2.length; i++) {
                                        if (get.type(event.cards2[i], event.player) == 'equip' && get.position(event.cards2[i], true) == 'd') {
                                            return true;
                                        }
                                    }
                                    return false;
                                },
                                direct: true,
                                content: function () {
                                    "step 0"
                                    if (trigger.delay == false) game.delay();
                                    "step 1"
                                    var cards = [];
                                    for (var i = 0; i < trigger.cards2.length; i++) {
                                        if (get.type(trigger.cards2[i], trigger.player) == 'equip' && get.position(trigger.cards2[i], true) == 'd') {
                                            cards.push(trigger.cards2[i]);
                                        }
                                    }
                                    if (cards.length) {
                                        player.chooseButton(['强买：选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
                                            return get.value(button.link, _status.event.player, 'raw');
                                        });
                                    }
                                    "step 2"
                                    if (result.bool) {
                                        player.logSkill(event.name);
                                        player.gain(result.links, 'gain2', 'log');
                                    }
                                },
                            },
                            "qunyou2022_qiangmai2": {
                                trigger: {
                                    player: "loseAfter",
                                    global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                                },
                                filter: function (event, player) {
                                    if (player == _status.currentPhase) return false;
                                    var evt = event.getl(player);
                                    return evt && evt.player == player && evt.hs && evt.hs.length > 0;
                                },
                                content: function () {
                                    "step 0"
                                    player.gainPlayerCard(_status.currentPhase, 'he', true);
                                },
                            },

                            //qunyou2022_taotieyoumo
                            "qunyou2022_jingtun": {
                                trigger: {
                                    global: "phaseZhunbeiBegin",
                                },
                                filter: function (event, player) {
                                    if (player == _status.currentPhase) return false;
                                    if (_status.currentPhase.getCards('h').length == 0) return false;
                                    return _status.currentPhase.getCards('h').length <= player.getCards('h').length;
                                },
                                content: function () {
                                    "step 0"
                                    player.storage.qunyou2022_jingtun += 1;
                                    event.cards = get.cards(Math.min(_status.currentPhase.getCards('h').length, 5));
                                    player.chooseButton(['【井吞】：请选择要处理的牌', event.cards], [1, event.cards.length], true).set('cards', event.cards);
                                    "step 1"
                                    if (result.bool) {
                                        event.cards1 = result.links;
                                        var list = ["将这些牌置于牌堆底，然后其弃置你一张牌", "其获得其中的任意张牌、然后该角色交给你—张牌"];
                                        event.list = list;
                                        player.chooseControl()
                                            .set('prompt', get.translation(player) + '发动了【井吞】，请选择一项')
                                            .set('choiceList', event.list);
                                    }
                                    "step 2"
                                    if (result.index == 0) {
                                        for (var i = event.cards.length - 1; i >= 0; i--) {
                                            if (!event.cards1.contains(i)) {
                                                ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
                                            }
                                        }
                                        while (event.cards1.length) ui.cardPile.appendChild(event.cards1.pop().fix());
                                        _status.currentPhase.discardPlayerCard('hej', player, true);
                                        event.goto(4);
                                    } else {
                                        _status.currentPhase.gain(event.cards, 'gain2');
                                        _status.currentPhase.chooseCard('选择还的牌', true, 1, 'he');
                                    }
                                    "step 3"
                                    // target.gain(result.cards,player,'giveAuto');
                                    player.gain(result.cards, _status.currentPhase, 'giveAuto');
                                    "step 4"
                                    player.addTempSkill("xinwuyan", "phaseEnd")
                                },
                            },
                            "qunyou2022_zhouxue": {
                                trigger: {
                                    player: "phaseZhunbeiBegin",
                                },
                                frequent: true,
                                init: function (player) {
                                    game.log("初始化井吞");
                                    if (!player.storage.qunyou2022_jingtun) player.storage.qunyou2022_jingtun = 0;
                                },
                                content: function () {
                                    game.log("井吞" + player.storage.qunyou2022_jingtun);
                                    player.draw(1 + player.storage.qunyou2022_jingtun, 'bottom')
                                },
                            },

                            //qunyou2022_simazhi
                            "qunyou2022_renhui": {
                                trigger: {
                                    player: "loseAfter",
                                },
                                direct: true,
                                filter: function (event, player) {
                                    return player != _status.currentPhase && event.name == 'lose';
                                },
                                content: function () {
                                    "step 0"
                                    event.count = trigger.num;
                                    "step 1"
                                    event.count--;
                                    var list = ["令一名角色回复1点体力", "令一名角色摸1张牌"];
                                    player.chooseControl(["选项一", "选项二", "cancel2"])
                                        .set('prompt', get.translation(player) + '仁惠：请选择一项')
                                        .set('choiceList', list);
                                    "step 2"
                                    if (result.control == "cancel2") event.finish();
                                    event.control == result.control;
                                    var str = (event.control == "选项一") ? "令一名角色回复1点体力" : "令一名角色摸1张牌";
                                    player.chooseTarget(str, true).set('ai', function (target) {
                                        if (!target.isDamaged() && event.control == "选项一") return 0;
                                        return get.attitude(player, target) + 0.5;
                                    });
                                    "step 3"
                                    if (result.bool && result.targets) {
                                        player.logSkill("qunyou2022_renhui", result.targets[0]);
                                        if (event.control == "选项一") {
                                            result.targets[0].recover();
                                        } else {
                                            result.targets[0].draw();
                                        }
                                    }
                                    "step 4"
                                    if (event.count > 0) {
                                        event.goto(1);
                                    }
                                },
                            },
                            "qunyou2022_minxin": {
                                usable: 1,
                                trigger: {
                                    global: "recoverAfter",
                                },
                                filter: function (event, player) {
                                    return event.player != player;
                                },
                                content: function () {
                                    "step 0"
                                    trigger.player.draw(2);
                                    "step 1"
                                    var next = trigger.player.chooseCard('he', [1, Infinity], '选择要交给' + get.translation(player) + '的牌');
                                    next.set("ai", function (card) {
                                        if (get.attitude(trigger.player, player) < 0) return 0;
                                        if (trigger.player == _status.currentPhase) return 0;
                                        if (trigger.player.countCards('h') < trigger.player.hp) return 8 - get.value(card);
                                    });
                                    "step 2"
                                    if (result.cards.length) {
                                        player.gain(result.cards, player);
                                        trigger.player.$give(result.cards.length, player);
                                    }
                                    "step 3"
                                    player.chooseToDiscard(1, 'he', true);
                                },
                            },

                            //qunyou2022_langxiongdi
                            "qunyou2022_shangjin": {
                                trigger: {
                                    player: "phaseZhunbeiBegin",
                                },
                                forced: true,
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt('qunyou2022_shangjin'), true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                    "step 1"
                                    if (result.bool && result.targets && result.targets.length) {
                                        event.player1 = result.targets[0];
                                    }
                                    player.judge(function (card) {
                                        return get.color(card) == 'red' ? -1 : 1;
                                    });
                                    "step 2"
                                    if (result.color == 'red') {
                                        player.gain(result.card);
                                        event.player1.addTempSkill('qunyou2022_shangjin_temp');
                                    } else {
                                        event.player1.damage('nocard');
                                    }
                                },
                                group: ["qunyou2022_shangjin_distance","qunyou2022_shangjin_addsha"],
                                subSkill: {
                                    distance: {
                                        mod: {
                                            globalFrom: function (from, to) {
                                                if (to.hasSkill('qunyou2022_shangjin_temp')) return 1;
                                            },
                                        },
                                        sub: true,
                                    },
                                    temp: {
                                        mark: true,
                                        intro: {
                                            content: "已成为〖赏金〗目标",
                                        },
                                        sub: true,
                                    },
                                    addsha: {
                                        mod: {
                                            cardUsable: function (card, player, num) {
                                                if (card.name == 'sha') {
                                                    return num + player.maxHp - player.hp;
                                                }
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_shishou": {
                                trigger: {
                                    player: "damageBegin1",
                                },
                                content: function () {
                                    "step 0"
                                    player.judge(function (card) {
                                        return get.color(card) == 'red' ? -1 : 1;
                                    });
                                    "step 1"
                                    player.gain(result.card);
                                    if (result.color == 'red') {
                                        trigger.num++;
                                    } else {
                                        trigger.num--;
                                    }
                                },
                            },

                            //qunyou2022_jingxiang_zhangjiao
                            "qunyou2022_sanhe": {
                                forced: true,
                                trigger: {
                                    source: "damageSource",
                                    player: "damageEnd",
                                },
                                marktext: "合",
                                intro: {
                                    "name2": "三合",
                                    content: "mark",
                                },
                                content: function () {
                                    'step 0'
                                    player.addMark("qunyou2022_sanhe");
                                    player.chooseTarget(get.prompt2('qunyou2022_sanhe'), true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        var hs = target.countCards('h');
                                        var ht = target.maxHp;
                                        if (hs >= ht && target.isMaxHandcard()) return -att * hs;
                                        if (hs < ht && game.hasPlayer(function (current) {
                                                return current.countCards('h') > ht;
                                            })) return att * 2 * (ht - hs);
                                        return 0;
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        var target = result.targets[0];
                                        target.draw(Math.min(3, target.maxHp - target.countCards('h')))
                                    }
                                },
                                group: "qunyou2022_sanhe_add",
                                subSkill: {
                                    add: {
                                        mod: {
                                            maxHandcard: function (player, num) {
                                                return num + player.countCards("qunyou2022_sanhe");
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                                ai: {
                                    expose: 0.2,
                                    maixie: true,
                                    "maixie_hp": true,
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'damage') && target.hp > 1) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                var max = 0;
                                                var players = game.filterPlayer();
                                                for (var i = 0; i < players.length; i++) {
                                                    if (get.attitude(target, players[i]) > 0) {
                                                        max = Math.max(Math.min(5, players[i].hp) - players[i].countCards('h'), max);
                                                    }
                                                }
                                                switch (max) {
                                                    case 0:
                                                        return 2;
                                                    case 1:
                                                        return 1.5;
                                                    case 2:
                                                        return [1, 2];
                                                    default:
                                                        return [0, max];
                                                }
                                            }
                                            if ((card.name == 'tao' || card.name == 'caoyao') &&
                                                target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
                                        },
                                    },
                                },
                            },
                            "qunyou2022_cedian": {
                                enable: "phaseUse",
                                usable: 1,
                                filterCard: true,
                                position: "he",
                                selectCard: 1,
                                filter: function (event, player) {
                                    return player.countCards('he');
                                },
                                content: function () {
                                    "step 0"
                                    "step 1"
                                    event.num = cards[0].number;
                                    "step 2"
                                    if (event.num > 3) {
                                        player.draw();
                                    }
                                    "step 3"
                                    if (event.num > 7) {
                                        player.recover();
                                        player.chooseTarget("弃置一名角色一张牌", function (card, player, target) {
                                            return player != target && target.countCards('he') > 0;
                                        }).set('autodelay', trigger.name == 'respond' ? 0.5 : 1).ai = function (target) {
                                            return -get.attitude(player, target);
                                        };
                                    }
                                    "step 4"
                                    if (result.bool) {
                                        player.discardPlayerCard(result.targets[0], true);
                                    }
                                    "step 5"
                                    if (event.num > 10) {
                                        player.chooseTarget("对一名角色造成一点雷电伤害").ai = function (target) {
                                            var bool = get.attitude(player, target) > 0;
                                            return get.damageEffect(target, player, player, 'thunder') - (bool ? 1 : 0);
                                        };
                                    }
                                    "step 6"
                                    if (result.bool) {
                                        game.delay(0.5);
                                        var target = result.targets[0];
                                        target.damage('thunder');
                                    }
                                    "step 7"
                                    if (event.num > 10) {
                                        player.moveCard();
                                    }
                                },
                            },

                            //qunyou2022_re_guohuai
                            "qunyou2022_jingce": {
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                frequent: true,
                                count: function () {
                                    var num = 0;
                                    game.countPlayer2(function (current) {
                                        current.getHistory('lose', function (evt) {
                                            if (evt.position == ui.discardPile) {
                                                for (var i = 0; i < evt.cards.length; i++) {
                                                    num++;
                                                }
                                            }
                                        })
                                    });
                                    game.getGlobalHistory('cardMove', function (evt) {
                                        if (evt.name == 'cardsDiscard') {
                                            for (var i = 0; i < evt.cards.length; i++) {
                                                num++;
                                            }
                                        }
                                    })
                                    return num;
                                },
                                content: function () {
                                    'step 0'
                                    var num = lib.skill.qunyou2022_jingce.count();
                                    if (num >= player.hp) {
                                        player.draw(Math.min(num, 4));
                                    }
                                    'step 1'
                                    if (player.getStat('damage') > 1 && player.getStat('damage') != player.hp) {
                                        var list = ["执行一个额外的出牌阶段", "对一名其他角色造成1点伤害"];
                                        event.list = list;
                                        player.chooseControl()
                                            .set('prompt', get.translation(player) + '发动了【精策】，请选择一项')
                                            .set('choiceList', event.list);
                                    } else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.index == 0) {
                                        var next = player.phaseUse();
                                        event.next.remove(next);
                                        trigger.next.push(next);
                                    } else {
                                        player.chooseTarget("对一名其他角色造成1点伤害", function (card, player, target) {
                                            return target != player;
                                        }).ai = function (target) {
                                            var bool = get.attitude(player, target) > 0;
                                            return get.damageEffect(target, player, player, 'thunder') - (bool ? 1 : 0);
                                        };
                                    }
                                    'step 3'
                                    if (result.bool && result.targets && result.targets.length) {
                                        result.targets[0].damage();
                                    }
                                },
                            },

                            //qunyou2022_bolilingmeng
                            "qunyou2022_tuizhi": {
                                trigger: {
                                    player: ["useCard", "respond"],
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return Array.isArray(event.respondTo) && event.player == player;
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt('qunyou2022_tuizhi'), function (card, player, target) {
                                        return target.countCards('he') > 0;
                                    }).set('autodelay', trigger.name == 'respond' ? 0.5 : 1).ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                    "step 1"
                                    if (result.bool) {
                                        player.logSkill('qunyou2022_tuizhi', result.targets);
                                        player.discardPlayerCard(result.targets[0], true);
                                        if (result.targets[0].hp == result.targets[0].maxHp) {
                                            result.targets[0].damage('nocard');
                                        }
                                    }
                                },
                                group: "qunyou2022_tuizhi_damaged",
                                subSkill: {
                                    damaged: {
                                        trigger: {
                                            player: "damageEnd",
                                        },
                                        frequent: true,
                                        filter: function (event, player) {
                                            return event.source && event.num > 0;
                                        },
                                        content: function () {
                                            "step 0"
                                            event.count = trigger.num;
                                            "step 1"
                                            event.count--;
                                            player.chooseTarget(get.prompt('qunyou2022_tuizhi'), function (card, player, target) {
                                                return target.countCards('he') > 0;
                                            }).ai = function (target) {
                                                return -get.attitude(player, target);
                                            };
                                            "step 2"
                                            if (result.bool) {
                                                player.logSkill('qunyou2022_tuizhi', result.targets);
                                                player.discardPlayerCard(result.targets[0], true);
                                                if (result.targets[0].hp == result.targets[0].maxHp) {
                                                    result.targets[0].damage('nocard');
                                                }
                                            }
                                            "step 3"
                                            if (result.bool && event.count > 0) event.goto(1);
                                        },
                                        sub: true,
                                    },
                                },
                                ai: {
                                    "maixie_defend": true,
                                    effect: {
                                        target: function (card, player, target) {
                                            if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                                if (get.attitude(target, player) < 0) return [1, 1];
                                            }
                                        },
                                    },
                                },
                            },
                            "qunyou2022_youxian": {
                                round: 1,
                                forced: true,
                                trigger: {
                                    player: "useCardToPlayered",
                                },
                                filter: function (event, player) {
                                    return player != event.target;
                                },
                                content: function () {
                                    player.draw(2);
                                    trigger.target.draw(1);
                                },
                                group: ["qunyou2022_youxian_roundcount"],
                            },

                            //qunyou2022_shihuan
                            "qunyou2022_fagu": {
                                usable: 1,
                                trigger: {
                                    global: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return event.player.isAlive() && (event.player.isMaxHandcard(false) || event.player.isMaxHp(false));
                                },
                                content: function () {
                                    'step 0'
                                    event.Damagedtarget = trigger.player;
                                    event.Damagedtarget.damage();
                                    player.discardPlayerCard(event.Damagedtarget, 'he');
                                    'step 1'
                                    if (result.bool) {
                                        if (get.type(result.cards[0]) == 'basic') {
                                            event.Damagedtarget.damage();
                                        }
                                    }
                                },
                            },
                            "qunyou2022_jieliang": {
                                trigger: {
                                    global: "gainAfter",
                                },
                                round: 1,
                                filter: function (event, player) {
                                    if (event.parent.parent.name == 'phaseDraw') return false;
                                    if (event.player == player) return false;
                                    return event.cards && event.cards.length > 0;
                                },
                                content: function () {
                                    'step 0'
                                    trigger.player.give(trigger.cards, player);
                                    if (trigger.cards.length > 1) {
                                        trigger.player.damage('fire');
                                        player.loseHp();
                                    }
                                },
                                group: ["qunyou2022_jieliang_roundcount"],
                            },

                            //qunyou2022_huzhao
                            "qunyou2022_chengfu": {
                                marktext: "赋",
                                intro: {
                                    content: "expansion",
                                    markcount: "expansion",
                                },
                                trigger: {
                                    global: "phaseBefore",
                                    player: "enterGame",
                                },
                                forced: true,
                                locked: false,
                                filter: function (event, player) {
                                    return (event.name != 'phase' || game.phaseNumber == 0) && !player.getExpansions('qunyou2022_chengfu').length;
                                },
                                content: function () {
                                    'step 0'
                                    player.draw(1);
                                    'step 1'
                                    if (!player.countCards('h')) event.finish();
                                    else player.chooseCard('h', '将一张手牌置于武将牌上，称为“赋”', true).set('ai', function (card) {
                                        return 6 - get.value(card);
                                    });
                                    'step 2'
                                    if (result.bool) {
                                        player.addToExpansion(result.cards[0], player, 'give', 'log').gaintag.add('qunyou2022_chengfu');
                                    };
                                },
                                onremove: function (player, skill) {
                                    var cards = player.getExpansions(skill);
                                    if (cards.length) player.loseToDiscardpile(cards);
                                },
                            },
                            "qunyou2022_liyin": {
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                forced: true,
                                preHidden: true,
                                filter: function (event, player) {
                                    if (player == _status.currentPhase) return false;
                                    if (get.suit(event.card) != get.suit(player.getExpansions('qunyou2022_chengfu')[0])) return false;
                                    if (get.tag(event.card, 'damage')) return false;
                                    if (get.type(event.card, false) != 'trick') return false;
                                    return true;
                                },
                                content: function () {
                                    trigger.getParent().excluded.add(player);
                                    player.draw();
                                },
                            },
                            "qunyou2022_shuzhi": {
                                enable: ["chooseToUse"],
                                usable: 1,
                                init: function (player) {
                                    if (!player.storage.qunyou2022_shuzhi) player.storage.qunyou2022_shuzhi = [];
                                    if (!player.storage.qunyou2022_shuzhi_draw) player.storage.qunyou2022_shuzhi_draw = false;
                                },
                                filter: function (event, player) {
                                    if (!player.countCards('h', {
                                            type: 'basic'
                                        })) return false;
                                    for (var name of lib.inpile) {
                                        if (get.type(name) != 'trick') continue;
                                        if (get.tag(name, 'damage')) continue;
                                        if (event.filterCard({
                                                name: name,
                                                isCard: true
                                            }, player, event)) return true;
                                    }
                                    return false;
                                },
                                hiddenCard: function (player, name) {
                                    if (name == 'wuxie') return player.countCards('h', {
                                        type: 'basic'
                                    }) > 0;
                                },
                                chooseButton: {
                                    dialog: function (event, player) {
                                        var list = [];
                                        for (var i of lib.inpile) {
                                            if (get.tag({
                                                    name: i
                                                }, 'damage')) {
                                                continue;
                                            }
                                            if (get.type(i) == 'trick' && event.filterCard({
                                                    name: i,
                                                    isCard: true
                                                }, player, event)) list.push(['锦囊', '', i]);
                                        }
                                        return ui.create.dialog('书志', [list, 'vcard']);
                                    },
                                    check: function (button) {
                                        return _status.event.player.getUseValue({
                                            name: button.link[2],
                                            isCard: true
                                        });
                                    },
                                    backup: function (links, player) {
                                        var bol = true;
                                        for (var i of player.storage.qunyou2022_shuzhi) {
                                            if (i == links[0][2]) {
                                                bol = false;
                                            }
                                        }
                                        if (bol) {
                                            player.storage.qunyou2022_shuzhi.push(links[0][2]);
                                        }
                                        game.log(get.translation(player.storage.qunyou2022_shuzhi));
                                        return {
                                            viewAs: {
                                                name: links[0][2],
                                                isCard: true,
                                            },
                                            filterCard: () => false,
                                            selectCard: -1,
                                            popname: true,
                                            precontent: function () {
                                                'step 0'
                                                player.chooseCard('h', {
                                                    type: 'basic'
                                                }, true)
                                                'step 1'
                                                player.gain(player.getExpansions('qunyou2022_chengfu')[0], 'gain2');
                                                player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('qunyou2022_chengfu');
                                                player.storage.qunyou2022_shuzhi_draw = true;
                                            },
                                        }
                                    },
                                    prompt: function (links, player) {
                                        return '请选择' + get.translation(links[0][2]) + '的目标';
                                    },
                                },
                                group: "qunyou2022_shuzhi_draw",
                                subSkill: {
                                    draw: {
                                        prompt: "使一名角色将手牌摸至X张（X为你本局游戏因此法使用过的牌名数）",
                                        trigger: {
                                            player: "useCardAfter",
                                        },
                                        preHidden: true,
                                        forced: true,
                                        filter: function (event, player) {
                                            return player.storage.qunyou2022_shuzhi_draw;
                                        },
                                        content: function () {
                                            'step 0'
                                            player.storage.qunyou2022_shuzhi_draw = false;
                                            player.chooseTarget("选择一名角色补到" + player.storage.qunyou2022_shuzhi.length + "张").set('ai', function (target) {
                                                return get.attitude(player, target) + 0.5;
                                            });
                                            'step 1'
                                            if (result.bool) {
                                                var max = player.storage.qunyou2022_shuzhi.length;
                                                var num = max - result.targets[0].countCards('h');
                                                result.targets[0].draw(num);
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_wujie
                            "qunyou2022_dilie": {
                                trigger: {
                                    player: "damageEnd",
                                },
                                content: function () {
                                    "step 0"
                                    trigger.source.turnOver();
                                },
                            },
                            "qunyou2022_tianbeng": {
                                trigger: {
                                    source: "damageSource",
                                },
                                filter:function(event,player){
                                    return !event.player.hasSkill("qunyou2022_tianbeng_baigei");
                                },
                                forced: true,
                                locked: true,
                                content: function () {
                                    "step 0"
                                    trigger.player.addSkill("qunyou2022_tianbeng_baigei");
                                },
                                group:"qunyou2022_tianbeng_damage",
                                subSkill: {
                                    damage:{
                                        trigger: {
                                            global: "phaseBefore",
                                        },
                                        forced: true,
                                        locked: true,
                                        preHidden: true,
                                        content: function () {
                                            event.targets=game.filterPlayer(function(current){
                                                return current.hasSkill("qunyou2022_tianbeng_baigei");
                                            });
                                            for(var i of event.targets) i.damage();
                                        },
                                        sub: true,
                                    },
                                    baigei: {
                                        charlotte:true,
                                        mark:true,
                                        intro:{
                                            content:function(storage,player){
                                                var source=game.filterPlayer(function(current){
                                                    return current.hasSkill("qunyou2022_tianbeng");
                                                });
                                                return "一名角色的回合开始时，你受到来自"+get.translation(source)+"的1点伤害";
                                            },
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_tuteng": {
                                trigger: {
                                    global: "phaseBegin",
                                },
                                forced: true,
                                locked: true,
                                filter: function (event, player) {
                                    return _status.currentPhase != player;
                                },
                                content: function () {
                                    "step 0"
                                    trigger.player.judge(function (card) {
                                        if (get.suit(card) == 'heart') return -2;
                                        if (get.suit(card) == 'club') return 1;
                                        if (get.suit(card) == 'diamond') return 2;
                                        if (get.suit(card) == 'spade') return 3;
                                        return 2;
                                    }).judge2 = function (result) {
                                        return result.bool;
                                    };
                                    "step 1"
                                    if (result.judge > 0) {
                                        trigger.player.skip('phaseZhunbei');
                                        trigger.player.skip('phaseJudge');
                                        trigger.player.skip('phaseDraw');
                                    }
                                    if (result.judge > 1) {
                                        trigger.player.skip('phaseUse');
                                    }
                                    if (result.judge > 2) {
                                        trigger.player.skip('phaseDiscard');
                                        trigger.player.skip('phaseJieshu');
                                        trigger.player.turnOver();
                                    }
                                },
                            },

                            //qunyou2022_xiahoushi
                            "qunyou2022_yanyu": {
                                audio: "ext:群友DIY/qudio/skill:2",
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    return player.countCards('h') > 0;
                                },
                                filterCard: true,
                                position: "h",
                                prepare: function (cards, player) {
                                    player.$throw(cards, 1000);
                                    if (get.name(cards[0]) != 'sha') {
                                        player.storage.discard = true;
                                    } else {
                                        player.storage.discard = false;
                                    }
                                    game.log(player, '将', cards, '置入了弃牌堆');
                                },
                                discard: false,
                                loseTo: "discardPile",
                                visible: true,
                                delay: 0.5,
                                content: function () {
                                    player.draw();
                                    if (player.storage.discard) {
                                        player.chooseToDiscard('he', 1, true);
                                    }
                                },
                                group: "qunyou2022_yanyu_2",
                                subSkill: {
                                    "2": {
                                        trigger: {
                                            player: "phaseUseEnd",
                                        },
                                        direct: true,
                                        filter: function (event, player) {
                                            return player.getHistory('lose', function (evt) {
                                                var evt2 = evt.getParent();
                                                return evt2.name == 'useSkill' && evt2.skill == 'qunyou2022_yanyu' && evt.getParent(3) == event;
                                            }).length > 0;
                                        },
                                        content: function () {
                                            'step 0'
                                            event.num = Math.min(3, player.getHistory('lose', function (evt) {
                                                var evt2 = evt.getParent();
                                                return evt2.name == 'useSkill' && evt2.skill == 'qunyou2022_yanyu' && evt.getParent(3) == trigger;
                                            }).length);
                                            player.chooseTarget(get.prompt('reyanyu'), '令一名男性角色摸' + get.cnNumber(event.num) + '张牌', function (card, player, target) {
                                                return target.hasSex('male') && target != player;
                                            }).set('ai', function (target) {
                                                return get.attitude(_status.event.player, target);
                                            });
                                            'step 1'
                                            if (result.bool) {
                                                player.logSkill('qunyou2022_yanyu', result.targets);
                                                result.targets[0].draw(event.num);
                                                if (player.isMinHandcard()) {
                                                    player.draw(event.num);
                                                }
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_qiaoshi": {
                                trigger: {
                                    global: "phaseJieshuBegin",
                                },
                                filter: function (event, player) {
                                    return event.player != player && event.player.countCards('h') <= player.countCards('h') && event.player.isAlive();
                                },
                                logTarget: "player",
                                content: function () {
                                    'step 0'
                                    if (trigger.player.countCards('h') == player.countCards('h')) {
                                        game.asyncDraw([trigger.player, player]);
                                        event.finish();
                                    } else if (trigger.player.countCards('h') < player.countCards('h')) {
                                        player.chooseToDiscard('h', 1, true);
                                    }
                                    'step 1'
                                    if (result.bool) {
                                        trigger.player.chooseCard('h', {
                                            type: 'basic'
                                        }).set('ai', function (card) {
                                            if (get.name(card) == 'sha') {
                                                return 100;
                                            }
                                            return get.value(card);
                                        });
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        trigger.player.give(result.cards, player, true);
                                        if (get.name(result.cards[0]) == 'sha') {
                                            trigger.player.draw();
                                        }
                                    }
                                },
                            },

                            //qunyou2022_gesi
                            "qunyou2022_kuangzhan": {
                                trigger: {
                                    source: "damageSource",
                                },
                                intro: {
                                    content: "mark",
                                },
                                direct: true,
                                content: function () {
                                    player.addMark('qunyou2022_kuangzhan');
                                    player.logSkill('qunyou2022_kuangzhan');
                                    player.chooseToUse({
                                        prompt: '狂战：是否使用一张【杀】？',
                                        filterCard: function (card, player) {
                                            if (get.name(card) != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        addCount: false,
                                    });
                                },
                            },
                            "qunyou2022_xianji": {
                                trigger: {
                                    player: "phaseAfter",
                                },
                                forced: true,
                                content: function () {
                                    if (!player.countMark('qunyou2022_kuangzhan')) player.loseHp(player.hp);
                                    else {
                                        if (player.hp > player.countMark('qunyou2022_kuangzhan')) player.loseHp(player.hp - player.countMark('qunyou2022_kuangzhan'));
                                        else if (player.hp < player.countMark('qunyou2022_kuangzhan')) player.recover(player.countMark('qunyou2022_kuangzhan') - player.hp);
                                        player.removeMark('qunyou2022_kuangzhan', player.countMark('qunyou2022_kuangzhan'));
                                    };
                                },
                                group: "qunyou2022_xianji_add",
                                subSkill: {
                                    add: {
                                        trigger: {
                                            player: "useCard2",
                                        },
                                        forced: true,
                                        filter: function (event) {
                                            return event.card && event.card.name == 'sha';
                                        },
                                        content: function () {
                                            trigger.baseDamage += player.countMark("qunyou2022_kuangzhan");
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_tenggongzhu
                            "qunyou2022_lianli": {
                                enable: "phaseUse",
                                filter: function (event, player) {
                                    // 回合发动某个技能次数的标准写法，适用于使用次数不定的场合
                                    // 注意player.getStat('skill').qunyou2022_lianli可能不能正常识别，需要手动添加
                                    var num = player.getStat('skill').qunyou2022_lianli || 0;
                                    if (player.countCards('he') == 0) return false;
                                    if (player.storage.lianli) {
                                        return num < 1 + player.storage.lianli;
                                    } else {
                                        return num < 1;
                                    }
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseToDiscard('he', 1, true);
                                    'step 1'
                                    player.storage.discard = get.type(result.cards[0]);
                                    var list = [];
                                    list.push('摸两张类型不同的牌');
                                    list.push('与一名角色一起回复一点体力');
                                    event.list = list;
                                    player.chooseControl()
                                        .set('prompt', get.translation(player) + '发动了连理，请选择一项')
                                        .set('choiceList', event.list)
                                    'step 2'
                                    if (result.index == 0) {
                                        event.cards = [];
                                        for (var i = 0; i < 2; i++) {
                                            event.card = get.cardPile(function (card) {
                                                if (event.cards.contains(card)) return false;
                                                if (get.type(card, 'trick') != player.storage.discard) return true;
                                                return false;
                                            }, 'cardPile');
                                            if (!event.card) {
                                                break;
                                            }
                                            event.cards.push(event.card);
                                        }
                                        player.gain(event.cards, 'gain2');
                                        event.finish();
                                    } else {
                                        player.chooseTarget(1, true);
                                    }
                                    'step 3'
                                    if (result.bool) {
                                        player.recover();
                                        result.targets[0].recover();
                                    }

                                },
                                group: ["qunyou2022_lianli_add", "qunyou2022_lianli_key"],
                                subSkill: {
                                    add: {
                                        trigger: {
                                            player: ["damageBegin3", "recoverAfter"],
                                        },
                                        frequent: true,
                                        content: function () {
                                            if (!player.storage.add) player.storage.add = 0;
                                            player.storage.add += 1;
                                            if (player.storage.add > 4) player.storage.add = 4;
                                        },
                                        sub: true,
                                    },
                                    key: {
                                        trigger: {
                                            player: "phaseUseBegin",
                                        },
                                        preHidden: true,
                                        forced: true,
                                        content: function () {
                                            if (!player.storage.add) player.storage.add = 0;
                                            player.storage.lianli = player.storage.add;
                                            player.storage.add = 0;
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_dianpei2": {
                                trigger: {
                                    player: "damageBegin3",
                                },
                                forced: true,
                                frequent: true,
                                content: function () {
                                    'step 0'
                                    player.chooseControl(['basic', 'trick', 'equip'])
                                        // .set('choiceList',['basic','trick','equip'])
                                        .set('ai', function () {
                                            // var player=_status.event.player;
                                            // if(!player.hasShan()) return 'basic';
                                            // if(player.countCards('e')<=1) return 'equip';
                                            // if(player.countCards('h')>2) return 'trick';
                                            return 0;
                                        });
                                    'step 1'
                                    game.log(result.index);
                                    event.discard_type = result.control;
                                    game.log(event.discard_type);
                                    if (trigger.source) {
                                        trigger.source.chooseToDiscard('he', 2, function (card) {
                                            if (get.type(card, 'trick') == event.discard_type) return true;
                                            return false;
                                        }).set('ai', function (card) {
                                            if (get.recoverEffect(_status.event.getParent().player, _status.event.player, _status.event.player) < 0) {
                                                return 100 - get.value(card);
                                            }
                                            return 0;
                                        })
                                    } else {
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        event.finish();
                                    } else {
                                        player.recover();
                                        event.card = get.cardPile(function (card) {
                                            if (get.type(card, 'trick') == event.discard_type) return true;
                                            return false;
                                        }, 'cardPile');
                                        if (!event.card) {
                                            event.finish();
                                        }
                                        trigger.source.gain(event.card, 'gain2');
                                    }
                                },
                            },

                            //qunyou2022_tengyin
                            "qunyou2022_xiujie": {
                                trigger: {
                                    player: "useCardEnd",
                                },
                                init: function (player) {
                                    if (!player.storage.xiujie1) player.storage.xiujie1 = [];
                                },
                                mark: true,
                                intro: {
                                    content: function (storage, player, skill) {
                                        var str = get.translation(player.storage.xiujie1[0]) + '和' + get.translation(player.storage.xiujie1[1]);
                                        return str;
                                    },
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    if (player.storage.xiujie1.length == 0) {
                                        return false;
                                    }
                                    var type = get.type(event.card, 'trick');
                                    var type1 = player.storage.xiujie1[0];
                                    var suit = get.suit(event.card);
                                    var suit1 = player.storage.xiujie1[1];
                                    // game.log(player.storage.xiujie[0],type,type1,suit,suit1);
                                    // player.syncStorage('xiujie');
                                    game.log(type, type1, suit, suit1);
                                    return type != type1 && suit != suit1;
                                },
                                content: function () {
                                    'step 0'
                                    player.syncStorage('xiujie')
                                    // game.log(player.storage.xiujie[0])
                                    player.chooseTarget('将' + get.translation(trigger.cards) + '交给一名其他角色并摸一张牌', function (card, player, target) {
                                        return target != player;
                                    }).set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att < 3) return 0;
                                        if (target.hasJudge('lebu')) att /= 2;
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        return att / (1 + get.distance(player, target, 'absolute'));
                                    });
                                    'step 1'
                                    if (result.bool) {
                                        result.targets[0].gain(trigger.cards, 'log', 'gain2');
                                        player.draw();
                                    }
                                    'step 2'
                                    var stat = player.getStat('skill');
                                    if (!stat.xiujie) stat.xiujie = 0;
                                    stat.xiujie += 1;
                                    game.log(stat.xiujie);
                                },
                                group: ["qunyou2022_xiujie_replace"],
                                subSkill: {
                                    replace: {
                                        forced: true,
                                        charlotte: true,
                                        preHidden: true,
                                        trigger: {
                                            player: "useCardAfter",
                                        },
                                        content: function () {
                                            if (player.storage.xiujie1.length == 0) {
                                                player.storage.xiujie1.push(get.type(trigger.card, 'trick'));
                                                player.storage.xiujie1.push(get.suit(trigger.cards));
                                                // player.syncStorage('xiujie');
                                                return false;
                                            }
                                            player.storage.xiujie1.remove(player.storage.xiujie1[0]);
                                            player.storage.xiujie1.remove(player.storage.xiujie1[0]);
                                            player.storage.xiujie1.push(get.type(trigger.card, 'trick'));
                                            player.storage.xiujie1.push(get.suit(trigger.cards));
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_zhongjian": {
                                enable: "phaseUse",
                                usable: 2,
                                filter: function (event, player) {
                                    // 可以改为限两次的方法
                                    return (!player.getStat('skill').qunyou2022_zhongjian) || player.getStat('skill').xiujie >= 3;
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseTarget("选择交换手牌的角色");
                                    "step 1"
                                    player.swapHandcards(result.targets[0]);
                                    result.targets[0].chooseControl().set('choiceList', [
                                        '掉血',
                                        '回血',
                                    ]).set('ai', function () {
                                        if (get.attitude(result.targets[0], player) > 0) return 1;
                                        return 0;
                                    });
                                    "step 2"
                                    if (result.index == 0) {
                                        player.loseHp();
                                    } else {
                                        player.recover();
                                    }
                                },
                            },

                            //qunyou2022_huanfuren
                            "qunyou2022_cailan": {
                                usable: 2,
                                trigger: {
                                    global: "loseAfter",
                                },
                                filter: function (event, player) {
                                    if (!(event.type == 'discard' && event.player.isAlive() && event.hs && event.hs.filterInD('d').length)) {
                                        return false;
                                    }
                                    if (_status.currentPhase != event.player) {
                                        return true;
                                    }
                                    return !(_status.event.name == 'phaseDiscard' || _status.event.getParent('phaseDiscard').name == 'phaseDiscard');
                                },
                                content: function () {
                                    'step 0'
                                    event.cards = trigger.hs.filterInD('d');
                                    player.chooseButton(["是否发动【采兰】，返回一张牌，并摸一张牌", event.cards]).set('ai', function (button) {
                                        var card = button.link;
                                        var source = _status.event.source;
                                        if (get.attitude(player, source) > 0) return Math.max(1, source.getUseValue(card, null, true));
                                        var cards = _status.event.getParent().cards.slice(0);
                                        if (cards.length == 1) return -get.value(card);
                                        cards.remove(card);
                                        return (get.value(cards) - get.value(card) - 2);
                                    }).set('source', trigger.player).setHiddenSkill(event.name);
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('qunyou2022_cailan', trigger.player);
                                        trigger.player.gain(result.links[0], 'gain2');
                                        player.draw();
                                    }
                                },
                            },
                            "qunyou2022_xunxu": {
                                usable: 1,
                                trigger: {
                                    global: "dying",
                                },
                                filter: function (event, player) {
                                    return event.player.hp <= 0;
                                },
                                derivation:"qunyou2022_huaer",
                                content: function () {
                                    'step 0'
                                    var num = player.countCards('h');
                                    player.discard(player.getCards('h'), true);
                                    player.draw(num);
                                    'step 1'
                                    if (player.countCards('h', 'tao') + player.countCards('h', 'jiu') > 0) {
                                        trigger.player.recover(1);
                                    }
                                    'step 2'
                                    if (!trigger.player.isDying()) {
                                        player.awakenSkill('qunyou2022_xunxu');
                                        player.addSkill('qunyou2022_huaer');
                                    }
                                },
                            },
                            "qunyou2022_huaer": {
                                trigger: {
                                    global: "damageEnd",
                                },
                                filter: function (event, player) {
                                    // 回合发动某个技能次数的标准写法，适用于使用次数不定的场合
                                    var num = player.getStat('skill').qunyou2022_huaer || 0;
                                    if (player.countCards('h') < event.player.hp) return false;
                                    if (!event.player.isIn()) return false;
                                    if (player.storage.xunxu) {
                                        return num < 1 + player.storage.xunxu;
                                    } else {
                                        return num < 1;
                                    }
                                },
                                content: function () {
                                    'step 0'
                                    if (!player.getStat('skill').qunyou2022_huaer) player.getStat('skill').qunyou2022_huaer = 0;
                                    player.getStat('skill').qunyou2022_huaer += 1;
                                    event.hpnum = trigger.player.hp;
                                    'step 1'
                                    player.chooseToDiscard('h', event.hpnum, true);
                                    player.draw(event.hpnum);
                                    if (player.countCards('h', 'tao') + player.countCards('h', 'jiu') > 0) {
                                        var list = ["目标角色回复一点体力", "你摸一张牌"];
                                        event.list = list;
                                        player.chooseControl()
                                            .set('prompt', get.translation(player) + '发动了【华尔】，请选择一项')
                                            .set('choiceList', event.list)
                                    } else {
                                        player.storage.xunxu = 1;
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.index == 0) {
                                        trigger.player.recover(1);
                                    } else {
                                        player.draw(1);
                                    }
                                },
                            },

                            //qunyou2022_caoyu
                            "qunyou2022_yanchu": {
                                trigger: {
                                    player: "loseAfter",
                                },
                                forced: true,
                                locked: true,
                                filter: function (event, player) {
                                    return event.type == 'discard';
                                },
                                content: function () {
                                    'step 0'
                                    var cards = [];
                                    for (var i = 0; i < trigger.cards2.length; i++) {
                                        if (get.position(trigger.cards2[i], true) == 'd') {
                                            cards.push(trigger.cards2[i]);
                                        }
                                    }
                                    while (cards.length) ui.cardPile.appendChild(cards.pop().fix());
                                    'step 1'
                                    if (trigger.cards2.length >= 2) {
                                        player.draw();
                                    }
                                    'step 2'
                                    if (trigger.cards2.length >= 4) {
                                        player.maxHp += 1;
                                        var list = ["令所有其他角色弃一张牌", "令所有其他角色受到一点无来源伤害"];
                                        event.list = list;
                                        player.chooseControl()
                                            .set('prompt', get.translation(player) + '发动了【燕褚】，请选择一项')
                                            .set('choiceList', event.list)
                                    } else {
                                        event.finish()
                                    }
                                    'step 3'
                                    if (result.index == 0) {
                                        game.countPlayer(function (current) {
                                            if (current != player && current != trigger.player) {
                                                current.chooseToDiscard('he', 1, true);
                                            }
                                        });
                                    } else {
                                        game.countPlayer(function (current) {
                                            if (current != player && current != trigger.player) {
                                                current.damage('nosource', 'nocard');
                                            }
                                        });
                                    }
                                },
                            },
                            "qunyou2022_fenggong": {
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                content: function () {
                                    'step 0'
                                    player.chooseTarget('你指定一名角色,其下个出牌阶段开始时,弃置所有牌,之后将手牌摸至五张')
                                    'step 1'
                                    if (result.bool && result.targets) {
                                        result.targets[0].addSkill('qunyou2022_fenggong_draw');
                                    }
                                },
                                subSkill: {
                                    draw: {
                                        trigger: {
                                            player: "phaseUseBegin",
                                        },
                                        forced: true,
                                        preHidden: true,
                                        charlotte: true,
                                        content: function () {
                                            'step 0'
                                            player.discard(player.getCards('he'));
                                            'step 1'
                                            player.drawTo(5);
                                            'step 2'
                                            player.removeSkill('qunyou2022_fenggong_draw');
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_chunaizhanshen
                            "qunyou2022_fuai": {
                                trigger: {
                                    global: "gameStart",
                                },
                                forced: true,
                                init: function (player) {
                                    if (!player.storage.airen) player.storage.airen = player;
                                },
                                filter: function (event, player) {
                                    return game.hasPlayer(function (current) {
                                        return current.hasSex('female');
                                    });
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt2('qunyou2022_fuai'), 1, true, function (card, player, target) {
                                        return target.hasSex('female');
                                    })
                                    "step 1"
                                    if (result.bool) {
                                        player.storage.airen = result.targets[0];
                                        console.log("爱上" + get.translation(player.storage.airen))
                                    }
                                },
                                group: ["qunyou2022_fuai_draw", "qunyou2022_fuai_recover"],
                                subSkill: {
                                    draw: {
                                        trigger: {
                                            player: "gainAfter",
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            if (player.storage.airen == player) return false;
                                            if (!player.storage.airen.isIn()) return false;
                                            if (event.parent.parent.name == 'phaseDraw') return true;
                                            return event.cards && event.cards.length > 0
                                        },
                                        content: function () {
                                            "step 0"
                                            player.chooseCard('h', '交给' + get.translation(player.storage.airen) + '一张牌', true).set('ai', function (card) {
                                                return 5 - get.value(card);
                                            });
                                            "step 1"
                                            if (result.bool) {
                                                player.storage.airen.gain(result.cards, player, 'give');
                                            };
                                        },
                                        sub: true,
                                    },
                                    recover: {
                                        trigger: {
                                            player: "recoverEnd",
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            if (player.storage.airen == player) return false;
                                            return true;
                                        },
                                        content: function () {
                                            player.storage.airen.recover(trigger.num);
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_shenwei": {
                                trigger: {
                                    player: "damageBegin",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.source && event.source.hasSex('male')
                                },
                                content: function () {
                                    "step 0"
                                    player.loseMaxHp(1);
                                    trigger.source.loseMaxHp(1);
                                },
                            },
                            "qunyou2022_hanlie": {
                                trigger: {
                                    player: "damageEnd",
                                },
                                forced: true,
                                marktext: "爱",
                                intro: {
                                    "name2": "爱的伤疤",
                                    content: "爱的伤疤化作力量",
                                },
                                filter: function (event, player) {
                                    if (player.storage.airen == player) return false;
                                    return event.source == player.storage.airen;
                                },
                                content: function () {
                                    player.addMark("qunyou2022_hanlie");
                                },
                                group: ["qunyou2022_hanlie_draw", "qunyou2022_hanlie_sha", "qunyou2022_hanlie_binsi", "qunyou2022_hanlie_damaged"],
                                subSkill: {
                                    draw: {
                                        trigger: {
                                            player: "phaseDrawBegin2",
                                        },
                                        forced: true,
                                        preHidden: true,
                                        content: function () {
                                            trigger.num += player.countMark('qunyou2022_hanlie');
                                        },
                                        sub: true,
                                    },
                                    sha: {
                                        trigger: {
                                            source: "damageBegin",
                                        },
                                        forced: true,
                                        preHidden: true,
                                        filter: function (event, player) {
                                            return event.card && event.card.name == 'sha';
                                        },
                                        content: function () {
                                            trigger.num += player.countMark('qunyou2022_hanlie');
                                        },
                                        mod: {
                                            attackRange: function (player, num) {
                                                return num + player.countMark('qunyou2022_hanlie');
                                            },
                                            cardUsable: function (card, player, num) {
                                                if (card.name == 'sha') return num + player.countMark('qunyou2022_hanlie');
                                            },
                                            selectTarget: function (card, player, range) {
                                                if (card.name == 'sha' && range[1] != -1) {
                                                    range[1] += player.countMark('qunyou2022_hanlie');
                                                }
                                            },
                                        },
                                        sub: true,
                                    },
                                    binsi: {
                                        trigger: {
                                            player: "dying",
                                        },
                                        forced: true,
                                        filter: function (event, player) {
                                            if (player.storage.airen == player) return false;
                                            return event.source == player.storage.airen;
                                        },
                                        content: function () {
                                            console.log("纯爱战神伤心透顶，化身白马");
                                            player.addSkill('qunyou2022_hanlie_si');
                                        },
                                        sub: true,
                                    },
                                    si: {
                                        sub: true,
                                    },
                                    damaged: {
                                        trigger: {
                                            source: "damageBegin1",
                                        },
                                        forced: true,
                                        preHidden: true,
                                        filter: function (event, player) {
                                            return player.hasSkill('qunyou2022_hanlie_si');
                                        },
                                        content: function () {
                                            trigger.num++;
                                        },
                                        sub: true,
                                    },
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (player == target.storage.airen) {
                                                if (get.tag(card, 'damage')) {
                                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                    if (!target.hasFriend()) return;
                                                    var num = 1;
                                                    if (get.attitude(player, target) > 0) {
                                                        if (player.needsToDiscard()) {
                                                            num = 0.7;
                                                        } else {
                                                            num = 0.5;
                                                        }
                                                    }
                                                    if (player.hp >= 4) return [1, num * 2];
                                                    if (target.hp == 3) return [1, num * 1.5];
                                                    if (target.hp == 2) return [1, num * 0.5];
                                                }
                                            }
                                        },
                                    },
                                },
                            },

                            //qunyou2022_zibaoerhao
                            "qunyou2022_hengzhi": {
                                audio: "ext:群友DIY/audio/skill:2",
                                trigger: {
                                    player: "damageBegin2",
                                    source: "damageBegin1",
                                },
                                direct: true,
                                filter:function(event,player){
                                    return event.notLink();
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseTarget(get.prompt('qunyou2022_hengzhi')).set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) * (target.isDamaged() ? 2 : 1);
                                    });
                                    "step 1"
                                    if (result.bool) {
                                        result.targets[0].link();
                                        player.logSkill("qunyou2022_hengzhi");
                                    };
                                },
                                group:"qunyou2022_hengzhi_link",
                                subSkill:{
                                    'link':{
                                        trigger:{
                                            player:['linkBefore','enterGame'],
                                            global:'phaseBefore',
                                        },
                                        forced:true,
                                        filter:function(event,player){
                                            if(event.name=='link') return player.isLinked();
                                            return (event.name!='phase'||game.phaseNumber==0)&&!player.isLinked();
                                        },
                                        content:function(){
                                            if(trigger.name!='link') player.link(true);
                                            else trigger.cancel();
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_zibao": {
                                enable: "phaseUse",
                                content: function () {
                                    "step 0"
                                    player.damage(player);
                                },
                                group:"qunyou2022_zibao_fire",
                                subSkill:{
                                    'fire':{ 
                                        trigger:{player:'damageBefore'},
                                        forced:true,
                                        charlotte:true,
                                        filter:function(event,player){
                                            return event.nature!='fire';
                                        },
                                        content:function(){
                                            trigger.nature='fire';
                                        },
                                        sub: true,
                                    },
                                },
                            },

                            //qunyou2022_longcuigongzhu
                            "qunyou2022_hongyun": {
                                trigger: {
                                    global: "judgeEnd",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    // 非自己的非自己回合的角色才会false
                                    if (event.player != player) {
                                        if (_status.currentPhase != player) {
                                            return false;
                                        }
                                    }
                                    return event.result.color == 'red';
                                },
                                content: function () {
                                    player.draw(2);
                                },
                            },
                            "qunyou2022_dianpei": {
                                trigger: {
                                    player: "loseAfter",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    return player != _status.currentPhase && event.name == 'lose';
                                },
                                content: function () {
                                    'step 0'
                                    var next = player.judge(function (card) {
                                        if (get.color(card) == 'black') return -1;
                                        return 1;
                                    });
                                    next.judge2 = function (result) {
                                        return result.bool;
                                    };
                                    'step 1'
                                    if (result.judge == 1) {
                                        player.chooseTarget('请选择1名角色回复1点体力', 1, function (card, player, target) {
                                            return target.isDamaged();
                                        }).set('ai', function (target) {
                                            return get.attitude(player, target) + 0.5;
                                        });
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        result.targets[0].recover(1);
                                    }
                                },
                            },
                            "qunyou2022_jiying": {
                                zhuSkill: true,
                                trigger: {
                                    global: "damageEnd",
                                },
                                filter: function (event, player) {
                                    return event.player && event.player.isIn() && event.player != player && event.player.hasSex('female');
                                },
                                check: function (event, player) {
                                    return get.attitude(event.player, player) > 0;
                                },
                                content: function () {
                                    'step 0'
                                    game.log(trigger.player + '交给' + get.translation(player) + '一张牌');
                                    trigger.player.chooseCard('h', true, '交给' + get.translation(player) + '一张牌').set('ai', function (card) {
                                        var player = _status.event.player;
                                        var target = _status.event.getParent().player;
                                        if (get.attitude(player, target) > 0) {
                                            if (!target.hasShan() && card.name == 'shan') return 10;
                                            if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts') && target.hasUseTarget(card)) return 10 - get.value(card);
                                            return 6 - get.value(card);
                                        }
                                        return -get.value(card);
                                    });;
                                    'step 1'
                                    if (result.bool) {
                                        player.gain(result.cards, trigger.player, 'giveAuto');
                                    } else event.finish();
                                    'step 2'
                                    game.log(player + '交给' + get.translation(trigger.player) + '一张牌');
                                    player.chooseCard('he', true, '交给' + get.translation(trigger.player) + '一张牌');
                                    'step 3'
                                    if (result.bool) {
                                        trigger.player.gain(result.cards, player, 'giveAuto');
                                    } else event.finish();
                                },
                            },

                            //qunyou2022_zixushangren
                            "qunyou2022_yuyan": {
                                trigger: {
                                    player: "phaseZhunbeiBegin",
                                },
                                init: function (player) {
                                    if (!player.storage.qunyou2022_yuyan) player.storage.qunyou2022_yuyan = 'red';
                                },
                                content: function () {
                                    "step 0"
                                    player.chooseControl(['red', 'black']).set('ai', function () {
                                        return 'red';
                                    });
                                    "step 1"
                                    event.cards = get.cards(1);
                                    player.showCards(event.cards);
                                    player.storage.qunyou2022_yuyan = result.control;
                                    if (get.color(event.cards[0]) != result.control) {
                                        player.addTempSkill("qunyou2022_yuyan_draw_less");
                                    } else {
                                        player.addTempSkill("qunyou2022_yuyan_draw_more");
                                    }
                                },
                                subSkill: {
                                    "draw_less": {
                                        trigger: {
                                            player: "phaseDrawBegin",
                                        },
                                        silent: true,
                                        filter: function (event) {
                                            return event.num > 0;
                                        },
                                        content: function () {
                                            trigger.num--;
                                        },
                                        sub: true,
                                        forced: true,
                                        popup: false,
                                    },
                                    "draw_more": {
                                        trigger: {
                                            player: "phaseDrawBegin",
                                        },
                                        silent: true,
                                        filter: function (event) {
                                            return event.num > 0;
                                        },
                                        content: function () {
                                            trigger.num = 5;
                                        },
                                        sub: true,
                                        forced: true,
                                        popup: false,
                                    },
                                },
                            },
                            "qunyou2022_xianzhi": {
                                usable: 1,
                                enable: "phaseUse",
                                filterTarget: function (card, player, target) {
                                    return target != player && target.countCards('h');
                                },
                                content: function () {
                                    "step 0"
                                    var cards = target.getCards('h');
                                    event.dialog = ui.create.dialog(get.translation(target) + '的手牌', cards);
                                    player.chooseBool("获得所有" + get.translation(player.storage.qunyou2022_yuyan) + "牌");
                                    "step 1"
                                    if (event.dialog) event.dialog.close();
                                    if (result.bool) {
                                        var cards = target.getCards('h').filter(function (card) {
                                            return get.color(card) == player.storage.qunyou2022_yuyan;
                                        });
                                        player.gain(cards, target, 'giveAuto', 'bySelf');
                                    }
                                },
                            },
                            "qunyou2022_fuluan": {
                                limited: true,
                                unique: true,
                                enable: "phaseUse",
                                skillAnimation: true,
                                selectTarget: 2,
                                multitarget: true,
                                intro: {
                                    content: "limited",
                                },
                                filter: function (event, player) {
                                    return game.players.length > 1;
                                },
                                filterTarget: function (card, player, target) {
                                    return true;
                                },
                                content: function () {
                                    "step 0"
                                    player.awakenSkill('qunyou2022_fuluan');
                                    var info = lib.character[targets[0].name];
                                    var skills = targets[0].getSkills();
                                    var list1 = [],
                                        list2 = [];
                                    for (var i = 0; i < info[3].length; i++) {
                                        if (lib.skill[info[3][i]].fixed) continue;
                                        if (skills.contains(info[3][i])) {
                                            list1.push(info[3][i]);
                                            list2.push(get.translation(info[3][i]) + "：" + get.translation(info[3][i] + "_info"));
                                        }
                                    }
                                    if (list1.length) {
                                        var next = player.chooseControl(list1);
                                        next.set("prompt", "请选择" + get.translation(targets[0]) + "要交换的技能");
                                        next.set("choiceList", list2);
                                        next.set("displayIndex", false);
                                    }
                                    "step 1"
                                    if (result.control) {
                                        event.skill1 = result.control;
                                        targets[0].popup(event.skill1);
                                        targets[0].disableSkill('qunyou2022_fuluan', event.skill1, true);
                                    };
                                    "step 2"
                                    var info = lib.character[targets[1].name];
                                    var skills = targets[1].getSkills();
                                    var list1 = [],
                                        list2 = [];
                                    for (var i = 0; i < info[3].length; i++) {
                                        if (lib.skill[info[3][i]].fixed) continue;
                                        if (skills.contains(info[3][i])) {
                                            list1.push(info[3][i]);
                                            list2.push(get.translation(info[3][i]) + "：" + get.translation(info[3][i] + "_info"));
                                        }
                                    }
                                    if (list1.length) {
                                        var next = player.chooseControl(list1);
                                        next.set("prompt", "请选择" + get.translation(targets[1]) + "要交换的技能");
                                        next.set("choiceList", list2);
                                        next.set("displayIndex", false);
                                    }
                                    "step 3"
                                    if (result.control) {
                                        event.skill2 = result.control;
                                        targets[1].popup(event.skill2);
                                        targets[1].disableSkill('qunyou2022_fuluan', event.skill2, true);
                                    };
                                    "step 4"
                                    if (event.skill2) targets[0].addSkill(event.skill2);
                                    if (event.skill1) targets[1].addSkill(event.skill1);
                                },
                                mark: true,
                                init: function (player, skill) {
                                    player.storage[skill] = false;
                                },
                            },

                            //qunyou2022_sunnichang
                            "qunyou2022_wuxian": {
                                trigger: {
                                    global: "gainAfter",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    if (event.player == player) return false;
                                    if (_status.currentPhase == event.player) return false;
                                    return true;
                                },
                                content: function () {
                                    player.draw(1);
                                },
                            },
                            "qunyou2022_xianming": {
                                trigger: {
                                    player: "useCardToPlayered",
                                    target: "useCardToTargeted",
                                },
                                filter: function (event, player) {
                                    return event.card.name == 'guohe' || event.card.name == 'shunshou';
                                },
                                content: function () {
                                    if (trigger.target == player) {
                                        trigger.getParent().excluded.add(player);
                                        if (trigger.card.name == 'guohe') {
                                            trigger.player.useCard({
                                                name: 'shunshou'
                                            }, player);
                                        } else {
                                            trigger.player.useCard({
                                                name: 'guohe'
                                            }, player);
                                        }
                                    } else {
                                        trigger.getParent().excluded.add(trigger.target);
                                        if (trigger.card.name == 'guohe') {
                                            trigger.player.useCard({
                                                name: 'shunshou'
                                            }, trigger.target);
                                        } else {
                                            trigger.player.useCard({
                                                name: 'guohe'
                                            }, trigger.target);
                                        }
                                    }
                                },
                            },

                            //qunyou2022_zhangxi
                            "qunyou2022_yizun": {
                                audio: "ext:群友DIY/audio/skill:2",
                                mark: true,
                                marktext: "☯",
                                zhuanhuanji: true,
                                intro:{
                                    content:function(storage,player){
                                        if (player.storage.qunyou2022_yizun) var str = '阳：结束阶段，你可以令一名角色将手牌弃至与场上手牌数最少的角色相同（至多弃5张）。';
                                        else var str = '阴：准备阶段，你可以令一名角色将手牌摸至与场上手牌数最多的角色相同（至多摸5张）。';
                                        str += '若其以此法获得或弃置了5张牌，你加一点体力上限、回复一点体力并复原〖卫汉〗。';
                                        return str;
                                    },
                                },
                                group: ["qunyou2022_yizun_1", "qunyou2022_yizun_2"],
                                subSkill: {
                                    "1": {
                                        trigger: {
                                            player: "phaseZhunbeiBegin",
                                        },
                                        filter: function (event, player) {
                                            return !player.storage.qunyou2022_yizun;
                                        },
                                        direct:true,
                                        content: function () {
                                            'step 0'
                                            player.changeZhuanhuanji('qunyou2022_yizun');
                                            player.chooseTarget("令一名角色将手牌摸至与场上手牌数最多的角色相同（至多摸5张)").set('ai', function (target) {
                                                return get.attitude(player, target);
                                            });
                                            'step 1'
                                            if (result.bool) {
                                                player.logSkill("qunyou2022_yizun",result.targets[0]);
                                                var max = player.countCards('h');
                                                game.countPlayer(function (current) {
                                                    var nh = current.countCards('h');
                                                    if (nh > max) {
                                                        max = nh;
                                                    }
                                                });
                                                event.num = Math.min(max - result.targets[0].countCards('h'), 5);
                                                result.targets[0].draw(event.num);
                                            }
                                            "step 2"
                                            if (event.num == 5) {
                                                player.gainMaxHp();
                                                player.recover();
                                                player.restoreSkill("qunyou2022_weihan");
                                            }
                                        },
                                        sub: true,
                                    },
                                    "2": {
                                        trigger: {
                                            player: "phaseJieshuBegin",
                                        },
                                        filter: function (event, player) {
                                            return player.storage.qunyou2022_yizun;
                                        },
                                        direct:true,
                                        content: function () {
                                            "step 0"
                                            player.changeZhuanhuanji('qunyou2022_yizun');
                                            player.chooseTarget("令一名角色将手牌弃至与场上手牌数最少的角色相同（至多弃5张）").set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                            "step 1"
                                            if (result.bool) {
                                                player.logSkill("qunyou2022_yizun",result.targets[0]);
                                                var min = player.countCards('h');
                                                game.countPlayer(function (current) {
                                                    var nh = current.countCards('h');
                                                    if (nh < min) {
                                                        min = nh;
                                                    }
                                                });
                                                event.num = Math.min(result.targets[0].countCards('h') - min, 5);
                                                result.targets[0].chooseToDiscard('h', true, event.num);
                                            }
                                            "step 2"
                                            if (event.num == 5) {
                                                player.gainMaxHp();
                                                player.recover();
                                                player.restoreSkill("qunyou2022_weihan");
                                            }
                                        },
                                        sub: true,
                                    },
                                },
                            },
                            "qunyou2022_weihan": {
                                audio: "ext:群友DIY/audio/skill:2",
                                enable: "phaseUse",
                                limited: true,
                                unique: true,
                                skillAnimation: true,
                                mark: true,
                                intro: {
                                    content: "limited",
                                },
                                init: function (player, skill) {
                                    player.storage[skill] = false;
                                },
                                filterTarget: function (card, player, target) {
                                    return player != target && target.countCards('h') > 0;
                                },
                                filterCard:true,
                                selectCard:[1,3],
                                position:'he',
                                content: function () {
                                    "step 0"
                                    player.awakenSkill('qunyou2022_weihan');
                                    event.count = cards.length;
                                    "step 1"
                                    if (!target.countCards('h')) event.finish();
                                    event.trigger('playercontrol');
                                    "step 2"
                                    event.clickControl=function(link,type){
                                        if(link=='cancel2') event.finish();
                                            var currentname;
                                            if(type=='ai'){
                                                currentname=event.currentname;
                                            }
                                            else{
                                                currentname=event.dialog.querySelector('.selected.button').link;
                                            };
                                            event.control1=link;
                            
                                            if(event.dialog&&event.dialog.buttons){
                                                for(var i=0;i<event.dialog.buttons.length;i++){
                                                    if(event.dialog.buttons[i].classList.contains('selected')){
                                                        event.cards=event.dialog.buttons[i].link;
                                                        break;
                                                    }
                                                }
                                            }
                                        
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                    };
                                    var cards = target.getCards('h');
                                    event.dialog = ui.create.dialog(get.translation(target) + '的手牌', cards);
                                    event.control=ui.create.control(['cancel2']);
                                    event.control.custom=event.clickControl;
                                    event.control.replaceTransition=false;
                                    game.pause();
                                    for(var i=0;i<event.dialog.buttons.length;i++){
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    event.custom.replace.button=function(button){
                                        if(button.classList.contains('selected')){
                                            button.classList.remove('selected');
                                            event.control.replace(['cancel2']);
                                        }
                                        else{
                                            for(var i=0;i<event.dialog.buttons.length;i++){
                                                event.dialog.buttons[i].classList.remove('selected');
                                            }
                                            button.classList.add('selected');
                                            event.control.replace(['对其使用', '弃置']);
                                            event.control.style.opacity=1;
                                        }
                                        event.control.custom=event.clickControl;
                                    }
                                    event.custom.replace.window=function(){
                                        for(var i=0;i<event.dialog.buttons.length;i++){
                                            if(event.dialog.buttons[i].classList.contains('selected')){
                                                event.dialog.buttons[i].classList.remove('selected');
                                                event.control.replace(['cancel2']);
                                                event.control.custom=event.clickControl;
                                                return;
                                            }
                                        }
                                    }
                                    "step 3"
                                    if (event.control1 == '对其使用') player.useCard(event.cards, target, false);
                                    if (event.control1 == '弃置') target.discard(event.cards);
                                    if (--event.count > 0) event.goto(1);
                                },
                            },

                        },
                        translate: {
                            // 武将部分
                            "qunyou2022_luxun1": "陆逊一号",
                            "qunyou2022_luxun2": "陆逊二号",
                            "qunyou2022_yangfu": "杨阜",
                            "qunyou2022_liuba": "刘巴",
                            "qunyou2022_dengzhi": "邓芝",
                            "qunyou2022_lijueguosi": "李傕郭汜",
                            "qunyou2022_jinhuansanjie": "金环三结",
                            "qunyou2022_wangyun": "王允",
                            "qunyou2022_yuejiyuanshuai": "越吉元帅",
                            "qunyou2022_midangdawang": "迷当大王",
                            "qunyou2022_mengyue": "梦月",
                            "qunyou2022_sijiyingji": "四季映姬",
                            "qunyou2022_sp_linghu": "SP铃瑚",
                            "qunyou2022_mengjie": "孟节",
                            "qunyou2022_dongtuna": "董荼那",
                            "qunyou2022_mizhu": "糜竺",
                            "qunyou2022_jinxianggongzhu": "金乡公主",
                            "qunyou2022_laoba": "老八",
                            "qunyou2022_pengtuo": "彭脱",
                            "qunyou2022_sp_xuchu": "SP许褚",
                            "qunyou2022_sp_shen_liubei": "SP神刘备",
                            "qunyou2022_xiaoqiao": "小乔",
                            "qunyou2022_zhangbiao": "张表",
                            "qunyou2022_re_sunce": "界孙策",
                            "qunyou2022_yuanxi": "袁熙",
                            "qunyou2022_wenqiao": "温峤",
                            "qunyou2022_huangwudie": "黄舞蝶",
                            "qunyou2022_re_zhanghe": "界张郃",
                            "qunyou2022_liubei": "桃园刘备",
                            "qunyou2022_suibian": "随便",
                            "qunyou2022_sunjun": "孙峻",
                            "qunyou2022_jiangwei": "姜维",
                            "qunyou2022_zhandisi": "詹迪斯",
                            "qunyou2022_taotieyoumo": "饕餮尤魔",
                            "qunyou2022_simazhi": "司马直",
                            "qunyou2022_bolilingmeng": "博丽灵梦",
                            "qunyou2022_langxiongdi": "狼兄弟",
                            "qunyou2022_jingxiang_zhangjiao": "张角",
                            "qunyou2022_re_guohuai": "郭淮",
                            "qunyou2022_shihuan": "史涣",
                            "qunyou2022_huzhao": "胡昭",
                            "qunyou2022_wujie": "无界",
                            "qunyou2022_xiahoushi": "夏侯氏",
                            "qunyou2022_gesi": "格斯",
                            "qunyou2022_tenggongzhu": "滕公主",
                            "qunyou2022_tengyin": "滕胤",
                            "qunyou2022_huanfuren": "环夫人",
                            "qunyou2022_caoyu": "曹宇",
                            "qunyou2022_chunaizhanshen": "纯爱战神",
                            "qunyou2022_zibaoerhao": "自爆二号",
                            "qunyou2022_longcuigongzhu": "龙翠公主",
                            "qunyou2022_zixushangren": "紫虚上人",
                            "qunyou2022_sunnichang": "孙霓裳",
                            "qunyou2022_zhangxi": "张喜",



                            // 技能部分

                            //qunyou2022_luxun1
                            "qunyou2022_qianxun1": "谦逊",
                            "qunyou2022_qianxun1_info": "锁定技，你跳过判定阶段和摸牌阶段",
                            "qunyou2022_lianying1": "连营",
                            "qunyou2022_lianying1_info": "锁定技，每当你失去牌时，你摸一张牌",

                            //qunyou2022_luxun2
                            "qunyou2022_qianxun2": "谦逊",
                            "qunyou2022_qianxun2_info": "判定阶段开始时，你可以跳过判定阶段，然后跳过摸牌阶段",
                            "qunyou2022_lianying2": "连营",
                            "qunyou2022_lianying2_info": "锁定技，你的回合内，每当你失去牌时，你摸一张牌",

                            //qunyou2022_yangfu
                            "qunyou2022_feiqu": "匪躯",
                            "qunyou2022_feiqu_info": "出牌阶段开始时，你可以与一名其他角色拼点。若你赢，你令其选择一项：1、直到其回合结束，当你的牌于进入弃牌堆时，其须弃置一张与你弃置牌类型相同的牌（无相同类型则不弃）；2、直到其回合结束，其手牌上限-X（X为你本回合进入弃牌堆的总牌数）。若你没赢，你视为使用一张【决斗】。",
                            "qunyou2022_yjian": "衣谏",
                            "qunyou2022_yjian_info": "每回合每名角色限一次，当一名角色失去最后的手牌时，你可以令其摸两张牌并交给你一张牌。然后若此时处于你的回合外，你可以对一名角色使用一张【杀】。",
                            "qunyou2022_qianmou": "潜谋",
                            "qunyou2022_qianmou_info": "当你造成伤害后，你可以摸一张牌并弃一张牌。",

                            //qunyou2022_liuba
                            "qunyou2022_pingjia": "平价",
                            "qunyou2022_pingjia_info": "出牌阶段限一次，你可以获得一名角色至多2张牌，然后在你的出牌阶段结束交给其等量的牌。",
                            "qunyou2022_qinggao": "清高",
                            "qunyou2022_qinggao_info": "锁定技，其他角色于其回合内使用的第一张牌对你无效。",

                            //qunyou2022_dengzhi
                            "qunyou2022_yaomeng": "邀盟",
                            "qunyou2022_yaomeng_info": "出牌阶段限一次，你可以与一名角色拼点，赢者摸三张牌，没赢者摸一张牌。",
                            "qunyou2022_wenbing": "稳兵",
                            "qunyou2022_wenbing_info": "一名角色的回合结束时，若此回合你的手牌数没有变动，你可以令当前回合角色摸一张牌。",

                            //qunyou2022_lijueguosi
                            "qunyou2022_fuzuo": "覆祚",
                            "qunyou2022_fuzuo_info": "出牌阶段限一次，你可以令所有角色视为使用一张不计入次数限制的【杀】，当你以此法成为【杀】的目标后，你摸两张牌。",

                            //qunyou2022_jinhuansanjie
                            "qunyou2022_xunliao": "獯獠",
                            "qunyou2022_xunliao_info": "出牌阶段限一次，你可以选择一项：1、失去1点体力并视为使用一张无距离与次数限制的【杀】；2、失去1点体力上限并视为使用一张单目标锦囊牌；3、翻面并视为使用一张【南蛮入侵】。当你以此法杀死一名角色后，你可以额外执行一个其他选项。",
                            "qunyou2022_beici": "被刺",
                            "qunyou2022_beici_info": "锁定技，当你成为一张转化【杀】的目标后，你失去1点体力。",

                            //qunyou2022_wangyun
                            "qunyou2022_lianji": "连计",
                            "qunyou2022_lianji_info": "回合结束时，你可以摸两张牌，然后执行一个额外的出牌阶段，此阶段结束时，若你未造成伤害，你失去1点体力。",

                            //qunyou2022_yuejiyuanshuai
                            "qunyou2022_diechui": "躍锤",
                            "qunyou2022_diechui_info": "结束阶段，你可以将一张手牌置于你的武将牌上，称为“锤”；当你使用【杀】造成伤害时，你可以将一张“锤”置入弃牌堆，令此【杀】造成的伤害+1。",
                            "qunyou2022_xueshang": "雪殇",
                            "qunyou2022_xueshang_info": "锁定技，若你有“锤”，当其他群势力的角色死亡时，你失去1点体力。",

                            //qunyou2022_midangdawang
                            "qunyou2022_qiangdi": "羌笛",
                            "qunyou2022_qiangdi_info": "准备阶段，你可以进行一次判定，若结果为：黑色，你本回合使用【杀】无距离限制；红色，你本回合使用的【杀】无法被响应；【杀】：你同时拥有以上两种效果。",

                            //qunyou2022_mengyue
                            "qunyou2022_yueren": "月刃",
                            "qunyou2022_yueren_info": "转换技，摸牌阶段，你可以改为亮出牌堆顶的一张牌并获得之，然后：阴：本回合你可以将该牌当任意普通锦囊牌使用；阳：本回合你可以将该牌当任意基本牌使用。",
                            "qunyou2022_xieneng": "邪能",
                            "qunyou2022_xieneng_info": "结束阶段，你可以将手牌摸至X张（X为你的体力上限），然后弃1张牌，否则失去1点体力。",

                            //qunyou2022_sijiyingji
                            "qunyou2022_zhongshen": "终审",
                            "qunyou2022_zhongshen_info": "锁定技，出牌阶段开始时，若你的体力值比上个回合结束时少，则你本回合使用牌无距离与次数限制，且每当你使用黑色基本或锦囊牌后，你摸一张牌。",
                            "qunyou2022_zuifa": "罪罚",
                            "qunyou2022_zuifa_info": "在一名其它角色使用一张【杀】指定目标后，若此【杀】为：红色，该【杀】生效后，你可以令其失去1点体力值并收回此【杀】，然后本回合不能再对除你外的角色使用【杀】；黑色，你可以令此【杀】伤害+1，然后你也成为该【杀】的目标；无色，此【杀】生效后，你可以弃一张牌，然后获得此【杀】。",

                            //qunyou2022_sp_linghu
                            "qunyou2022_sangwei": "赏味",
                            "qunyou2022_sangwei_info": "当一名角色受到伤害后，若你至其的距离不大于1，你可观看伤害来源的手牌，然后用你的一张牌交换其中的一张牌。",

                            //qunyou2022_mengjie
                            "qunyou2022_chuzhang": "除瘴",
                            "qunyou2022_chuzhang_info": "出牌阶段限一次，你可以令一名已受伤的角色恢复1点体力，然后你选择一项，1.摸一张牌，2.弃置场上的一张牌。",
                            "qunyou2022_cishang": "辞赏",
                            "qunyou2022_cishang_info": "当你死亡时，你可以令一名其他角色增加1点体力上限。",

                            //qunyou2022_dongtuna
                            "qunyou2022_kuifu": "傀附",
                            "qunyou2022_kuifu_info": "游戏开始时，你可以令一名其他角色获得1个“附”标记。当有“附”标记的角色造成伤害后，你摸一张牌。当有“附”标记的角色死亡时，你可将该角色的“附”标记交给另一名其他角色。",
                            "qunyou2022_xianmeng": "陷盟",
                            "qunyou2022_xianmeng_info": "出牌阶段限一次，若你的手牌包括4种花色，你可以弃置所有手牌，然后对1名其他角色造成X点伤害（X为其体力值）。若如此做，直到其下一个回合结束，其每回复1点体力，你失去1点体力。",

                            //qunyou2022_mizhu
                            "qunyou2022_ziyuan": "资援",
                            "qunyou2022_ziyuan_info": "出牌阶段限一次，你可以令一名角色摸4张牌，然后若该角色不为你，其须交给你任意张点数之和为13的牌并失去1点体力，否则立即死亡。",
                            "qunyou2022_jugu": "巨贾",
                            "qunyou2022_jugu_info": "锁定技，①你的手牌上限-X；②游戏开始时，你弃X张牌。（X为你的体力上限）",

                            //qunyou2022_jinxianggongzhu
                            "qunyou2022_lizhuang": "淚状",
                            "qunyou2022_lizhuang_info": "出牌阶段限一次，你可以指定一名装备区内有牌的角色令其选择一项：1、废除装备区，然后对你造成2点伤害；2、弃置一张装备牌。",
                            "qunyou2022_wudu": "无妒",
                            "qunyou2022_wudu_info": "当你受到1点伤害时，你可以将一张手牌交给一名其他角色，然后摸X张牌（X为你已损失的体力值）。",

                            //qunyou2022_laoba
                            "qunyou2022_shishi": "食屎",
                            "qunyou2022_shishi_info": "出牌阶段限一次，你可以失去1点体力，然后声明一种基本牌，所有此牌名的牌均视为【毒】直到你的下回合开始。",
                            "qunyou2022_cheshuo": "撤硕",
                            "qunyou2022_cheshuo_info":"锁定技，你手牌中与〖食屎〗声明牌名相同的牌不计入手牌上限。出牌阶段开始时，你可以观看一名其他角色的手牌，然后令其下回合手牌上限-X（X为其手牌中与〖食屎〗声明牌名相同的牌的数量）。",

                            //qunyou2022_pengtuo
                            "qunyou2022_guzhu": "孤注",
                            "qunyou2022_guzhu_info": "一名其他角色的回合开始时，若你的体力值或手牌数为1，你可以视为对其使用一张【杀】。",

                            //qunyou2022_sp_xuchu
                            "qunyou2022_tianqiong": "天穹",
                            "qunyou2022_tianqiong_info": "当你受到伤害后，你可以弃置所有手牌（至少1张），然后伤害来源弃置全部手牌。",
                            "qunyou2022_pofeng": "破锋",
                            "qunyou2022_pofeng_info": "你可以跳过摸牌阶段，然后弃置一名角色装备区中的所有牌。",
                            "qunyou2022_xuechuang": "血创",
                            "qunyou2022_xuechuang_info": "锁定技，其他角色使用【桃】时，视为你对该角色使用一张【杀】",
                            "qunyou2022_junbei": "军备",
                            "qunyou2022_junbei_info": "结束阶段，若你没有手牌，你摸X张牌（X为你已损失体力值）。",

                            //qunyou2022_sp_shen_liubei
                            "qunyou2022_baidi": "白帝",
                            "qunyou2022_baidi_info": "锁定技，你始终处于横置状态。若你的防具栏内没有牌且没有被废除，则视为你装备着【藤甲】。",
                            "qunyou2022_jieyi": "结义",
                            "qunyou2022_jieyi_info": "当你于回合外失去牌时，你可以横置当前回合角色。",
                            "qunyou2022_xuehai": "血海",
                            "qunyou2022_xuehai_info": "觉醒技，当你处于濒死状态时，你须减1点体力上限并回复体力至2点，然后获得技能〖武神〗和〖咆哮〗。",

                            //qunyou2022_xiaoqiao
                            "qunyou2022_xiuhua": "羞花",
                            "qunyou2022_xiuhua_info": "锁定技，红色的杀对你无效。",
                            "qunyou2022_jinghong": "惊鸿",
                            "qunyou2022_jinghong_info": "弃牌阶段开始时，你可以与一名男性角色交换手牌。",

                            //qunyou2022_zhangbiao
                            "qunyou2022_tuijun": "推军",
                            "qunyou2022_tuijun_info": "锁定技，你使用的【杀】未造成伤害后，此【杀】对其上家和下家的角色各造成1点伤害。",
                            "qunyou2022_wuli": "无离",
                            "qunyou2022_wuli_info": "结束阶段开始时，若你此回合未造成伤害，你可以与一名已受伤的角色各摸一张牌",

                            //qunyou2022_re_sunce
                            "qunyou2022_hunshang": "魂殇",
                            "qunyou2022_hunshang_info": "锁定技，若你的体力值大于2，你视为拥有技能〖界英姿〗〖激昂〗；若你的体力值不大于2，你视为拥有技能〖英魂〗〖谦逊〗；若你的手牌数为全场最多，你视为拥有技能〖制衡〗。",
                            "qunyou2022_yingba": "英霸",
                            "qunyou2022_yingba_info": "出牌阶段限一次，你可以令一名其他角色本轮手牌上限-1，然后你选择一项：1、回复1点体力并弃置一张牌；2、失去1点体力并摸一张牌。锁定技，出牌阶段结束时，若你本回合使用【杀】造成2点以上的伤害，你跳过弃牌阶段；若你本回合使用【杀】造成X点以上的伤害（X为你的体力上限），你于此回合结束后执行一个额外的回合。",

                            //qunyou2022_yuanxi
                            "qunyou2022_zuoshi": "作势",
                            "qunyou2022_zuoshi_info": "转换技，阴：出牌阶段开始时，你可以摸X+2张牌（X为你的体力值）；出牌阶段结束时，若你本回合造成伤害值不大于2，你弃置区域内的所有牌。阳：结束阶段，你可以摸两张牌并弃两张牌，然后对一名其他角色造成1点伤害，其视为对与其距离为1的其他角色依次使用一张【杀】。（你以此技能获得的牌不计入本回合的手牌上限）",
                            "qunyou2022_liangna": "良纳",
                            "qunyou2022_liangna_info": "①每回合限一次，当你成为【杀】或伤害类锦囊牌的目标时，你可以弃置两张牌，然后取消此牌的所有目标；②结束阶段，若你的手牌区/装备区没有牌，则你摸两张牌/随机从弃牌堆使用一张装备牌。",

                            //qunyou2022_wenqiao
                            "qunyou2022_ranxi": "燃犀",
                            "qunyou2022_ranxi_info": "出牌阶段限一次，你可重铸一张红色牌并观看一名其他角色的手牌，然后你可弃置你/其至多两张【杀】或伤害类锦囊牌，若为两张，你回复/失去1点体力。",
                            "qunyou2022_hongyi": "弘毅",
                            "qunyou2022_hongyi_info": "每回合限一次，当你的体力值改变后，你可令一名其他角色复原武将牌，然后你和其各摸一张牌",

                            //qunyou2022_huangwudie
                            "qunyou2022_shifan": "矢返",
                            "qunyou2022_shifan_info": "每轮限一次，当你使用【杀】造成伤害时，你可以令目标角色于其下个摸牌阶段结束时进行一次判定，若结果为：红色，其弃置一张牌；♠其失去一点体力；♣你获得其一张牌。",
                            "qunyou2022_hongzhuang": "红妆",
                            "qunyou2022_hongzhuang_info": "每回合限一次，当你使用或打出一张牌时，你可以选择一项：1、令一名角色摸一张牌；2、移动场上一张牌。",
                            "qunyou2022_sheyi": "射艺",
                            "qunyou2022_sheyi_info": "锁定技，你的攻击范围+X。（X为你当前体力值）",

                            //qunyou2022_re_zhanghe
                            "qunyou2022_jixian": "机先",
                            "qunyou2022_jixian_info": "其他角色的回合开始时，你可以令其本回合跳过一个未被选择过的阶段（准备和结束阶段除外）。当你杀死角色后，你可恢复一个〖机先〗选择过的阶段。",

                            //qunyou2022_liubei
                            "qunyou2022_shuangjian": "双剑",
                            "qunyou2022_shuangjian_info": "当一名角色在出牌阶段内使用第二张杀时，你可以令该角色摸两张牌；一名角色的结束阶段，若其本回合只使用过红色的杀，你可以令其摸两张牌。",
                            "qunyou2022_longzhang": "龙章",
                            "qunyou2022_longzhang_info": "主公技，锁定技，当有其他蜀势力角色距离与你为一时，你获得〖激将〗。当你的攻击范围内没有蜀势力角色时，你获得〖放权〗。",

                            //qunyou2022_suibian
                            "qunyou2022_liushi": "开局掉血",
                            "qunyou2022_liushi_info": "锁定技，游戏开始时，你失去1点体力持续X次（X为你的体力值）。",
                            "qunyou2022_fudu": "掉血摸牌",
                            "qunyou2022_fudu_info": "锁定技，当你的体力值变化时，你摸X张牌（X为与你体力值不同的人数）。",

                            //qunyou2022_sunjun
                            "qunyou2022_xiongyi": "凶溢",
                            "qunyou2022_xiongyi_info": "锁定技，回合开始时，你失去1点体力并摸X张牌（X为你的体力值）；你的回合内，其他角色无法对你或处于濒死状态的角色使用【桃】。",
                            "qunyou2022_jiaoli": "骄厉",
                            "qunyou2022_jiaoli_info": "当你进入濒死状态时，你可以减少1点体力上限并将体力回复至1点，然后后当前回合角色摸X张牌（X为你的体力上限)。",

                            //qunyou2022_jiangwei
                            "qunyou2022_lianbing": "敛兵",
                            "qunyou2022_lianbing_info": "你可以跳过摸牌阶段，然后选择一项：1、将至多两名其他角色的各一张手牌置于你的武将牌上称为“兵”；2、将一名其他角色的一张牌置于你的武将牌上称为“兵”并摸一张牌。当你的武将牌上有“兵”时，你跳过弃牌阶段。",
                            "qunyou2022_xianshou": "险守",
                            "qunyou2022_xianshou_info": "你可以移去两张“兵”，视为使用一张普通锦囊牌，然后摸一张牌。",

                            //qunyou2022_zhandisi
                            "qunyou2022_qiangmai": "强买",
                            "qunyou2022_qiangmai_info": "当其他角色的装备牌进入弃牌堆后，你可以获得之。",
                            "qunyou2022_qiangmai2": "强卖",
                            "qunyou2022_qiangmai2_info": "当你于回合外失去一张手牌后，你可以获得当前回合角色的一张牌。",

                            //qunyou2022_taotieyoumo
                            "qunyou2022_jingtun": "井吞",
                            "qunyou2022_jingtun_info": "其它角色的准备阶段开始时，若其手牌数不大于你，你可以观看牌堆顶的X张牌（X为该角色手牌数且至多为5），然后选择一项：1、将其中的任意张牌置于牌堆底，然后该角色弃置你一张牌；2、令其获得其中的任意张牌，然后该角色交给你一张牌。若如此做，该角色本回合使用伤害类锦囊牌不能指定你为目标。",
                            "qunyou2022_zhouxue": "咒血",
                            "qunyou2022_zhouxue_info": "准备阶段，你可从牌堆底摸X+1张牌（X为你的上一轮中使用〖井吞〗指定的目标数）。",

                            //qunyou2022_simazhi
                            "qunyou2022_renhui": "仁惠",
                            "qunyou2022_renhui_info": "当你于回合外失去一张牌后，你可令一名角色回复1点体力或摸一张牌。",
                            "qunyou2022_minxin": "民心",
                            "qunyou2022_minxin_info": "每回合限一次，当一名其他角色回复体力时，你可令其摸两张牌，然后其可以交给你任意张牌，然后你弃一张牌。",

                            //qunyou2022_langxiongdi
                            "qunyou2022_shangjin": "赏金",
                            "qunyou2022_shangjin_info": "锁定技，你的出杀次数+X（X为你已损失的体力值）。准备阶段，你选择一名角色并进行一次判定，若判定结果为：黑色，你对其造成1点伤害；红色，你获得此判定牌，且本回合你计算与其的距离为1。",
                            "qunyou2022_shishou": "失手",
                            "qunyou2022_shishou_info": "当你受到伤害时，你可以进行判定并获得判定牌，然后若结果为：红色，此伤害+1；黑色，此伤害-1。",

                            //qunyou2022_jingxiang_zhangjiao
                            "qunyou2022_sanhe": "三合",
                            "qunyou2022_sanhe_info": "锁定技，当你造成或受到伤害后，你令一名角色将手牌摸至体力上限（至多摸3张）；你的手牌上限+X。（X为你发动过〖三合〗的次数）",
                            "qunyou2022_cedian": "策电",
                            "qunyou2022_cedian_info": "出牌阶段限一次，你可以弃一张牌，根据此牌的点数依次执行以下效果：点数大于3：你摸一张牌；点数大于7：你回复1点体力并弃置一名角色的一张牌；点数大于10：你对1名角色造成1点雷电伤害，然后你可以移动场上一张牌。",

                            //qunyou2022_re_guohuai
                            "qunyou2022_jingce": "精策",
                            "qunyou2022_jingce_info": "结束阶段，若本回合进入弃牌堆的牌数不小于你的体力值，你可以摸X张牌（X为本回合进入弃牌堆的牌数，且至多为4）；若你本回合造成过伤害且伤害值大于1且不等于你的体力值，则你选择一项：1、执行一个额外的出牌阶段；2、对一名其他角色造成1点伤害。",

                            //qunyou2022_bolilingmeng
                            "qunyou2022_tuizhi": "退治",
                            "qunyou2022_tuizhi_info": "当你使用或打出牌来响应牌或你受到1点伤害后，你可以弃置一名角色的一张牌，然后若其未受伤，你对其造成1点伤害。",
                            "qunyou2022_youxian": "悠闲",
                            "qunyou2022_youxian_info": "锁定技，每轮限一次，在你使用一张牌指定一名其他角色为目标后，你摸两张牌并令其摸一张牌。",

                            //qunyou2022_shihuan
                            "qunyou2022_fagu": "伐固",
                            "qunyou2022_fagu_info": "每回合限一次，当一名角色受到伤害后，若其的手牌数或体力值为全场最多，你可以对其造成1点伤害并弃置其一张牌，然后若弃置的牌是基本牌，你对其造成1点伤害。",
                            "qunyou2022_jieliang": "劫粮",
                            "qunyou2022_jieliang_info": "每轮限一次，当一名其他角色不因摸牌阶段摸牌而获得牌时，你可以令其将获得的所有牌交给你。然后若你获得的牌数大于1张，你对其造成1点火焰伤害并失去1点体力。",

                            //qunyou2022_huzhao
                            "qunyou2022_chengfu": "成赋",
                            "qunyou2022_chengfu_info": "游戏开始时，你摸一张牌，然后将一张手牌置于你武将牌上称为“赋”。",
                            "qunyou2022_liyin": "礼隐",
                            "qunyou2022_liyin_info": "锁定技，你的回合外，当与“赋”同花色的非伤害类锦囊牌指定你为目标时，你使其对你无效，然后你摸一张牌。",
                            "qunyou2022_shuzhi": "书志",
                            "qunyou2022_shuzhi_info": "每回合限一次，你可以弃置“赋”并将一张基本牌置于武将牌上称为“赋”。若如此做，你视为使用一张非伤害类锦囊牌，然后使一名角色将手牌摸至X张（X为你本局游戏因此法使用过的牌名数）。",

                            //qunyou2022_wujie
                            "qunyou2022_dilie": "地裂",
                            "qunyou2022_dilie_info": "当你受到伤害后，你可令伤害来源翻面。",
                            "qunyou2022_tianbeng": "天崩",
                            "qunyou2022_tianbeng_info": "锁定技，一名角色的回合开始时，你对受到过你造成的伤害的角色造成1点伤害。",
                            "qunyou2022_tuteng": "图腾",
                            "qunyou2022_tuteng_info": "锁定技，其他角色的回合开始时，其进行一次判定，若结果为：♣，则立即进入出牌阶段；♦，则立即进入弃牌阶段；♠，则立即结束当前回合并将武将牌翻面。",

                            //qunyou2022_xiahoushi
                            "qunyou2022_yanyu": "燕语",
                            "qunyou2022_yanyu_info": "你可以重铸一张你的手牌，若其不为杀，你弃置一张牌。出牌阶段结束时，你可使一名男性角色摸X张牌（X为你于此阶段重铸牌数量且至多为3），然后若你手牌为场上最少，你摸等量的牌。",
                            "qunyou2022_qiaoshi": "樵拾",
                            "qunyou2022_qiaoshi_info": "其他角色的结束阶段，若其手牌数等于你，你可以与其摸一张牌；若其手牌少于你，你可以弃置一张牌，其选择给予你一张基本牌，若其为杀，其摸一张牌。",

                            //qunyou2022_gesi
                            "qunyou2022_kuangzhan": "狂战",
                            "qunyou2022_kuangzhan_info": "锁定技，当你造成伤害时，你获得一个“狂”标记，然后你可以使用一张不计入次数的【杀】。",
                            "qunyou2022_xianji": "献祭",
                            "qunyou2022_xianji_info": "锁定技，你的杀造成的伤害+X；回合结束时，你将体力值调整至X，然后弃置所有“狂”标记。（X为“狂”标记数）",

                            //qunyou2022_tenggongzhu
                            "qunyou2022_lianli": "连理",
                            "qunyou2022_lianli_info": "出牌阶段限一次，你可弃置一张牌，然后选择一项：1、摸两张类型不同的牌；2、与一名角色一起回复一点体力。每次你回复体力或受到伤害时，你选择场上一名角色，其下个出牌阶段可使用〖连理〗次数+1(至多为5)。",
                            "qunyou2022_dianpei2": "颠沛",
                            "qunyou2022_dianpei2_info": "锁定技，当你受到伤害时，你可以声明一种类型的牌，然后伤害来源须选择一项：1、弃置两张对应类型的牌；2、获得牌堆中对应类型的一张牌，然后令你回复一点体力。",

                            //qunyou2022_tengyin
                            "qunyou2022_xiujie": "脩节",
                            "qunyou2022_xiujie_info": "当你使用一张牌后，若此牌与你使用的上一张牌花色、类型均不同，你可将此牌交给一名其他角色，然后摸一张牌。",
                            "qunyou2022_zhongjian": "忠谏",
                            "qunyou2022_zhongjian_info": "出牌阶段限一次，你可指定一名角色，你与该角色交换所有手牌，然后其选择一项：1、使你失去一点体力；2、使你回复一点体力。如果本回合〖脩节〗已发动过三次，则此技能改为“出牌阶段限两次”。",

                            //qunyou2022_huanfuren
                            "qunyou2022_cailan": "采兰",
                            "qunyou2022_cailan_info": "每回合限两次，当一名角色在弃牌阶段以外弃置手牌时，你可令其获得其中一张牌，然后你摸一张牌。",
                            "qunyou2022_xunxu": "洵虚",
                            "qunyou2022_xunxu_info": "每回合限一次，当一名角色进入濒死状态时，你可以弃置所有手牌并摸等量的牌，然后若你手牌中有【桃】或【酒】，该角色回复一点体力。若该角色因此脱离凝死状态，你失去〖洵虚〗并获得〖华尔〗。",
                            "qunyou2022_huaer": "华尔",
                            "qunyou2022_huaer_info": "每回合限一次，当一名角色受到伤害时，你可以弃置X张手牌并摸等量的牌（X为其体力值），然后若你手牌中有【桃】或【酒】，你可以选择一项：1、令其回复一点体力；2、你摸一张牌。若没有，此技能改为“每回合限两次”。",

                            //qunyou2022_caoyu
                            "qunyou2022_yanchu": "燕褚",
                            "qunyou2022_yanchu_info": "锁定技，你弃置的牌改为置入牌堆底。当你一次性弃置两张及以上手牌时，你摸一张牌。当你一次性弃置四张及以上的牌时，你增加一点体力上限并选择一项：1、令所有其他角色弃一张牌；2、令所有其他角色受到一点无来源伤害。",
                            "qunyou2022_fenggong": "封公",
                            "qunyou2022_fenggong_info": "结束阶段，你可以指定一名角色，其下个出牌阶段开始时弃置所有牌，然后将手牌摸至五张。",

                            //qunyou2022_chunaizhanshen
                            "qunyou2022_fuai": "赴爱",
                            "qunyou2022_fuai_info": "锁定技，游戏开始时，你选择一名女性角色。你本局游戏获得牌时，须交给其一张手牌；当你回复1点体力时，其回复1点体力。",
                            "qunyou2022_shenwei": "神威",
                            "qunyou2022_shenwei_info": "锁定技，当你受到一名男性角色的伤害时，你与其各减1点体力上限。",
                            "qunyou2022_hanlie": "悍烈",
                            "qunyou2022_hanlie_info": "锁定技，你选择的角色每对你造成1点伤害，你摸牌阶段的摸牌数、攻击范围、使用杀的次数与目标上限、【杀】造成的伤害均+1。若该角色曾令你进入过濒死状态，你造成的伤害基数＋1。",

                            //qunyou2022_zibaoerhao
                            "qunyou2022_hengzhi": "横置",
                            "qunyou2022_hengzhi_info": "当你受到或造成非连环伤害时，你可以横置一名角色。锁定技，游戏开始时或当你的武将牌重置时，你横置。",
                            "qunyou2022_zibao": "自爆",
                            "qunyou2022_zibao_info": "出牌阶段，你可以对自己造成1点伤害。锁定技，当你受到伤害时，你令伤害属性改为火属性。",

                            //qunyou2022_longcuigongzhu
                            "qunyou2022_hongyun": "鸿运",
                            "qunyou2022_hongyun_info": "在你的判定牌生效后或你的回合内其他角色的判定牌生效后，若为红色，你可以摸两张牌。",
                            "qunyou2022_dianpei": "颠沛",
                            "qunyou2022_dianpei_info": "当你于回合外失去一张手牌后，你可以进行一次判定，若结果为红色，你可以令一名角色回复1点体力。",
                            "qunyou2022_jiying": "集英",
                            "qunyou2022_jiying_info": "主公技，每当其他女性角色受到伤害后，其可以交给你一张手牌，然后你交给其一张牌。",

                            //qunyou2022_zixushangren
                            "qunyou2022_yuyan": "预言",
                            "qunyou2022_yuyan_info": "准备阶段，你可以声明一种颜色，然后展示牌堆顶的一张牌，若你声明的与展示的牌颜色不同，则你摸牌阶段少摸1张牌，若颜色相同，你摸牌阶段改为摸5张牌。",
                            "qunyou2022_xianzhi": "先知",
                            "qunyou2022_xianzhi_info": "出牌阶段限一次，你可以观看一名其他角色手牌，然后你可以获得其中所有与预言颜色相同的牌。",
                            "qunyou2022_fuluan": "扶乱",
                            "qunyou2022_fuluan_info": "限定技，出牌阶段，你可以令两名角色交换一个技能。",

                            //qunyou2022_sunnichang
                            "qunyou2022_wuxian": "五弦",
                            "qunyou2022_wuxian_info": "锁定技，其他角色于其回合外获得牌后，你摸一张牌。",
                            "qunyou2022_xianming": "弦鸣",
                            "qunyou2022_xianming_info": "当你使用（指定目标前）或被使用（成为目标后）一张【过河拆桥】或【顺手牵羊】时，你可以令此两张牌的效果互换。",

                            //qunyou2022_zhangxi
                            "qunyou2022_yizun": "议尊",
                            "qunyou2022_yizun_info": "转换技，阴：准备阶段，你可以令一名角色将手牌摸至与场上手牌数最多的角色相同（至多摸5张）；阳：结束阶段，你可以令一名角色将手牌弃至与场上手牌数最少的角色相同（至多弃5张）。若其以此法获得或弃置了5张牌，你加一点体力上限、回复一点体力并复原〖卫汉〗。",
                            "qunyou2022_weihan": "卫汉",
                            "qunyou2022_weihan_info": "限定技，出牌阶段，你可以弃置至多3张牌并观看一名其他角色的所有手牌，然后你可以选择其中等量的牌对其使用（不计入使用次数）或弃置。",

                        },
                        //转换技显示
                        dynamicTranslate: {
                            //qunyou2022_mengyue
                            "qunyou2022_yueren": function (player) {
                                var str = '转换技，摸牌阶段，你可以改为亮出牌堆顶的一张牌并获得之，然后：';
                                if (player.storage.qunyou2022_yueren) str += '阴：本回合你可以将该牌当任意普通锦囊牌使用；<span class="bluetext">阳：本回合你可以将该牌当任意基本牌使用。</span>';
                                else str += '<span class="bluetext">阴：本回合你可以将该牌当任意普通锦囊牌使用；</span>阳：本回合你可以将该牌当任意基本牌使用。';
                                return str;
                            },

                            //qunyou2022_yuanxi
                            "qunyou2022_zuoshi": function (player) {
                                var str = '转换技，';
                                if (player.storage.qunyou2022_zuoshi) str += '阴：出牌阶段开始时，你可以摸X+2张牌（X为你的体力值）；出牌阶段结束时，若你本回合造成伤害值不大于2，你弃置区域内的所有牌。<span class="bluetext">阳：结束阶段，你可以摸两张牌并弃两张牌，然后对一名其他角色造成1点伤害，其视为对与其距离为1的其他角色依次使用一张【杀】。</span>';
                                else str += '<span class="bluetext">阴：出牌阶段开始时，你可以摸X+2张牌（X为你的体力值）；出牌阶段结束时，若你本回合造成伤害值不大于2，你弃置区域内的所有牌。</span>阳：结束阶段，你可以摸两张牌并弃两张牌，然后对一名其他角色造成1点伤害，其视为对与其距离为1的其他角色依次使用一张【杀】。';
                                str += '（你以此技能获得的牌不计入本回合的手牌上限）';
                                return str;
                            },

                            //qunyou2022_zhangxi
                            "qunyou2022_yizun": function (player) {
                                var str = '转换技，';
                                if (player.storage.qunyou2022_yizun) str += '阴：准备阶段，你可以令一名角色将手牌摸至与场上手牌数最多的角色相同（至多摸5张）；<span class="bluetext">阳：结束阶段，你可以令一名角色将手牌弃至与场上手牌数最少的角色相同（至多弃5张）。</span>';
                                else str += '<span class="bluetext">阴：准备阶段，你可以令一名角色将手牌摸至与场上手牌数最多的角色相同（至多摸5张）；</span>阳：结束阶段，你可以令一名角色将手牌弃至与场上手牌数最少的角色相同（至多弃5张）。';
                                str += '若其以此法获得或弃置了5张牌，你加一点体力上限、回复一点体力并复原〖卫汉〗。';
                                return str;
                            },
                        },
                    };
                    if (lib.device || lib.node) {
                        for (var i in qunyou2022.character) qunyou2022.character[i][4].push('ext:群友DIY/image/character/' + i + '.jpg');
                    } else {
                        for (var i in qunyou2022.character) qunyou2022.character[i][4].push('db:extension-群友DIY/image/character:' + i + '.jpg');
                    }
                    return qunyou2022;
                });
                lib.config.all.characters.push('qunyou2022');
                if (!lib.config.characters.contains('qunyou2022')) lib.config.characters.remove('qunyou2022');
                lib.translate['qunyou2022_character_config'] = '<span width="78" height="25">群友DIY2022</span>';






                //qunyou2023
                game.import('character', function () {
                    var qunyou2023 = {
                        name: 'qunyou2023', //武将包命名（必填）
                        connect: false, //该武将包是否可以联机（必填）
                        //武将分组
                        characterSort: {
                            qunyou2023: {
                                "yuandan": ["qunyou2023_yd_xiefuren", "qunyou2023_yd_weidan", "qunyou2023_yd_luzhi", "qunyou2023_yd_huangyueying", "qunyou2023_yd_qun_huangyueying", "qunyou2023_yd_xietiao"],
                                "month1": ["qunyou2023_m1_gansidui", "qunyou2023_m1_pujing", "qunyou2023_m1_caozhang", "qunyou2023_m1_fengji", "qunyou2023_m1_mou_zhanghe", "qunyou2023_m1_donghe"],
                                "month2": ["qunyou2023_m2_jiangwei", "qunyou2023_m2_liubei", "qunyou2023_m2_dailaidongzhu", "qunyou2023_m2_aerwa", "qunyou2023_m2_aogusiting", "qunyou2023_m2_qifu_zhangliao"],
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
                        },
                        //武将介绍
                        characterIntro: {},
                        //武将称号
                        characterTitle: {},
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
                                                player.chooseTarget("选择移交牌的对象", 1, true, function (card, player, target) {
                                                    return target != player
                                                }).set('ai', function (target) {
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
                                trigger: {
                                    player: "dying",
                                },
                                locked: true,
                                charlotte: true,
                                skillAnimation: true,
                                animationColor: "green",
                                derivation: ['qunyou2023_yd_cuizhi'],
                                init: function (player) {
                                    if (!player.storage.qunyou2023_yd_piaomiao_nouse) player.storage.qunyou2023_yd_piaomiao_nouse = [];
                                },
                                filter: function (event, player) {
                                    return player.storage.qunyou2023_yd_piaomiao_nouse.length < 4;
                                },
                                content: function () {
                                    "step 0"
                                    var list = ["spade", "heart", "club", "diamond"];
                                    for (var suit of player.storage.qunyou2023_yd_piaomiao_nouse) list.remove(suit);
                                    player.chooseControl(list)
                                        .set('prompt', "请选择一种花色无法使用");
                                    "step 1"
                                    event.suit = result.control;
                                    player.addSkill('qunyou2023_yd_piaomiao_nouse');
                                    player.storage.qunyou2023_yd_piaomiao_nouse.push(event.suit);
                                    player.storage.qunyou2023_yd_piaomiao_nouse.sort(function (a, b) {
                                        return lib.suit.indexOf(b) - lib.suit.indexOf(a);
                                    });
                                    player.syncStorage('qunyou2023_yd_piaomiao_nouse');
                                    player.draw(2);
                                    var num = 3 - player.hp;
                                    if (num) player.recover(num);
                                    "step 2"
                                    if (game.HasExtension('十周年UI')) {
                                        game.broadcastAll(function (player) {
                                            var list = '';
                                            for (var suit of player.getStorage('qunyou2023_yd_piaomiao_nouse')) list += get.translation(suit);
                                            if (player.marks.qunyou2023_yd_piaomiao_nouse) player.marks.qunyou2023_yd_piaomiao_nouse.firstChild.innerHTML = list;
                                        }, player);
                                    };
                                    "step 3"
                                    var flag_black = player.storage.qunyou2023_yd_piaomiao_nouse.contains("spade") && player.storage.qunyou2023_yd_piaomiao_nouse.contains("club") && (event.suit == "spade" || event.suit == "club");
                                    var flag_red = player.storage.qunyou2023_yd_piaomiao_nouse.contains("heart") && player.storage.qunyou2023_yd_piaomiao_nouse.contains("diamond") && (event.suit == "heart" || event.suit == "diamond");

                                    if (player.storage.qunyou2023_yd_piaomiao_nouse.length == 4) {
                                        player.loseMaxHp(2);
                                        player.addSkill("qunyou2023_yd_piaomiao_wuxian");
                                    } else if (flag_black || flag_red) {
                                        player.gainMaxHp();
                                        player.addSkill("qunyou2023_yd_cuizhi");
                                    };
                                },
                                subSkill: {
                                    nouse: {
                                        charlotte: true,
                                        onremove: true,
                                        mark: true,
                                        intro: {
                                            markcount: function (storage) {
                                                if (game.HasExtension('十周年UI')) return undefined;
                                                return storage.length;
                                            },
                                            content: function (storage, player) {
                                                if (player.storage.qunyou2023_yd_piaomiao_nouse.length == 4) return "使用牌无次数和距离限制";
                                                var list = '';
                                                for (var suit of player.getStorage('qunyou2023_yd_piaomiao_nouse')) list += get.translation(suit);
                                                return "无法使用" + list + "花色的牌";
                                            },
                                        },
                                        mod: {
                                            cardEnabled: function (card, player) {
                                                if (player.storage.qunyou2023_yd_piaomiao_nouse.length < 4 && player.storage.qunyou2023_yd_piaomiao_nouse.contains(get.suit(card))) return false;
                                            },
                                        },
                                        sub: true,
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
                            "qunyou2023_yd_yunque": {
                                trigger: {
                                    player: "phaseJieshuBegin",
                                },
                                frequent: true,
                                filter: function (event, player) {
                                    var list = [],
                                        history = player.getHistory('useCard');
                                    for (var i of history) list.add(get.suit(i.card));
                                    return list.length > 0;
                                },
                                content: function () {
                                    "step 0"
                                    var list = [],
                                        history = player.getHistory('useCard');
                                    for (var i of history) list.add(get.suit(i.card));
                                    event.list = list;
                                    "step 1"
                                    if (event.list.length > 0) {
                                        player.chooseTarget('弃置场上一张牌', 1, function (card, player, target) {
                                            return target.countCards('ej');
                                        });
                                    } else event.finish();
                                    "step 2"
                                    if (result.bool) player.discardPlayerCard(result.targets[0], 'ej', true);
                                    else event.finish();
                                    "step 3"
                                    if (event.list.length > 1) player.chooseTarget('令一名角色回复一点体力', 1);
                                    else event.finish();
                                    "step 4"
                                    if (result.bool) result.targets[0].recover();
                                    else event.finish();
                                    "step 5"
                                    if (event.list.length > 2) player.chooseBool("摸等同于自身体力上限的牌,自身进入濒死。");
                                    else event.finish();
                                    "step 6"
                                    if (result.bool) {
                                        player.draw(player.maxHp);
                                        player.loseHp(player.hp);
                                    } else event.finish();
                                },
                            },
                            "qunyou2023_yd_cuizhi": {
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
                                    };
                                    "step 1"
                                    if (result.bool) {
                                        player.gainPlayerCard(trigger.source, 'he', true, 1);
                                    };
                                    "step 2"
                                    if (player.hp <= trigger.source.hp) {
                                        player.chooseBool("是否获得" + get.translation(trigger.source) + "的1点体力")
                                    };
                                    "step 3"
                                    if (result.bool) {
                                        trigger.source.loseHp();
                                        player.recover();
                                    };
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
                                trigger: {
                                    player: "useCard",
                                },
                                audio: 2,
                                forced: true,
                                filter: function (event, player) {
                                    return event.targets && get.type(event.card, false) == 'trick' && !get.tag(event.card, 'damage');
                                },
                                content: function () {
                                    for (var i of trigger.targets) i.draw();
                                },
                            },
                            "qunyou2023_m1_minxi": {
                                mark: true,
                                locked: false,
                                zhuanhuanji: true,
                                marktext: "☯",
                                audio: 2,
                                intro: {
                                    markcount: function (storage, player) {
                                        if (!_status.currentPhase) return undefined;
                                        return (player.getStat('skill').qunyou2023_m1_minxi || 0) + 1;
                                    },
                                    content: function (storage, player, skill) {
                                        var num = (player.getStat('skill').qunyou2023_m1_minxi || 0) + 1;
                                        var str = player.storage.qunyou2023_m1_minxi ? '你可以获得' + num + '名手牌数不少于你的其他角色一张牌' : '你可以交给' + num + '名手牌数不大于你的其他角色一张手牌。';
                                        str += '若有角色本阶段已成为过此技能的目标两次，则你令此技能失效直到回合结束，然后你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多' + num + '个目标';
                                        return str;
                                    },
                                },
                                enable: "phaseUse",
                                multitarget: true,
                                filter: function (event, player) {
                                    var num = (player.getStat('skill').qunyou2023_m1_minxi || 0) + 1;
                                    if (player.hasSkill('qunyou2023_m1_minxi_disable')) return false;
                                    return player.storage.qunyou2023_m1_minxi || player.countCards('h') >= num;
                                },
                                filterTarget: function (card, player, target) {
                                    if (player == target) return false;
                                    if (player.storage.qunyou2023_m1_minxi) return target.countGainableCards(player, 'he') && target.countCards('h') >= player.countCards('h');
                                    else return target.countCards('h') <= player.countCards('h');
                                },
                                selectTarget: function () {
                                    var player = _status.event.player,
                                        num = (player.getStat('skill').qunyou2023_m1_minxi || 0) + 1;
                                    return num;
                                },
                                content: function () {
                                    'step 0'
                                    event.num = targets.length;
                                    'step 1'
                                    event.target = targets[targets.length - event.num];
                                    if (!event.target.hasSkill('qunyou2023_m1_minxi_used')) event.target.addTempSkill('qunyou2023_m1_minxi_used');
                                    else player.addTempSkill('qunyou2023_m1_minxi_disable');
                                    if (player.storage.qunyou2023_m1_minxi) player.gainPlayerCard('获得' + get.translation(event.target) + '一张牌', event.target, 'he', true);
                                    else player.chooseCard(true, 'h', '交给' + get.translation(event.target) + '一张牌');
                                    'step 2'
                                    if (result.cards && !player.storage.qunyou2023_m1_minxi) player.give(result.cards, event.target);
                                    if (--event.num > 0) event.goto(1);
                                    'step 3'
                                    player.changeZhuanhuanji('qunyou2023_m1_minxi');
                                    if (!player.hasSkill('qunyou2023_m1_minxi_disable')) event.finish();
                                    'step 4'
                                    var list = [];
                                    for (var j of lib.inpile) {
                                        if (get.type(j) == 'trick' && !get.tag({
                                                name: j,
                                                isCard: true
                                            }, 'damage')) list.push(j);
                                    };
                                    var next = player.chooseButton(['你可以视为使用一张非伤害类锦囊牌，并可为这张牌增加或减少至多' + (player.getStat('skill').qunyou2023_m1_minxi || 0) + '个目标', [list, 'vcard']]);
                                    next.set('filterButton', function (button) {
                                        return player.hasUseTarget({
                                            name: button.link[2]
                                        });
                                    });
                                    'step 5'
                                    if (result.links[0][2]) {
                                        lib.skill.qunyou2023_m1_minxi_x.viewAs = {
                                            name: result.links[0][2],
                                            isCard: true
                                        };
                                        lib.skill.qunyou2023_m1_minxi_x.prompt = '视为使用一张' + get.translation(result.links[0][2]);
                                        var next = player.chooseToUse();
                                        next.logSkill = 'qunyou2023_m1_minxi';
                                        next.set('norestore', true);
                                        next.set('_backupevent', 'qunyou2023_m1_minxi_x');
                                        next.backup('qunyou2023_m1_minxi_x');
                                    };
                                },
                                group: ['qunyou2023_m1_minxi_targets'],
                                subSkill: {
                                    targets: {
                                        trigger: {
                                            player: ["useCard2"],
                                        },
                                        direct: true,
                                        filter: function (event, player) {
                                            return !get.info(event.card).notarget && event.skill == 'qunyou2023_m1_minxi_x';
                                        },
                                        content: function () {
                                            'step 0'
                                            event.num = player.getStat('skill').qunyou2023_m1_minxi || 0;
                                            'step 1'
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
                                                player.chooseTarget('是否增加至多' + event.num + '名' + get.translation(trigger.card) + '的目标？', [1, event.num], function (card, player, target) {
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
                                                    event.goto(4);
                                                }
                                            }
                                            'step 2'
                                            if (result.bool) {
                                                if (!event.isMine()) game.delayx();
                                                event.targets = result.targets;
                                            } else {
                                                event.goto(4);
                                            }
                                            'step 3'
                                            if (event.targets) {
                                                player.logSkill('qunyou2023_m1_minxi', event.targets);
                                                trigger.targets.addArray(event.targets);
                                            }
                                            event.finish();
                                            'step 4'
                                            player.chooseTarget('是否减少至多' + event.num + '名' + get.translation(trigger.card) + '的目标？', [1, event.num], function (card, player, target) {
                                                return _status.event.targets.contains(target);
                                            }).set('ai', function (target) {
                                                var trigger = _status.event.getTrigger();
                                                return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                            }).set('targets', trigger.targets);
                                            'step 5'
                                            if (result.bool) {
                                                event.targets = result.targets;
                                                if (event.isMine()) {
                                                    player.logSkill('qunyou2023_m1_minxi', event.targets);
                                                    event.finish();
                                                };
                                                for (var i = 0; i < result.targets.length; i++) {
                                                    trigger.targets.remove(result.targets[i]);
                                                };
                                                game.delay();
                                            } else {
                                                event.finish();
                                            };
                                            'step 6'
                                            player.logSkill('qunyou2023_m1_minxi', event.targets);
                                        },
                                    },
                                    x: {
                                        filterCard: function () {
                                            return false
                                        },
                                        selectCard: -1,
                                        popname: true,
                                        sub: true,
                                    },
                                    disable: {
                                        mark: true,
                                        intro: {
                                            content: "〖" + get.translation("qunyou2023_m1_minxi") + "〗失效",
                                        },
                                        sub: true,
                                    },
                                    used: {
                                        mark: true,
                                        intro: {
                                            content: "本回合已被指定为〖" + get.translation("qunyou2023_m1_minxi") + "〗的目标",
                                        },
                                        sub: true,
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
                                audio: ["guanxing_re_jiangwei", 2],
                                trigger: {
                                    global: ["dying"],
                                },
                                limited: true,
                                unique: true,
                                mark: true,
                                intro: {
                                    content: "limited",
                                },
                                skillAnimation: true,
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
                                content: function () {
                                    'step 0'
                                    player.storage.qunyou2023_m2_huzhen_recover = trigger.player;
                                    if (!player.countCards('h')) event.finish();
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
                                ai: {
                                    threaten: 1.2,
                                },
                                group: ["qunyou2023_m2_huzhen_recover"],
                                subSkill: {
                                    recover: {
                                        trigger: {
                                            player: "qunyou2023_m2_huzhenAfter",
                                        },
                                        direct: true,
                                        init: function (player) {
                                            if (!player.storage.qunyou2023_m2_huzhen_recover) player.storage.qunyou2023_m2_huzhen_recover = [];
                                        },
                                        content: function () {
                                            "step 0"
                                            player.judge(function (card) {
                                                return (get.suit(card) == 'heart') ? 3 : -2
                                            });
                                            "step 1"
                                            event.player = player.storage.qunyou2023_m2_huzhen_recover;
                                            if (result.suit == "heart") event.player.recover(event.player.maxHp - event.player.hp);
                                            player.awakenSkill("qunyou2023_m2_huzhen");
                                        },
                                        sub: true,
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
                                    player.chooseToDiscard(str,"he");
                                    "step 1"
                                    if(!result.bool) event.finish();
                                    "step 2"
                                    player.removeMark("qunyou2023_m2_liezui",1);
                                    player.logSkill("qunyou2023_m2_liezui");
                                    if(trigger.source){
                                        var list = [];
                                        for (var i of lib.inpile_nature) list.push(['基本', '', 'sha', i]);
                                        player.chooseButton(['猎罪：视为对' + get.translation(trigger.source) + '使用一张属性【杀】</div>', [list, 'vcard']]).set('ai', function (button) {
                                            var card = {
                                                    name: button.link[2],
                                                    nature: button.link[3],
                                                    isCard: true,
                                                },
                                                player = _status.event.player,
                                                target = _status.event.getTrigger().player;
                                            return get.effect(target, card, player, player);
                                        });
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
                                content:function(){
                                    'step 0'
                                    var list=[];
                                    for(var i of lib.inpile){
                                        if(player.storage.qunyou2023_m2_yongfa_card.contains(i)) continue;
                                        var info=lib.card[i];
                                        if(info.type=='trick'&&!get.tag({name: i, isCard: true}, 'multitarget')&&!info.notarget) list.push(['锦囊','',i]);
                                    };
                                    var next=player.chooseButton([get.translation('qunyou2023_m2_yongfa'),[list,'vcard']]);
                                    next.set('filterButton',function (button) {
                                        return player.hasUseTarget({name:button.link[2],isCard:true},false);
                                    });
                                    'step 1'
                                    if(!result.links[0][2]) event.finish();
                                    event.name==result.links[0][2]
                                    player.chooseUseTarget(result.links[0][2],'nodistance');
                                    'step 2'
                                    if(result.bool){
                                        player.logSkill("qunyou2023_m2_yongfa");
                                        player.removeMark("qunyou2023_m2_yongfa",1);
                                        player.storage.qunyou2023_m2_yongfa_card.push(result.links[0][2]);
                                    };
                                },
                                group:["qunyou2023_m2_yongfa_card"],
                                subSkill:{
                                    card:{
                                        trigger: {
                                            player: "phaseAfter",
                                        },
                                        init:function (player) {
                                            player.storage.qunyou2023_m2_yongfa_card=[];
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
                                    player.chooseToDisable().set('ai', function (event, player, list) {
                                        if (list.contains('equip2')) return 'equip2';
                                        if (list.contains('equip1') && (player.countCards('h', function (card) {
                                                return get.name(card, player) == 'sha' && player.hasUseTarget(card);
                                            }) - player.getCardUsable('sha')) > 1) return 'equip1';
                                        if (list.contains('equip5') && player.countCards('h', function (card) {
                                                return get.type2(card, player) == 'trick' && player.hasUseTarget(card);
                                            }) > 1) return 'equip5';
                                    });
                                    "step 1"
                                    player.recover(player.maxHp - player.hp);
                                    var num=0;
                                    for(var i=1;i<6;i++){
                                        if(player.isDisabled(i)) num++;
                                    };
                                    player.draw(num);
                                    player.chooseControl(["获得一个【猎罪】标记","获得一个【永罚】标记"]).set('ai',function(){
                                        if(player==_status.currentPhase) return "获得一个【永罚】标记";
                                        return "获得一个【猎罪】标记";
                                    });
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
                        },
                        translate: {
                            // 分组部分
                            "yuandan": "<span style='font-family: yuanli'>元旦活动将</span>",
                            "month1": "<span style='font-family: yuanli'>1月正常将</span>",
                            "month2": "<span style='font-family: yuanli'>2月正常将</span>",


                            // 武将部分
                            //yd
                            "qunyou2023_yd_huangyueying": "黄月英",
                            "qunyou2023_yd_qun_huangyueying": "群黄月英",
                            "qunyou2023_yd_luzhi": "卢植",
                            "qunyou2023_yd_xiefuren": "谢夫人",
                            "qunyou2023_yd_weidan": "韦诞",
                            "qunyou2023_yd_xietiao": "谢窕",
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
                            "qunyou2023_yd_piaomiao_info": "当你进入濒死状态时，你可选择一个未选择的花色无法使用，然后摸两张牌并将体力恢复至3。若你有一种颜色的牌无法使用，你获得〖翠枝〗并增加一点体力上限；若你所有花色均无法使用，你减少2点体力上限取消所有用牌限制。(此技能无法被锁定)",
                            "qunyou2023_yd_yunque": "云雀",
                            "qunyou2023_yd_yunque_info": "结束阶段，你可依据本回合使用的花色数依次发动以下效果：1、弃置场上一张牌；2、令一名角色回复一点体力；3、摸等同于自身体力上限的牌,然后进入濒死状态。",
                            "qunyou2023_yd_cuizhi": "翠枝",
                            "qunyou2023_yd_cuizhi_info": "其他角色造成伤害后，若你手牌数不多于其，你获得其一张牌；若你体力值不多于其，其流失一点体力，你回复一点体力。",

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
                        },
                    };
                    if (lib.device || lib.node) {
                        for (var i in qunyou2023.character) qunyou2023.character[i][4].push('ext:群友DIY/image/character/' + i + '.jpg');
                    } else {
                        for (var i in qunyou2023.character) qunyou2023.character[i][4].push('db:extension-群友DIY/image/character:' + i + '.jpg');
                    }
                    return qunyou2023;
                });
                lib.config.all.characters.push('qunyou2023');
                if (!lib.config.characters.contains('qunyou2023')) lib.config.characters.remove('qunyou2023');
                lib.translate['qunyou2023_character_config'] = '<span width="78" height="25">群友DIY2023</span>';

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