/**
 * Created by Lalim on 2/12/16.
 */

var skillGenerator = function(text, para){
    var self =this;
    this.text = text;
    this.skill = $('<div>').text(this.text).addClass('skills ' + para).click(function(){self.animateSkills()});
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
var html = new skillGenerator('HTML5');
var CSS = new skillGenerator('CSS3');
var bootstrap = new skillGenerator('Bootstrap');
var JS = new skillGenerator('JavaScript');
var JQ = new skillGenerator('jQuery');
var angular =new skillGenerator('Angular');
var git = new skillGenerator('Git');
var GH = new skillGenerator('Github');






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
    html.appendSkills();
    CSS.appendSkills();
    bootstrap.appendSkills();
    JS.appendSkills();
    JQ.appendSkills();
    angular.appendSkills();
    git.appendSkills();
    GH.appendSkills();
    email.getAddress('leslieannlim','gmail.com');
    phone.getPhone('714','321','0309');
});