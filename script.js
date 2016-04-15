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
    var timer = null;

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

    this.welcomeSign = function (){
        welcome.append(welH1,welp);
        $('#signContainer').append(welcome);
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
                clearTimeout(timer);
                if(self_sg.skill_element.hasClass('lang')){
                    self_sg.addDrop();
                }else if ( self_sg.skill_element.hasClass('devs')){
                    self_sg.addFloat();
                }
                //self_sg.clicked = false;
                self_sg.description();
                self_sg.resetSkill();


            });

            return self_sg.skill_element;
        };
        this.addDrop = function () {
            console.log('I was clicked on element', this.skill_element);
            $('.float').removeClass('float');
            $('.drop').removeClass('drop');
            //self_sg.clicked = true;
            self_sg.skill_element.addClass('drop');
        };
        this.addFloat = function (){
            console.log('I was clicked on element', this.skill_element);
            $('.drop').removeClass('drop');
            $('.float').removeClass('float');
            //self_sg.clicked = true;
            self_sg.skill_element.addClass('float');
        };
        this.description = function(){
            $('#signContainer').html('').append(self_sg.desc);

        };
        this.resetSkill = function (){
            timer = setTimeout(function(){
                if(self_sg.skill_element.hasClass('drop')){
                    self_sg.skill_element.removeClass('drop');
                }else if ( self_sg.skill_element.hasClass('float')){
                    self_sg.skill_element.removeClass('float');
                }
                self_sg.desc.detach();
                $('#signContainer').append(welcome);
            },10000);

        }

    };


};

var welcome = $('<div>',{
    id:'signDiv'
});
var welH1 = $('<h3>',{
    text:"Welcome to the Skill Garden"
});
var welp = $('<p>',{
    text:"Click to see what I've grown!"
});

var html_des = $('<div>',{
    text:"Html5 was the first language I learn, in conjunction with CSS. It's given me an appreciation for UI and UX",
    class:'skillInfo'
});
var css_des = $('<div>',{
    text:"I enjoy seeing how far I can take animation with CSS",
    class:'skillInfo'
});
var boot_des = $('<div>',{
    text:"Bootstrap has made working on projects more time efficient",
    class:'skillInfo'
});
var js_des = $('<div>',{
    text:"Learning JavaScript has given me the power to create functionality. It is so exciting when it works!",
    class:'skillInfo'
});
var jq_des = $('<div>',{
    text:"My favorite part about jquery is DOM creation. ",
    class:'skillInfo'
});
var angular_des = $('<div>',{
    text:"After learning angular, I am excited to learn other frameworks.",
    class:'skillInfo'
});
var ajax_des = $('<div>',{
    text:"I love incorporating ajax in projects, because I can access current information from around the world.",
    class:'skillInfo'
});
var fb_des = $('<div>',{
    text:"Learning Firebase has given me a taste of what it is like working with a database.",
    class:'skillInfo'
});
var git_des = $('<div>',{
    text:"Learning git commands has given me confidence to save my work, fix merge conflicts, and work with large teams",
    class:'skillInfo'
});
var gh_des = $('<div>',{
    text:"I love collaborating on project with Github, with the addition of ZenHub, issue tracking has become so much easier!",
    class:'skillInfo'
});
var sub_des = $('<div>',{
    text:"Sublime is the first text editor I used.",
    class:'skillInfo'
});
var chrome_des = $('<div>',{
    text:"Some of my most exciting moments involve using the inspector to debug a stubborn problem. It is such a joy when it finally works!",
    class:'skillInfo'
});
var mp_des = $('<div>',{
    text:"I love quickly accessing my projects with MAMP ",
    class:'skillInfo'
});
var php_des = $('<div>',{
    text:"PhpStorm is my preferred text editor, due to its organization and usability. ",
    class:'skillInfo'
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
    sm.create_skill('Firebase','fb',fb_des);
    sm.create_skill('AJAX','aj',ajax_des);
    sm.create_dev('Chrome','dt',chrome_des);
    sm.create_dev('Sublime','sub',sub_des);
    sm.create_dev('PHPStorm','php',php_des);
    sm.create_dev('MAMP','mp',mp_des);
    sm.create_dev('Git', 'git',git_des);
    sm.create_dev('Github', 'gh', gh_des);
    sm.render_skills();
    sm.render_dev();
    sm.welcomeSign();

    email.getAddress('leslieannlim', 'gmail.com');
    phone.getPhone('714', '321', '0309');
});