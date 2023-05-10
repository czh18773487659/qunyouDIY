game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "群友DIY",
        editable: false,
        content: function (config, pack) {
            
            /*评级*/ {

                /*qunyou2022*/ {
                    if (lib.rank.rarity.junk) {
                        lib.rank.rarity.junk.addArray([
                            "qunyou2022_yuejiyuanshuai", "qunyou2022_midangdawang", "qunyou2022_sp_linghu", "qunyou2022_pengtuo", "qunyou2022_zhandisi",
                        ]);
                    };
                    if (lib.rank.rarity.common) {
                        lib.rank.rarity.common.addArray([
                            "qunyou2022_dengzhi", "qunyou2022_lijueguosi", "qunyou2022_jinhuansanjie", "qunyou2022_wangyun", "qunyou2022_mengjie", "qunyou2022_dongtuna", "qunyou2022_mizhu", "qunyou2022_jinxianggongzhu", "qunyou2022_laoba", "qunyou2022_sp_xuchu", "qunyou2022_sp_xuchu", "qunyou2022_xiaoqiao", "qunyou2022_zhangbiao", "qunyou2022_wenqiao", "qunyou2022_huangwudie", "qunyou2022_re_zhanghe", "qunyou2022_liubei", "qunyou2022_suibian", "qunyou2022_sunjun", "qunyou2022_simazhi", "qunyou2022_langxiongdi", "qunyou2022_bolilingmeng", "qunyou2022_gesi", "qunyou2022_longcuigongzhu", "qunyou2022_sunnichang",
                        ]);
                    };
                    if (lib.rank.rarity.rare) {
                        lib.rank.rarity.rare.addArray([
                            "qunyou2022_liuba", "qunyou2022_mengyue", "qunyou2022_jiangwei", "qunyou2022_re_guohuai", "qunyou2022_shihuan", "qunyou2022_xiahoushi", "qunyou2022_chunaizhanshen", "qunyou2022_zixushangren", "qunyou2022_zhangxi",
                        ]);
                    };
                    if (lib.rank.rarity.epic) {
                        lib.rank.rarity.epic.addArray([
                            "qunyou2022_yangfu", "qunyou2022_re_sunce", "qunyou2022_yuanxi", "qunyou2022_taotieyoumo", "qunyou2022_jingxiang_zhangjiao", "qunyou2022_huzhao", "qunyou2022_tengyin", "qunyou2022_tenggongzhu", "qunyou2022_zibaoerhao",
                        ]);
                    };
                    if (lib.rank.rarity.legend) {
                        lib.rank.rarity.legend.addArray([
                            "qunyou2022_luxun1", "qunyou2022_luxun2", "qunyou2022_wujie", "qunyou2022_huanfuren",
                        ]);
                    };
                }

                /*qunyou2023*/ {
                    if (lib.rank.rarity.junk) {
                        lib.rank.rarity.junk.addArray([
                            /*yd*/
                            /*yrj*/ 
                            /*m1*/
                            /*m2*/
                            /*m3*/ "qunyou2023_m3_yitakuya", 
                            /*m4*/
                        ]);
                    };
                    if (lib.rank.rarity.common) {
                        lib.rank.rarity.common.addArray([
                            /*yd*/ "qunyou2023_yd_xiefuren", 
                            /*yrj*/ "qunyou2023_yrj_shuangtoushirenmo", 
                            /*m1*/
                            /*m2*/ "qunyou2023_m2_qifu_zhangliao", 
                            /*m3*/ "qunyou2023_m3_heiyukuaidou", "qunyou2023_m3_feicunjianxin", "qunyou2023_m3_jiaxu", 
                            /*m4*/
                        ]); 
                    };
                    if (lib.rank.rarity.rare) {
                        lib.rank.rarity.rare.addArray([
                            /*yd*/
                            /*yrj*/ "qunyou2023_yrj_shen_zhanghe", "qunyou2023_yrj_caoanyang", 
                            /*m1*/ "qunyou2023_m1_caozhang", 
                            /*m2*/ "qunyou2023_m2_liubei", "qunyou2023_m2_dailaidongzhu", "qunyou2023_m2_aerwa", 
                            /*m3*/ "qunyou2023_m3_caocao", "qunyou2023_m3_liubei", "qunyou2023_m3_hongxia", 
                            /*m4*/ "qunyou2023_m4_sp_zhugeliang", 
                        ]);
                    };
                    if (lib.rank.rarity.epic) {
                        lib.rank.rarity.epic.addArray([
                            /*yd*/ "qunyou2023_yd_weidan", "qunyou2023_yd_luzhi",
                            /*yrj*/ 
                            /*m1*/ "qunyou2023_m1_pujing", "qunyou2023_m1_fengji", "qunyou2023_m1_donghe",
                            /*m2*/ "qunyou2023_m2_jiangwei", "qunyou2023_m2_aogusiting",
                            /*m3*/ "qunyou2023_m3_shen_zhugeliang", "qunyou2023_m3_diaochan", 
                            /*m4*/ "qunyou2023_m4_shen_machao", 
                        ]);
                    };
                    if (lib.rank.rarity.legend) {
                        lib.rank.rarity.legend.addArray([
                            /*yd*/ "qunyou2023_yd_huangyueying", "qunyou2023_yd_qun_huangyueying", "qunyou2023_yd_xietiao", 
                            /*yrj*/ "qunyou2023_yrj_wenmang", 
                            /*m1*/ "qunyou2023_m1_gansidui", "qunyou2023_m1_mou_zhanghe", 
                            /*m2*/
                            /*m3*/ "qunyou2023_m3_zhangti", "qunyou2023_m3_caoanyang", "qunyou2023_m3_caoqingming", "qunyou2023_m3_sb_guojia", 
                            /*m4*/ "qunyou2023_m4_shangshanhuiliyi", 
                        ]);
                    };
                }

                /*kuangshen*/ {
                    if (lib.rank.rarity.junk) {
                        lib.rank.rarity.junk.addArray([
                            /*refresh*/
                            /*fengheguai*/
                            /*boss*/
                        ]);
                    };
                    if (lib.rank.rarity.common) {
                        lib.rank.rarity.common.addArray([
                            /*refresh*/
                            /*fengheguai*/
                            /*boss*/
                        ]);
                    };
                    if (lib.rank.rarity.rare) {
                        lib.rank.rarity.rare.addArray([
                            /*refresh*/ "ks_re_gaoshun","ks_re_menghuo","ks_re_xunyou",
                            /*fengheguai*/
                            /*boss*/
                        ]);
                    };
                    if (lib.rank.rarity.epic) {
                        lib.rank.rarity.epic.addArray([
                            /*refresh*/ "ks_re_shen_zhangjiao","ks_re_caoren",
                            /*fengheguai*/ "ks_fh_shen_huanggai","ks_fh_guanzhang",
                            /*boss*/
                        ]);
                    };
                    if (lib.rank.rarity.legend) {
                        lib.rank.rarity.legend.addArray([
                            "ks_1", 
                            /*refresh*/
                            /*fengheguai*/ "ks_fh_hezhuran",
                            /*boss*/ "ks_boss_huanggai","ks_boss_zhangchunhua",
                        ]);
                    };
                }
                
            }



            //自动开启武将包
            if(!lib.config.extension_群友DIY_init){
                game.saveConfig('extension_群友DIY_init',true);
                game.saveConfig('characters',lib.config.characters.concat('qunyou2022'));
                game.saveConfig('characters',lib.config.characters.concat('qunyou2023'));
                game.saveConfig('characters',lib.config.characters.concat('kuangshen'));
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



            /*自定义函数*/ {
                /*qunyou_chooseNumber*/ {
                    lib.element.player.qunyou_chooseNumber = function(range){
                        var next=game.createEvent('chooseNumber');
                        next.player=this;
                        next.range=range.slice(0);
                        next.setContent('chooseNumber');					
                        for(var i=1;i<arguments.length;i++){
                            if(typeof arguments[i]=='string'){
                                if(!next.prompt) next.prompt=arguments[i];
                                else next.prompt2=arguments[i];
                            }
                            else if(typeof arguments[i]=='function'){
                                next.processAI=arguments[i];
                            }
                            else if(typeof arguments[i]=='number'){
                                if(!next.init) next.init=arguments[i];
                                else next.base=arguments[i];
                            }
                            else if(typeof arguments[i]=='boolean'){
                                next.forced=arguments[i];
                            }    
                        };
                        return next;
                    };
                    lib.element.content.qunyou_chooseNumber = function () {
                        'step 0'
                        var chooseButton = function (event) {
                            event.number = event.init || event.range[0];
                            var baseNumber = event.base || 1;
                            if (!event.result) event.result = { num: event.number, bool: false };
                            var dialog = ui.create.dialog(event.prompt || '选择一个数值', 'hidden');
                            dialog.addText(event.prompt2 || '点击加减以调整数值大小');
                            event.dialog = dialog;
                    
                            var table = document.createElement('div');
                            table.classList.add('add-setting');
                            table.style.margin = '0';
                            table.style.width = '100%';
                            table.style.position = 'relative';
                    
                            /*toMin*/{
                                var toMin = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                table.appendChild(toMin);
                                toMin.innerHTML = '<span>最小</span>';
                                if (event.number == event.range[0]) toMin.classList.add('bluebg');
                                toMin.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                    if (_status.dragged) return;
                                    if (_status.justdragged) return;
                                    _status.tempNoButton = true;
                                    setTimeout(function () {
                                        _status.tempNoButton = false;
                                    }, 500);
                                    if (event.number == event.range[0]) {
                                        return;
                                    } else {
                                        var disable = this.parentNode.querySelectorAll('.bluebg');
                                        if (disable.length) for (var node of disable) node.classList.remove('bluebg');
                                        event.number = event.range[0];
                                        log.innerHTML = '<span>' + event.number + '</span>';
                                        if (event.number == event.range[0]) {
                                            reduce.classList.add('bluebg');
                                            this.classList.add('bluebg');
                                        }
                                    }
                                });
                            }
                    
                            /*reduce*/{
                                var reduce = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                table.appendChild(reduce);
                                reduce.innerHTML = '<span>-</span>';
                                if (event.number == event.range[0]) reduce.classList.add('bluebg');
                                reduce.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                    if (_status.dragged) return;
                                    if (_status.justdragged) return;
                                    _status.tempNoButton = true;
                                    setTimeout(function () {
                                        _status.tempNoButton = false;
                                    }, 500);
                                    if (event.number == event.range[0]) {
                                        return;
                                    } else {
                                        var disable = this.parentNode.querySelectorAll('.bluebg');
                                        if (disable.length) for (var node of disable) node.classList.remove('bluebg');
                                        event.number = Math.max(event.range[0], event.number - baseNumber);
                                        log.innerHTML = '<span>' + event.number + '</span>';
                                        if (event.number == event.range[0]) {
                                            toMin.classList.add('bluebg');
                                            this.classList.add('bluebg');
                                        }
                                    }
                    
                                });
                            }
                    
                            /*log*/{
                                var log = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                table.appendChild(log);
                                log.innerHTML = '<span>' + event.number + '</span>';
                            }
                    
                            /*plus*/{
                                var plus = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                table.appendChild(plus);
                                plus.innerHTML = '<span>+</span>';
                                if (event.number == event.range[1]) plus.classList.add('bluebg');
                                plus.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                    if (_status.dragged) return;
                                    if (_status.justdragged) return;
                                    _status.tempNoButton = true; setTimeout(function () {
                                        _status.tempNoButton = false;
                                    }, 500);
                                    if (event.number == event.range[1]) {
                                        return;
                                    } else {
                                        var disable = this.parentNode.querySelectorAll('.bluebg');
                                        if (disable.length) for (var node of disable) node.classList.remove('bluebg');
                                        event.number = Math.min(event.range[1], event.number + baseNumber);
                                        log.innerHTML = '<span>' + event.number + '</span>';
                                        if (event.number == event.range[1]) {
                                            this.classList.add('bluebg');
                                            toMax.classList.add('bluebg');
                                        }
                                    }
                                });
                            }
                    
                            /*toMax*/{
                                var toMax = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                table.appendChild(toMax);
                                toMax.innerHTML = '<span>最大</span>';
                                if (event.number == event.range[1]) toMax.classList.add('bluebg');
                                toMax.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                    if (_status.dragged) return;
                                    if (_status.justdragged) return;
                                    _status.tempNoButton = true;
                                    setTimeout(function () {
                                        _status.tempNoButton = false;
                                    }, 500);
                                    if (event.number == event.range[1]) {
                                        return;
                                    } else {
                                        var disable = this.parentNode.querySelectorAll('.bluebg');
                                        if (disable.length) for (var node of disable) node.classList.remove('bluebg');
                                        event.number = event.range[1];
                                        log.innerHTML = '<span>' + event.number + '</span>';
                                        if (event.number == event.range[1]) {
                                            plus.classList.add('bluebg');
                                            this.classList.add('bluebg');
                                        }
                                    }
                                });
                            }
                            
                            dialog.content.appendChild(table);
                            dialog.addText('变化基数：' + baseNumber);
                            dialog.open();
                            var option = ['ok'];
                            if (!event.forced) option.push('cancel2');
                            event.control = ui.create.control(option, function () {
                                game.resume();
                                _status.imchoosing = false;
                            });
                            game.pause();
                            game.countChoose();
                        };
                        if (event.isMine()) {
                            chooseButton(event);
                        } else {
                            if (event.isOnline()) {
                                event.player.send(chooseButton, event);
                                event.player.wait();
                                game.pause();
                            } else {
                                if (event.dialog) event.dialog.close();
                                if (event.control) event.control.close();
                                _status.imchoosing = false;
                                event.result = event.processAI();
                                event.finish();
                            }
                        }
                        'step 1'
                        event.dialog.close();
                        event.control.close();
                        if (event.result.control == 'cancel2') {
                            event.result.bool = false;
                        } else {
                            event.result.bool = true;
                            event.result.num = event.number;
                        }
                    };
                }
            }

        },
        precontent: function (qunyouDIY) {
            if (!qunyouDIY.enable) return false;
                
            /*武将包*/ {
                var extList = [
                    'qunyou2022.js',
                    'qunyou2023.js',
                    'kuangshen.js',
                ];                    
                for (var e of extList) {
                    var extURL=lib.assetURL+'extension/群友DIY/asset/'+e;
                    lib.init.js(extURL,null,()=>{},()=>{alert('Error:'+e+'导入失败!')});
                };
            }

        },
        help: {},
        config: {
            github:{
                name:'<span class="yellowtext">本扩展已上传Github</span><font size="4px">▶▶▶</font>',
                clear:true,
                onclick: function(){
                    if(this.github==undefined){
                        var more=ui.create.div('.github','<div style="border:2px solid gray"><span><img style=width:238px src='+lib.assetURL+'extension/群友DIY/qunyouDIY_github.jpg></span>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.github=more;
                        this.innerHTML='<span class="yellowtext">本扩展已上传Github</span><font size="4px">▼▼▼</font>';
                    }else{
                        this.parentNode.removeChild(this.github);
                        delete this.github;
                        this.innerHTML='<span class="yellowtext">本扩展已上传Github</span><font size="4px">▶▶▶</font>';
                    };
                },
            },
            jiaqun:{
                name:'<span class="yellowtext">欢迎加群</span><font size="4px">▶▶▶</font>',
                clear:true,
                onclick:function(){
                    if(this.jiaqun==undefined){
                        var more=ui.create.div('.jiaqun','<div style="border:2px solid gray"><span><img style=width:238px src='+lib.assetURL+'extension/群友DIY/qunyouDIY_QQ.jpg></span>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.jiaqun=more;
                        this.innerHTML='<span class="yellowtext">欢迎加群</span><font size="4px">▼▼▼</font>';
                    }else{
                        this.parentNode.removeChild(this.jiaqun);
                        delete this.jiaqun;
                        this.innerHTML='<span class="yellowtext">欢迎加群</span><font size="4px">▶▶▶</font>';
                    };
                },
            },
        },
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
            intro: '版本号：v114.514'+
            '<br>',
            author: "群程序员<span style=\"opacity:0.75;\">&&群狂神</span>",
            diskURL: "",
            forumURL: "",
            version: "v114.514",
        },
        files: {
            "character": [],
            "card": [],
            "skill": []
        },
    }
})