/**
 * Created by Lalim on 2/12/16.
 */


var skillManager = function (tree,cherry) {//this is the skill manager
    var self = this;
    this.treeElement = $(tree);
    this.cherryElement = $(cherry);
    this.treesTriggered = false;
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
            $('.sign, .cherry').on('click',function () {
                console.log('I was clicked');
                $('.devs').show().addClass('devSkills');
            })
        }
    };

    this.render_skills = function () {
        for (var i in skills) {
            var element = skills[i].renderSelf().addClass('lang');
            this.treeElement.append(element);
            $('.sign, .tree').on('click',function () {
                console.log('I was clicked');
                $('.lang').show().addClass('skills');
            })
        }
    };

    this.log_skills = function () {
        console.log(skills);
    };
    this.scrollGrow = function(){
        $(window).scroll(function(e){
            //console.log('scroll is currently',$(window).scrollTop());
            if(!self.treesTriggered && ($("#skill").position().top - (.25*$('#skill').height())) <= $(window).scrollTop()){
                self.treesTriggered=true;
                $('.devs').show().addClass('devSkills');
                $('.lang').show().addClass('skills');
            }
        });
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
var welH1 = $('<h4>',{
    text:"Welcome to the Skill Garden"
});
var welp = $('<h4>',{
    text:"Click to see what I've grown!",
    class:'clickp'
});

var html_des = $('<div>',{
    text:"HTML5, while the first language I learned. It is so simple to code structure with it, but effective UX/UI can make it more complex.",
    class:'skillInfo'
});
var css_des = $('<div>',{
    text:"CSS lets my creativity loose, and css animations in particular are a joy of mine. I love to see how far I can push my CSS understanding.",
    class:'skillInfo'
});
var boot_des = $('<div>',{
    text:"Bootstrap is both an industry standard across much of the internet and allows me to quickly fashion my concepts into clean, responsive designs.",
    class:'skillInfo'
});
var js_des = $('<div>',{
    text:"Learning Javascript has given me the power to create deep interactivity. It is so exciting when it works after a long struggle!",
    class:'skillInfo'
});
var jq_des = $('<div>',{
    text:"jQuery takes javascript to the next level, and DOM creation in particular is one of my favorite aspects of it. ",
    class:'skillInfo'
});
var angular_des = $('<div>',{
    text:"Angular was my first framework, but by no means my last!  I'm really excited to look into new code-bases that can optimize my efficiency.",
    class:'skillInfo'
});
var ajax_des = $('<div>',{
    text:"I love incorporating ajax in projects, because I can access current information from around the world.",
    class:'skillInfo'
});
var fb_des = $('<div>',{
    text:"Firebase gives me professional-level database interactivity with a minimal amount of effort, as well as a form of data-connectivity between peers.",
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
    text:"Sublime was the first IDE I used, and is still valuable for its light weight, low to no cost, and extensive community support.",
    class:'skillInfo'
});
var chrome_des = $('<div>',{
    text:"Some of my most exciting moments involve using the inspector to debug a stubborn problem. It is such a joy when it finally works!",
    class:'skillInfo'
});
var mp_des = $('<div>',{
    text:"MAMP allows me to run my files locally without need for an external server.",
    class:'skillInfo'
});
var php_des = $('<div>',{
    text:"PhpStorm is my preferred IDE, due to its organization and usability features. ",
    class:'skillInfo'
});

var projectBox = function () {
    this.hoverDiv = function(){
        $(".box").hover(function(){
            console.log("hover");
            $(this).addClass('caption');
            $(this).siblings().addClass('box_collapse');
        }, function(){
            console.log("unhover");
            $(this).removeClass('caption');
            $(this).siblings().removeClass('box_collapse');
        });
        //$(".box").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        //    function(e) {
        //        if($(this).hasClass('box_expand')){
        //            $(this).addClass('caption');
        //        }
        //        // code to execute after transition ends
        //        console.log('animation done');
        //});
    }
};

var ContactGenerator = function () {
    var c_self = this;
    this.getAddress = function (name, site) {
        $('#emailBeg').text(name);
        $('#emailEnd').text(site);
    };
    this.getPhone = function (first, second, third) {
        $('#phoneArea').text(first);
        $('#phoneThree').text(second);
        $('#phoneFour').text(third);
    };
    this.submitAjax = function (){
        var mailform = $('#contactForm');
        $.ajax({
            type:mailform.attr('method'),
            url:mailform.attr('action'),
            data:mailform.serialize(),
            cached:false,
            success:function(data){
                var check = $('#check');
                if(data=='Message has been sent'){
                    check.addClass('alert alert-success').text('Message sent!').css('text-align','center');
                }else {
                    check.addClass('alert alert-danger').text('Error! Please try again.').css('text-align','center');
                }
                console.log('message sent!')
            },
            error:function(data){
                console.log('the server is down');
            }
        });
    };

    this.submitClickHandler = function (){
        $('.submit').on('click', function(){
            c_self.submitAjax();
            c_self.resetForm();

        })
    };
    this.resetForm = function (){
        $('.formInfo').val('');
    }



};

function process_links(){
    if(devmode==undefined || !devMode) {
        var preLink = 'http://';
    } else{
        var preLink = 'http://test.';
    }
    $("a.dyn_link").each(function(){
        $(this).attr('href',preLink+$(this).attr('href'));
    });
}


var contact = new ContactGenerator();
var sm;
var project;

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
    sm.scrollGrow();

    contact.getAddress('leslieannlim', 'gmail.com');
    contact.getPhone('714', '475', '2340');
    contact.submitClickHandler();

    project = new projectBox();
    project.hoverDiv();
    process_links();
});