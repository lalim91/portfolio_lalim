/**
 * Created by Lalim on 2/12/16.
 */
var skillManager = function(element){//this is the skill manager
    var self = this;
    this.element = $(element);
    var skills = [];

    this.create_skill = function(text, class_name){
        var new_skill = new skillGenerator(text, class_name);
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
var skillGenerator = function(text, class_attr){ //this is the individual skill
    var self =this;
    self.skill_element= null;
    self.text=text;
    self.class_attr=class_attr;
    this.renderSelf = function(){
        self.skill_element = $('<div>').text(self.text).addClass('skills ' + self.class_attr);

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

};

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
    sm = new skillManager('.tree');
    sm.create_skill('HTML','html');
    sm.create_skill('CSS3','css');
    sm.create_skill('Bootstrap','boot');
    sm.create_skill('JavaScript','js');
    sm.create_skill('jQuery','jq');
    sm.create_skill('Angular','angular');
    sm.create_skill('Git','git');
    sm.create_skill('Github','gh');

    sm.render_skills();

    email.getAddress('leslieannlim','gmail.com');
    phone.getPhone('714','321','0309');
});