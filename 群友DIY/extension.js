game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "群友DIY",
        editable: false,
        content: function (config, pack) {
            
            
            //评级
            if (lib.rank.rarity.junk) {
                lib.rank.rarity.junk.addArray([
                    /*2022*/
                    "qunyou2022_yuejiyuanshuai", "qunyou2022_midangdawang", "qunyou2022_sp_linghu", "qunyou2022_pengtuo", "qunyou2022_zhandisi",
                    /*2023_yd*/
                    /*2023_m1*/
                    /*2023_m2*/
                    /*2023_m3*/
                    "qunyou2023_m3_yitakuya",
                ]);
            };
            if (lib.rank.rarity.common) {
                lib.rank.rarity.common.addArray([
                    /*2022*/
                    "qunyou2022_dengzhi", "qunyou2022_lijueguosi", "qunyou2022_jinhuansanjie", "qunyou2022_wangyun", "qunyou2022_mengjie", "qunyou2022_dongtuna", "qunyou2022_mizhu", "qunyou2022_jinxianggongzhu", "qunyou2022_laoba", "qunyou2022_sp_xuchu", "qunyou2022_sp_xuchu", "qunyou2022_xiaoqiao", "qunyou2022_zhangbiao", "qunyou2022_wenqiao", "qunyou2022_huangwudie", "qunyou2022_re_zhanghe", "qunyou2022_liubei", "qunyou2022_suibian", "qunyou2022_sunjun", "qunyou2022_simazhi", "qunyou2022_langxiongdi", "qunyou2022_bolilingmeng", "qunyou2022_gesi", "qunyou2022_longcuigongzhu", "qunyou2022_sunnichang",
                    /*2023_yd*/
                    "qunyou2023_yd_xiefuren",
                    /*2023_m1*/
                    /*2023_m2*/
                    "qunyou2023_m2_qifu_zhangliao",
                    /*2023_m3*/
                    "qunyou2023_m3_heiyukuaidou","qunyou2023_m3_feicunjianxin","qunyou2023_m3_jiaxu",
                ]);
            };
            if (lib.rank.rarity.rare) {
                lib.rank.rarity.rare.addArray([
                    /*2022*/
                    "qunyou2022_liuba", "qunyou2022_mengyue", "qunyou2022_jiangwei", "qunyou2022_re_guohuai", "qunyou2022_shihuan", "qunyou2022_xiahoushi", "qunyou2022_chunaizhanshen", "qunyou2022_zixushangren", "qunyou2022_zhangxi",
                    /*2023_yd*/
                    /*2023_m1*/
                    "qunyou2023_m1_caozhang",
                    /*2023_m2*/
                    "qunyou2023_m2_liubei", "qunyou2023_m2_dailaidongzhu","qunyou2023_m2_aerwa", 
                    /*2023_m3*/
                    "qunyou2023_m3_caocao","qunyou2023_m3_liubei","qunyou2023_m3_hongxia",
                ]);
            };
            if (lib.rank.rarity.epic) {
                lib.rank.rarity.epic.addArray([
                    /*2022*/
                    "qunyou2022_yangfu", "qunyou2022_re_sunce", "qunyou2022_yuanxi", "qunyou2022_taotieyoumo", "qunyou2022_jingxiang_zhangjiao", "qunyou2022_huzhao", "qunyou2022_tengyin", "qunyou2022_tenggongzhu", "qunyou2022_zibaoerhao",
                    /*2023_yd*/
                    "qunyou2023_yd_weidan", "qunyou2023_yd_luzhi",
                    /*2023_m1*/
                    "qunyou2023_m1_pujing", "qunyou2023_m1_fengji", "qunyou2023_m1_donghe",
                    /*2023_m2*/
                    "qunyou2023_m2_jiangwei","qunyou2023_m2_aogusiting",
                    /*2023_m3*/
                    "qunyou2023_m3_shen_zhugeliang",
                ]);
            };
            if (lib.rank.rarity.legend) {
                lib.rank.rarity.legend.addArray([
                    /*2022*/
                    "qunyou2022_luxun1", "qunyou2022_luxun2", "qunyou2022_wujie", "qunyou2022_huanfuren",
                    /*2023_yd*/
                    "qunyou2023_yd_huangyueying", "qunyou2023_yd_qun_huangyueying", "qunyou2023_yd_xietiao",
                    /*2023_m1*/
                    "qunyou2023_m1_gansidui", "qunyou2023_m1_mou_zhanghe",
                    /*2023_m2*/
                    /*2023_m3*/
                    "qunyou2023_m3_zhangti","qunyou2023_m3_caoanyang","qunyou2023_m3_caoqingming","qunyou2023_m3_sb_guojia","qunyou2023_m3_diaochan",
                ]);
            };



            //开启武将包
            if(!lib.config.extension_群友DIY_init){
                game.saveConfig('extension_群友DIY_init',true);
                game.saveConfig('characters',lib.config.characters.concat('qunyou2022'));
                game.saveConfig('characters',lib.config.characters.concat('qunyou2023'));
            };



            //阵亡配音
            lib.skill._qunyouDieAudio = {
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
        precontent: function (qunyouDIY) {
            if (qunyouDIY.enable) {

                //qunyou2022
                lib.init.js(lib.assetURL + 'extension/群友DIY/asset/qunyou2022.js', null);
                lib.config.all.characters.push('qunyou2022');
                if (!lib.config.characters.contains('qunyou2022')) lib.config.characters.remove('qunyou2022');
                lib.translate['qunyou2022_character_config'] = "群友2022";

                //qunyou2023
                lib.init.js(lib.assetURL + 'extension/群友DIY/asset/qunyou2023.js', null);
                lib.config.all.characters.push('qunyou2023');
                if (!lib.config.characters.contains('qunyou2023')) lib.config.characters.remove('qunyou2023');
                lib.translate['qunyou2023_character_config'] = "群友2023";

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
            version: "114514.1919810",

        },
        files: {
            "character": [],
            "card": [],
            "skill": []
        },
    }
})