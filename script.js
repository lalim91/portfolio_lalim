/**
 * Created by Lalim on 2/12/16.
 */
var skillManager = function(element){//this is the skill manager
    var self = this;
    this.element = $(element);
    var skills = [];

    this.create_skill = function(text, class_name, side, desVar){
        var new_skill = new skillGenerator(text, class_name, side, desVar);
        skills.push(new_skill);
    };
    this.render_skills = function(){
        for(var i in skills){
            var element = skills[i].renderSelf();
            this.element.append(element);
        }
    };
    this.log_skills = function() {
        console.log(skills);
    };
};
var skillGenerator = function(text, class_attr, side, desVar){ //this is the individual skill
    var self =this;
    this.text;
    self.skill_element;
    self.desVar=desVar;
    self.side=side;
    self.text=text;
    self.class_attr=class_attr;
    this.renderSelf = function(text, attr){
        self.skill_element = $('<div>').text(self.text).addClass('skills ' + self.class_attr + ' ' + self.side);

        self.skill_element.click(function(){
            self.click_handler();
            self.description();
        });
        return self.skill_element;
    };
    this.click_handler = function(){
        console.log('I was clicked on element',this.skill_element);
        $('.drop').removeClass('drop');
        this.skill_element.addClass('drop');
    };
    this.description = function(){
        if(this.skill_element.hasClass('left_side')){
            $('.right').css('visibility','hidden').html('');
            $('.left').css('visibility','visible').html('').append(self.desVar);
        }else if(this.skill_element.hasClass('right_side')){
            $('.left').css('visibility','hidden').html('');
            $('.right').css('visibility','visible').html('').append(self.desVar);
        }
    }
};


var html_des = $('<div>',{
    text:"Html5 was the first language I learn... and there was no going back!",
    class:'side_text'
});
var css_des = $('<div>',{
    text:".leslie{height:78px}",
    class:'side_text'
});
var boot_des = $('<div>',{
    text:"I created the Student Grade Table completely in bootstrap, and most of mBoutique.",
    class:'side_text'
});
var js_des = $('<div>',{
    text:"Learning JavaScript rewired my brain to think differently",
    class:'side_text'
});
var jq_des = $('<div>',{
    text:"I am more comfortable using  jQuery. Avatar Training was my first project using dynamically created elements. ",
    class:'side_text'
});
var angular_des = $('<div>',{
    text:"I used angular in the Student Grade Table, LFZ Quiz, and use it in Mboutique to switch languages.",
    class:'side_text'
});
var git_des = $('<div>',{
    text:"I am familiar with Git commands. ",
    class:'side_text'
});
var gh_des = $('<div>',{
    text:"I am familiar with Github and have collaborated with others on The Student Grade Table, Swash Buck Toe, VineTunes, and LFZ Quiz",
    class:'side_text'
});



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
var sm;

$(document).ready(function(){

    $('.left').css('visibility','hidden');
    $('.right').css('visibility','hidden');
    sm = new skillManager('.mid');
    sm.create_skill('HTML','html','left_side',html_des);
    //sm.create_skill(skill_data['html']);
    sm.create_skill('CSS3','css','left_side', css_des);
    sm.create_skill('Bootstrap','boot','right_side',boot_des);
    sm.create_skill('JavaScript','js','right_side', js_des);
    sm.create_skill('jQuery','jq','right_side',jq_des);
    sm.create_skill('Angular','angular','left_side',angular_des);
    sm.create_skill('Git','git','left_side',git_des);
    sm.create_skill('Github','gh','right_side',gh_des);

    sm.render_skills();

    email.getAddress('leslieannlim','gmail.com');
    phone.getPhone('714','321','0309');
});