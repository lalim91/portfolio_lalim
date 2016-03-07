/**
 * Created by Lalim on 2/12/16.
 */

var skillGenerator = function(text){
    var self =this;
    this.text = text;
    this.skill = $('<div>').text(this.text).addClass('htmlskill').click(function(){self.animateSkills()});
    this.appendSkills= function(){
        $('#skill').append(this.skill);
    };
    this.animateSkills = function(){
        $(this.skill).animate({
            right:'250px',
            height:'150px',
            width: '150px'
        });
    };
};
var x= new skillGenerator('CSS');
var y = new skillGenerator('JavaScript');


$(document).ready(function(){
    x.appendSkills();
    y.appendSkills();
});


var personInfoGenerator = function(){


};


