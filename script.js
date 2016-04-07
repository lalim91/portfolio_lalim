/**
 * Created by Lalim on 2/12/16.
 */
var skillManager = function (tree,cherry) {//this is the skill manager
    var self = this;
    this.treeElement = $(tree);
    this.cherryElement = $(cherry);
    var skills = [];
    var dev = [];
    var skill_text = "";

    this.create_skill = function (text, class_name) {
        skill_text = text;
        var new_skill = new skillGenerator(text, class_name);
        skills.push(new_skill);

    };
    this.create_dev = function (text, class_name) {
        skill_text = text;
        var new_skill = new skillGenerator(text, class_name);
        dev.push(new_skill);
    };

    this.render_dev = function(text,class_name){
        for (var i in dev) {
            var element = dev[i].renderSelf().addClass('devs');
            this.cherryElement.append(element);
            $('#treebtn').on('click',function () {
                console.log('I was clicked');
                $('.devs').show().addClass('devSkills');
            })
        }
    };

    this.render_skills = function () {
        for (var i in skills) {
            var element = skills[i].renderSelf().addClass('lang');
            this.treeElement.append(element);
            $('#treebtn').on('click',function () {
                console.log('I was clicked');
                $('.lang').show().addClass('skills');
            })
        }
    };

    this.log_skills = function () {
        console.log(skills);
    };
};
var skillGenerator = function (text, class_attr) { //this is the individual skill
    var self_sg = this;
    self_sg.skill_element = null;
    self_sg.text = text;
    self_sg.class_attr = class_attr;
    this.renderSelf = function () {
        self_sg.skill_element = $('<div>').text(self_sg.text).addClass(self_sg.class_attr).css('display', 'none');

        self_sg.skill_element.click(function () {
            if(self_sg.skill_element.hasClass('lang')){
                self_sg.addDrop();
            }else if ( self_sg.skill_element.hasClass('devs')){
                self_sg.addFloat();
            }
        });
        return self_sg.skill_element;
    };
    this.addDrop = function () {
        console.log('I was clicked on element', this.skill_element);
        $('.drop').removeClass('drop');
        self_sg.skill_element.addClass('drop');
    };
    this.addFloat = function (){
        console.log('I was clicked on element', this.skill_element);
        $('.float').removeClass('float');
        self_sg.skill_element.addClass('float');
    }

};

var personInfoGenerator = function () {
    this.getAddress = function (name, site) {
        $('#emailBeg').text(name);
        $('#emailEnd').text(site);
    };
    this.getPhone = function (first, second, third) {
        $('#phoneArea').text(first);
        $('#phoneThree').text(second);
        $('#phoneFour').text(third);
    }

};

var email = new personInfoGenerator();
var phone = new personInfoGenerator();
var sm;

$(document).ready(function () {
    sm = new skillManager('.tree','.cherry');
    sm.create_skill('HTML', 'html');
    sm.create_skill('CSS3', 'css');
    sm.create_skill('Bootstrap', 'boot');
    sm.create_skill('JavaScript', 'js');
    sm.create_skill('jQuery', 'jq');
    sm.create_skill('Angular', 'angular');
    sm.create_skill('Firebase','fb');
    sm.create_skill('AJAX','aj');
    sm.create_dev('Chrome','dt');
    sm.create_dev('Sublime','sub');
    sm.create_dev('PHPStorm','php');
    sm.create_dev('MAMP','mp');
    sm.create_dev('Git', 'git');
    sm.create_dev('Github', 'gh');
    sm.render_skills();
    sm.render_dev();

    email.getAddress('leslieannlim', 'gmail.com');
    phone.getPhone('714', '321', '0309');
});