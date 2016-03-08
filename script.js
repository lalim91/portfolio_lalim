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





var personInfoGenerator = function(){
    this.getAddress=function(name,site){
        $('#emailBeg').text(name);
        $('#emailEnd').text(site);
    };
    this.getPhone= function(first, second, third){
        $('#phoneArea').text(first);
        $('#phoneThree').text(second);
        $('#phoneFour').text(third);
    }

};

var email = new personInfoGenerator();
var phone = new personInfoGenerator();


$(document).ready(function(){
    x.appendSkills();
    y.appendSkills();
    email.getAddress('leslieannlim','gmail.com');
    phone.getPhone('714','321','0309');
});