/**
 * Created by Lalim on 2/12/16.
 */

var input = function dynamic(text){
    this.text = text;
    this.skill = $('<div>').text(this.text).addClass('htmlskill');
    this.placeskill= function(){
        $('#container').append(this.skill);
    };
    this.animateskill = function(){
        $(this.skill).animate({
            right:'10px',
            top:'20px'
        });
    };
};

var x= new input('CSS');//.placeskill();
var y = new input('JavaScript');//.placeskill();
x.placeskill();
y.placeskill();
//x.animateskill();
//y.animateskill();



$(document).ready(function(){
    $('.htmlskill').on('click',function(){
        console.log('click is working!');
        $(this).animateskill();
    });
});





