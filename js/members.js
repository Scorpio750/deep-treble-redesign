	  	$(document).ready(function() {
        'use strict';

        // Render our headers and footers.
        $.get('../header.html', function(data) {
          $('header').html(data);
        });
        $.get('../footer.html', function(data) {
          $('footer').html(data);
        });

        
        var isLeft = true;
        var view = {

          /** Helper function to get the image of a member. */
          getImage: function() {
            return function(text, render) {
              return '../images/members/' + this.name.replace(/ /g,'').toLowerCase();
            }
          },

          /**
           * Helper function to get class for people on the left side when it's
           * double-column layout.
           */
          getClass: function() {
            return function() {
              if (this.isLeft === undefined) {
                this.isLeft = isLeft;
              } else {
                isLeft = !isLeft;
              }
              return this.isLeft ? 'col-sm-offset-2' : '';
            }
          },

          /** Helper function to get text for eboard position if it exists */
          formatPos: function() {
            return function(text, render) {
              var pos = render(text);
              return pos ? '<br>' + pos : '';
            }
          },

          /** 
           * Helper function to make trailing whitespace for people on the
           * right side of the double column layout.
           */
          fixWhiteSpace: function() {
            return function() {
              if (this.isLeft === undefined) {
                this.isLeft = isLeft;
              } else {
                isLeft = !isLeft;
              }
              return this.isLeft ? '' :
                '</div><div class="row">';
            }
          },

          /** 
           * Helper function to make trailing whitespace for when there is a
           * section ending with a person on the left side.
           */
          fixWhiteSpace2: function() {
            return function() {
              var ret = isLeft ? '' :
                '</div><div class="whitespace"></div><div class="row">';
              if (!isLeft) {
                isLeft = !isLeft;
              }
              return ret;
            }
          }
        };

        $.getJSON('../data/members.json', function(data) {
          // Add member data to the "view"
          view.members = data;

          // Render view
          var template = $('#members').html();
          var rendered = Mustache.render(template, view);
          $('#actualContent').append(rendered);
        });
      });