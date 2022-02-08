	import User20 from 'carbon-icons-svelte/lib/User20';
	import SecurityServices20 from 'carbon-icons-svelte/lib/SecurityServices20';
	import Event20 from 'carbon-icons-svelte/lib/Event20';
	import Query20 from 'carbon-icons-svelte/lib/Query20';
	import Launch20 from 'carbon-icons-svelte/lib/Launch20';
	import Portfolio20 from 'carbon-icons-svelte/lib/Portfolio20';
	import Course20 from 'carbon-icons-svelte/lib/Course20';
	import EventSchedule20 from 'carbon-icons-svelte/lib/EventSchedule20';
	import GroupPresentation20 from 'carbon-icons-svelte/lib/GroupPresentation20';
	import CalendarHeatMap20 from 'carbon-icons-svelte/lib/CalendarHeatMap20';
	import Collaborate32 from 'carbon-icons-svelte/lib/Collaborate32';

	export const navLinks = [{
	        id: 200,
	        text: 'Activities',
	        icon: Event20,
	        href: null,
	        newtab: false,
	        parent_id: null,
	        sequence: 1
	    },
	    {
	        id: 201,
	        text: 'All Activities',
	        icon: CalendarHeatMap20,
	        href: '/activities',
	        newtab: false,
	        parent_id: 200,
	        sequence: 2
	    },
	    {
	        id: 202,
	        text: 'Workshops',
	        icon: GroupPresentation20,
	        href: '/workshops',
	        newtab: false,
	        parent_id: 200,
	        sequence: 3
	    },
	    {
	        id: 203,
	        text: 'Events',
	        icon: EventSchedule20,
	        href: '/events',
	        newtab: false,
	        parent_id: 200,
	        sequence: 4
	    },
	    {
	        id: 204,
	        text: 'Sessions',
	        icon: Course20,
	        href: '/sessions',
	        newtab: false,
	        parent_id: 200,
	        sequence: 5
	    },
	    {
	        id: 300,
	        text: 'Opportunities',
	        icon: Portfolio20,
	        href: null,
	        newtab: false,
	        parent_id: null,
	        sequence: 6
	    },
	    {
	        id: 301,
	        text: 'Job Fairs',
	        icon: Query20,
	        href: '/jobfairs',
	        newtab: false,
	        parent_id: 300,
	        sequence: 7
	    },
	    {
	        id: 302,
	        text: 'Careers Portal',
	        icon: Launch20,
	        href: 'https://www.fh-swf.de/de/karriere/jobs_fuer_studierende_und_absolventinnen/index.php',
	        newtab: true,
	        parent_id: 300,
	        sequence: 8
	    },
	    {
	        id: 401,
	        text: 'Appointments',
	        icon: Collaborate32,
	        href: '/appointments',
	        newtab: false,
	        parent_id: null,
	        sequence: 10
	    },
	    {
	        id: 800,
	        text: 'Administration',
	        icon: SecurityServices20,
	        href: null,
	        newtab: false,
	        parent_id: null,
	        sequence: 11
	    },
	    {
	        id: 801,
	        text: 'Users',
	        icon: User20,
	        href: '/users',
	        newtab: false,
	        parent_id: 800,
	        sequence: 12
	    }
	];