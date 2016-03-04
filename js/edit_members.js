
      function deleteCur(e) {
        $(e.target).closest('.panel-group').remove();
      }

      $(document).ready(function() {
        'use strict';

        // Render our headers and footers.
        $.get('header.html', function(data) {
          $('header').html(data);
        });
        $.get('footer.html', function(data) {
          $('footer').html(data);
        });

        var view = {
          shorten: function() {
            return function(text, render) {
              return render(text).replace(/ /g,'').toLowerCase();
            }
          }
        };

        // Render the accordian widgets
        $.getJSON('data/members.json', function(data) {

          // Add member data to the "view"
          view.members = data;

          // Render view
          var outer = $('#panelRender').html();
          var inner = $('#panelTemplate').html();
          var rendered = Mustache.render(outer, view, {panelTemplate: inner});
          $('#appendHere').append(rendered);

          // Setup button event listener for close buttons
          var deleteButtons = document.body.querySelectorAll('.delete');
          for (var i = 0; i < deleteButtons.length; ++i) {
            deleteButtons[i].addEventListener('click', deleteCur);
          }

          // Setup button event listener for add member button
          window.NEW_MEMBER_COUNT = 1;
          var addButton = document.body.querySelector('#addMember');
          addButton.addEventListener('click', function() {
            var tem = $('#panelTemplate').html();
            var newView = {shorten: view.shorten, name: 'New Member ' + window.NEW_MEMBER_COUNT};
            window.NEW_MEMBER_COUNT += 1;
            var newRend = Mustache.render(tem, newView);
            $('#appendHere').prepend(newRend);
            
            // Add event listener on the first delete button. This works because it was prepended.
            var delButton = document.body.querySelector('.delete')
            if (delButton) {
              delButton.addEventListener('click', deleteCur);
            }

            // Open up the accordian
            var acc = document.body.querySelector('[id^=collapseListGroup-]');
            if (acc) {
              acc.classList.remove('collapse');
              acc.classList.add('in');
            }
              
          });

          // Setup save button.
          var save = document.body.querySelector('#saveButton');
          save.addEventListener('click', function() {

            // Create data to be sent to the server.
            var formData = new FormData();

            // Skeleton of data sent to server.
            var sendJSON = [
              {voice: "Soprano", people: []},
              {voice: "Alto", people: []},
              {voice: "Tenor", people: []},
              {voice: "Bass", people: []}
            ];

            // Enumeration to access correct skeleton value.
            var enumVoice = {
              Soprano: 0,
              Alto: 1,
              Tenor: 2,
              Bass: 3
            };

            // Iterate over each accordian widget.
            var allPeople = document.body.querySelectorAll('[id^=collapseListGroup-]');
            for (var i = 0; i < allPeople.length; ++i) {
              var person = allPeople[i];
              var voice = person.querySelector('[id^=inputVoice]').value;
              var name = person.querySelector('[id^=inputName]').value;
              var year = person.querySelector('[id^=inputYear]').value;
              var position = person.querySelector('[id^=inputPosition]').value;
              var file = person.querySelector('[id^=inputFile]').files[0];
              if (!voice) {
                alert("No voice part entered");
                return;
              }
              var voiceKey = voice[0].toUpperCase() + voice.substring(1);

              if (!name) {
                alert("Empty name entered");
                return;
              }

              if (enumVoice[voiceKey] === undefined) {
                alert('Voice Part should be "Soprano", "Alto", "Tenor" or "Bass"');
                return;
              }

              // Create an object to add to the server packet.
              sendJSON[enumVoice[voiceKey]].people.push({
                voice: voiceKey,
                name: name,
                year: year,
                position: position
              });

              // If there is a file, also add it separately to the packet.
              if (file) {
                formData.append(name.replace(/ /g,'').toLowerCase(), file);
              }
            }

            // Alphabetize names
            for (var i = 0; i < sendJSON.length; ++i) {
              sendJSON[i].people.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                } 
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
            }

            // Add in password and data to the packet.
            JSON.stringify(sendJSON);
            formData.append('data', JSON.stringify(sendJSON));
            formData.append('password', document.body.querySelector('#inputPassword').value);
			console.log(sendJSON);

            // Send to server.
            var req = new XMLHttpRequest();
            req.open('POST', 'update_members.php');
            req.onload = function(event) { alert(event.target.responseText); };
            req.send(formData);
          });
        });
      });