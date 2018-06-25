/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* The following loops through each feeds and ensures it has a URL
         and that it's not empty.
         */
		 it('Ensure URL is defined', function() {
			 allFeeds.forEach(function (feed) {
				 expect(feed.url).toBeDefined();
				 expect(feed.url).not.toBe('');
			 });
		 });

        //This loop tests through each feed and ensures it has a name
        // and that it's not empty.
         it('Ensure Name is defined', function () {
           allFeeds.forEach(function (feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe('');
           });
         });
    });

    //Ensures the element is hidden
    describe('The  menu', function () {

         var menuIcon = $('body');
         var icon = document.querySelector('.menu-icon-link');
         it('Menu Element Hidden by Default', function () {
           expect(menuIcon.hasClass('menu-hidden')).toBe(true);
         });

          //This test ensures the menu can be seen once the icon is clicked.
          it('Menu Changes visibility when clicked', function () {
            icon.click();
            expect(menuIcon.hasClass('menu-hidden')).not.toBe(true);
            icon.click();
            expect(menuIcon.hasClass('menu-hidden')).toBe(true);
          });
        });


    describe('Initial Entries', function () {
      beforeEach(function (done) {
        loadFeed(0, done);
      });
      //If there are contents the feeds container will not be 0
      it('At least a single .entry element', function () {
        expect($('.feed .entry').length).toBeGreaterThan(0);
        done();
      });
    });

         describe('New Feed Section', function() {
           var previousFeed, currentFeed, container = $('.feed');

           beforeEach(function (done) {
             loadFeed(0, function () {
               previousFeed = container.html();
               loadFeed(1, function () {
                 currentFeed = container.html();
                 done();
               });
             });
           })
           it('Test to ensure current feed changes', function (done) {
            expect(previousFeed).not.toBe(currentFeed);
            done();
         })
       })
     })
