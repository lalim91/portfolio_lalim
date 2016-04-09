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

    this.create_skill = function (text, class_name, desc) {
        skill_text = text;
        var new_skill = new skillGenerator(text, class_name, desc);
        skills.push(new_skill);

    };
    this.create_dev = function (text, class_name, desc) {
        skill_text = text;
        var new_skill = new skillGenerator(text, class_name, desc);
        dev.push(new_skill);
    };

    this.render_dev = function(){
        for (var i in dev) {
            var element = dev[i].renderSelf().addClass('devs');
            this.cherryElement.append(element);
            $('.sign').on('click',function () {
                console.log('I was clicked');
                $('.devs').show().addClass('devSkills');
            })
        }
    };

    this.render_skills = function () {
        for (var i in skills) {
            var element = skills[i].renderSelf().addClass('lang');
            this.treeElement.append(element);
            $('.sign').on('click',function () {
                console.log('I was clicked');
                $('.lang').show().addClass('skills');
            })
        }
    };

    this.log_skills = function () {
        console.log(skills);
    };
};
var skillGenerator = function (text, class_attr,desc) { //this is the individual skill
    var self_sg = this;
    self_sg.skill_element = null;
    self_sg.text = text;
    self_sg.desc = desc;
    self_sg.class_attr = class_attr;
    this.renderSelf = function () {
        self_sg.skill_element = $('<div>').text(self_sg.text).addClass(self_sg.class_attr).css('display', 'none');

        self_sg.skill_element.click(function () {
            if(self_sg.skill_element.hasClass('lang')){
                self_sg.addDrop();
            }else if ( self_sg.skill_element.hasClass('devs')){
                self_sg.addFloat();
            }
            self_sg.description();
        });

        return self_sg.skill_element;
    };
    this.addDrop = function () {
        console.log('I was clicked on element', this.skill_element);
        $('.float').removeClass('float');
        $('.drop').removeClass('drop');
        self_sg.skill_element.addClass('drop');
    };
    this.addFloat = function (){
        console.log('I was clicked on element', this.skill_element);
        $('.drop').removeClass('drop');
        $('.float').removeClass('float');
        self_sg.skill_element.addClass('float');
    };
    this.description = function(){
        $('.signDiv').html('').append(self_sg.desc);

    }

};

var html_des = $('<div>',{
    text:"Html5 was the first language I learn... and there was no going back!",
    class:'signText'
});
var css_des = $('<div>',{
    text:"I saw the power of CSS animations in VineTunes, while creating the cube.",
    class:'signText'
});
var boot_des = $('<div>',{
    text:"I created the Student Grade Table completely in bootstrap, and most of mBoutique.",
    class:'signText'
});
var js_des = $('<div>',{
    text:"Learning JavaScript rewired my brain to think differently",
    class:'signText'
});
var jq_des = $('<div>',{
    text:"I am more comfortable using  jQuery. Avatar Training was my first project using dynamically created elements. ",
    class:'signText'
});
var angular_des = $('<div>',{
    text:"I used angular in the Student Grade Table, LFZ Quiz, and use it in Mboutique to switch languages.",
    class:'signText'
});
var git_des = $('<div>',{
    text:"I am familiar with Git commands. ",
    class:'signText'
});
var gh_des = $('<div>',{
    text:"I am familiar with Github and have collaborated with others on The Student Grade Table, Swash Buck Toe, VineTunes, and LFZ Quiz",
    class:'signText'
});

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
    sm.create_skill('HTML', 'html',html_des);
    sm.create_skill('CSS3', 'css', css_des);
    sm.create_skill('Bootstrap', 'boot', boot_des);
    sm.create_skill('JavaScript', 'js',js_des);
    sm.create_skill('jQuery', 'jq',jq_des);
    sm.create_skill('Angular', 'angular', angular_des);
    sm.create_skill('Firebase','fb');
    sm.create_skill('AJAX','aj');
    sm.create_dev('Chrome','dt');
    sm.create_dev('Sublime','sub');
    sm.create_dev('PHPStorm','php');
    sm.create_dev('MAMP','mp');
    sm.create_dev('Git', 'git',git_des);
    sm.create_dev('Github', 'gh', gh_des);
    sm.render_skills();
    sm.render_dev();

    email.getAddress('leslieannlim', 'gmail.com');
    phone.getPhone('714', '321', '0309');
});