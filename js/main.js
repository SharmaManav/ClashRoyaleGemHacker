$(document).ready(function(){
    /*
     * Bespoke Landing Page
     * Author: Techman
     * Skype: BadManz2k11
     * Thread: http://bit.ly/1y18yFN
     */

    var BV = new $.BigVideo();
    BV.init();
    isTouch = Modernizr.touch;
    if(!isTouch){
        $.backstretch("img/bg.jpg");
    } else {
        $.backstretch("img/bg.jpg");
    }

    var windowsize = $(window).width();

    var $selected_rp = '';
    var $account_connected = false;

    $('.rp-select').click(function(){
        if($('.gen-area').hasClass('area-disabled')) {
            sweetAlert("Error", "Please connect your account.", "error");
        } else {
            fixRPBox($(this));
        }
    });

    $('.submit-btn').click(function(){
        sweetAlert("Error", "The code you have provided is invalid or incorrect.", "error");
    });
    $('.gen-v-btn').click(function(){
       call_locker(); 
    });

    $('.connect-button').click(function(){
        if($account_connected == false) {
            if($('#usernameInput').val() != '') {
                if($('#serverInput').val() != '') {
                    $('#m-accname').text($('#usernameInput').val());
                    $('#m-server').text($('#serverInput').val());
                    $.magnificPopup.open({
                        items: {
                            src: '#loading_modal',
                        },
                        type: 'inline',
                        preloader: false,
                        modal: true,
                        callbacks: {
                            open: function() {
                            }, 
                            close: function() {
                                console.log('closed');
                                $account_connected = true;
                                $('.gen-area').removeClass('area-disabled');
                                $('.account-connet-area').addClass('area-disabled');
                                $('#usernameInput, #serverInput, #aesInput').attr('disabled', 'true');
                            }
                        }
                    });
                    progress_slow_connect(function(){
                        console.log('progress_done');
                        $.magnificPopup.close();
                    });
                } else {
                    sweetAlert("Error", "Please select your platform.", "error");
                }
            } else {
                sweetAlert("Error", "Please enter your username.", "error");
            }
        } else {
            sweetAlert("Error", "You are already connected.", "error");
        }
    });

    $('.gen-button').click(function(){
        if($('.gen-area').hasClass('area-disabled') || $account_connected == false) {
            sweetAlert("Error", "Please connect your account.", "error");
        } else {
            if($selected_rp != ''){
                $.magnificPopup.open({
                    items: {
                        src: '#gen_modal',
                    },
                    type: 'inline',
                    preloader: false,
                    modal: true,
                    callbacks: {
                        open: function() {
                            loading_step();
                        }
                    }
                });

            } else {
                sweetAlert("Error", "Please select an amount of gems to generate.", "error");
            }
        }
    });
    
    function loading_step() {
        var $message_span = $('.gen-loading-msg');
        $message_span.text('Performing server authentication...');
            progress_fast(function(){
                $message_span.text('Encrypting communication with server: Open_SSL_Encryption();');
                progress_fast(function(){
                    $message_span.text('Retrieving current server script: read_source_server_source();');
                        progress_fast(function(){
                            $message_span.text('Generating...');
                            progress_fast(function(){
                                $('.generator-loading').fadeOut('slow', function(){
                                    $('.generator-verification').fadeIn('slow', function(){
                                        console.log('human_verification');
                                    });
                                });
                            });
                        });
            });
        });
    }
    
    function progress_slow(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function(){
            if($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer); 
            }
        }, Math.floor((Math.random() * 1200) + 600));
    }

    function progress_med(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function(){
            if($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer); 
            }
        }, Math.floor((Math.random() * 600) + 250));
    }

    function progress_fast(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        var $p_array = [5, 10, 15];
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function(){
            if($temp_percentage != 100) {
                $temp_percentage = $temp_percentage + 10;
                $pbar_div.css('width', $temp_percentage + '%');
            } else {
                callback();
                clearInterval(interval_timer); 
            }
        }, Math.floor((Math.random() * 350) + 100));
    }

    function progress_slow_connect(callback) {
        var $temp_percentage = 0;
        var $pbar_div = $('.g-progressbar');
        $pbar_div.css('width', '0%');
        var interval_timer = setInterval(function(){
            if($temp_percentage == 0) {
                $temp_percentage = 20;
                $pbar_div.css('width', $temp_percentage + '%')
            } else if($temp_percentage == 20) {
                $temp_percentage = 35;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 35) {
                $temp_percentage = 65;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 65) {
                $temp_percentage = 75;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 75) {
                $temp_percentage = 85;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 85) {
                $temp_percentage = 89;
                $pbar_div.css('width', $temp_percentage + '%');
            } else if($temp_percentage == 89) {
                $temp_percentage = 100;
                $pbar_div.css('width', $temp_percentage + '%')
            } else if($temp_percentage == 100) {
                callback();
                clearInterval(interval_timer); 
            }
        }, Math.floor((Math.random() * 1200) + 600));
    }

    function fixRPBox($parent_class) {
        resetAllRPBoxes();
        if($parent_class.hasClass('rp-1')){
            $selected_rp = 'RP_650';
        }
        if($parent_class.hasClass('rp-2')){
            $selected_rp = 'RP_1380';
        }
        if($parent_class.hasClass('rp-3')){
            $selected_rp = 'RP_2800';
        }
        if($parent_class.hasClass('rp-4')){
            $selected_rp = 'RP_5000';
        }
        if($parent_class.hasClass('rp-5')){
            $selected_rp = 'RP_7200';
        }
        $parent_class.addClass('activated');
    }
    function resetAllRPBoxes() {
        var $rp_list = $('.rp-1, .rp-2, .rp-3, .rp-4, .rp-5');
        if($rp_list.hasClass('activated')){
            $rp_list.removeClass('activated');
        }
    }
});