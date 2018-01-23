angular.module('todoApp', ["smart-table", "dual-pick-list"])
    .controller('HeroListController', function() {

        var app = this;
        app.powers = [
            {id: 1, text:"Fly"},
            {id: 2, text:"Fire"},
            {id: 3, text:"Wind"},
            {id: 4, text:"Water"}
        ];
        app.items = [
            {
                left:true,
                right:false,
                cdId:1,
                descHero:"Batman",
                idPower:1,
                isActive:false
            },
            {
                left:true,
                right:false,
                cdId:2,
                descHero:"Robin",
                idPower:1,
                isActive:true
            },
            {
                left:true,
                right:false,
                cdId:3,
                descHero:"Spider-Man",
                idPower:2,
                isActive:false
            },
            {
                left:true,
                right:false,
                cdId:4,
                descHero:"Iron Man",
                idPower:4,
                isActive:false
            },
            {
                left:true,
                right:false,
                cdId:5,
                descHero:"Captain America",
                idPower:3,
                isActive:true
            },
            {
                left:true,
                right:false,
                cdId:6,
                descHero:"Daredevil",
                idPower:1,
                isActive:true

            }

        ];
        app.headerConfig ={
            left:[
                {text:"Id", key:"cdId", custom:false},
                {text:"Description", key:"descHero", custom:false,  hidden:true},
                {text:"What is power ?", key:"", custom:true, button:{onClick:function (item) {
                    var power = app.powers.find(function (itemF) {
                        return itemF.id === item.idPower
                    });
                    if(!power)
                        alert(item.descHero + " Does not have any power");
                    else
                        alert(item.descHero + " has " + power.text);
                    item.isSelected = true; // If you do not want to select the item, then you need TRUE. If you do, then you won't need this line
                }}}
            ],
            right:[
                {text:"Id", key:"cdId", custom:false,  hidden:true},
                {text:"Description", key:"descHero", custom:false},
                {text:"Power", key:"idPower", select:{list:app.powers},custom:true, hidden:true},
                {text:"Active", key:"isActive", custom:true, checkbox:true, hidden:true}

            ]
        };

        this.$onInit= function () {

        };
        this.onTransaction = function (leftList, rightList) {
            console.log(leftList);
            console.log(rightList);
        }



    });
