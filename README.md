# Project war-LOCK

war-LOCK is an app where users can review magic-users.


User Stories:

"I am a parent who needs to make sure Billy's birthday magician doesn't sacrifice them to Azathoth or steal jewelry."
"As a parent, I need the ability to filter out non-Good magic-users, and those with criminal interests so I can protect my family and valuables."

"I am a medieval king who wants my soothe-sayer to not lay with my wives."
"As a ruler, I need the ability to check reviews and work history, so I can keep the royal line of succession clear of confusion, or else the wars will continue."

"I am a D&D character who needs a reputable and capable battle caster to help me delve a dungeon."
"As a party leader, I need to be able to view the skills, interests, and experience of profiles, so I can choose the magic user best for me and the dragon I need to slay."

"I am a corporate event planner who needs his audience members to reappear at the end of the magic show."
"As an event planner, I need there to be a certification feature that helps me hire security-friendly workers, to make sure I don't accidentally hire a group of professional thieves with an incredibly complex plan to kidnap the CEO during an all hands meeting and use him to get access to the core servers, and thus proof of the company CFO's malfeaseance and theft. Again."



Color scheme: Cream, Purple, Black


Wireframe:

Homepage
    Index
        create
        read
        update
        delete
            Individual pages
    Contact






routes:

GET	    /	                        Home page
GET	    /places	                    Places index page
POST	/places	                    Create new place
GET	    /places/new	                Form page for creating a new place
GET	    /places/:id	                Details about a particular place
PUT	    /places/:id	                Update a particular place
GET	    /places/:id/edit	        Form page for editing an existing place
DELETE	/places/:id	                Delete a particular place
POST	/places/:id/rant	        Create a rant (comment) about a particular place
DELETE	/places/:id/rant/:rantId	Delete a rant (comment) about a particular place
GET	    *	                        404 page (matches any route not defined above)