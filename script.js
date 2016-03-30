/**
 * Created by Lalim on 2/12/16.
 */
var skillManager = function (element) {//this is the skill manager
    var self = this;
    this.element = $(element);
    var skills = [];
    var skill_text = "";

    this.create_skill = function (text, class_name) {
        skill_text = text;
        var new_skill = new skillGenerator(text, class_name);
        skills.push(new_skill);

    };

    this.render_skills = function () {
        for (var i in skills) {
            var element = skills[i].renderSelf();
            this.element.append(element);
            $('#treebtn').on('click',function () {
                console.log('I was clicked');
                $('.allSkills').show().addClass('skills');
                console.log('text for skills ', skills[i].text);
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
        self_sg.skill_element = $('<div>').text(self_sg.text).addClass("allSkills " + self_sg.class_attr).css('display', 'none');

        self_sg.skill_element.click(function () {
            self_sg.addDrop();
        });
        return self_sg.skill_element;
    };
    this.addDrop = function () {
        console.log('I was clicked on element', this.skill_element);
        $('.drop').removeClass('drop');
        self_sg.skill_element.addClass('drop');
    };

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
    sm = new skillManager('.tree');
    sm.create_skill('HTML', 'html');
    sm.create_skill('CSS3', 'css');
    sm.create_skill('Bootstrap', 'boot');
    sm.create_skill('JavaScript', 'js');
    sm.create_skill('jQuery', 'jq');
    sm.create_skill('Angular', 'angular');
    sm.create_skill('Git', 'git');
    sm.create_skill('Github', 'gh');
    sm.render_skills();

    email.getAddress('leslieannlim', 'gmail.com');
    phone.getPhone('714', '321', '0309');
});