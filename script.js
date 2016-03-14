/**
 * Created by Lalim on 2/12/16.
 */

var skillGenerator = function(text, attr){
    var self =this;
    this.text = text;
    this.skill = $('<div>').text(this.text).addClass('skills ' + attr);
    this.appendSkills= function(){

        $('#skill').append(this.skill);
    };
    //this.animateSkills = function(){
    //    if(attr=='html') {
    //
    //        $(self).css({
    //            'width': '20%',
    //            'height': '20%',
    //            'right': '25%'
    //        })
    //
    //    }
    //};
};
var html = new skillGenerator('HTML5', 'html');
var CSS = new skillGenerator('CSS3','css');
var bootstrap = new skillGenerator('Bootstrap','boot');
var JS = new skillGenerator('JavaScript','js');
var JQ = new skillGenerator('jQuery','jq');
var angular =new skillGenerator('Angular','angular');
var git = new skillGenerator('Git','git');
var GH = new skillGenerator('Github','gh');






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