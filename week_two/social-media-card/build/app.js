let person = {
    name: "Brock Halladay",
    location: "Springville, Utah",
    occupation: "Remote Admin/Front-End Web Developer",
    photo: "img/BrockHalladay2.jpg",
    jobs: [{
        company: "Instructure",
        title: "Implementation Consultant",
        description: "Implementation Consultants (IC) work with clients who have purchased Canvas to set up the authorization, automation, API, branding, support ticketing system, content migration, data mapping, and general settings for their use of Canvas. Since each process is different, an IC needs to be flexible and dynamic. Often handling multiple projects, an IC will help consult in the development of the process necessary for each institution. The ultimate goal of an IC is to build an understanding of the product to the point they are no longer needed and the implementation is closed."
    }, {
        company: "Teacher",
        title: "Alpine School District",
        description: "Development of computer science program at the high school level (grades 9-12) to include a larger selection of potential IT classes for students. Provide quality instruction for students at various educational levels to enhance skill transference for educational and occupational settings."
    }],
    updates: [{
        provider: "Brock",
        status: "This is the first update - Chrome extension for Wordpress has basic functionality, but only in terms of indicating that it is working on the page.",
        date: "06/01/17"
    }, {
        provider: "Brock",
        status: "2nd update - Currently picking up React to build an interface on brockyourworld.com",
        date: "08/28/2017"
    }, {
        provider: "Brock Casey",
        status: "3rd update - Brock and Casey are working on adding games to brockyourworld.com, this includes a lot of grid games (i.e. chess, checkers, and picture tile slide game",
        date: "09/18/2017"
    }]

};
class Photo extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "photo" },
            React.createElement("img", { src: this.props.photo, alt: "Brock Halladay Profile Picture" })
        );
    }
}
class Bio extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "bio" },
            React.createElement(
                "h1",
                { className: "name" },
                this.props.name
            ),
            React.createElement(
                "h2",
                { className: "location" },
                this.props.location
            ),
            React.createElement(
                "div",
                { className: "occupation" },
                React.createElement(
                    "p",
                    null,
                    this.props.occupation
                )
            )
        );
    }
}
class Jobs extends React.Component {}
class Updates extends React.Component {
    updates() {
        return this.props.updates.map(function (update, index) {
            return React.createElement(
                "li",
                { className: "update " + update.provider, key: index },
                update.date,
                " - ",
                update.status,
                React.createElement("hr", null)
            );
        });
    }
    render() {
        return React.createElement(
            "div",
            { className: "updates" },
            React.createElement(
                "ul",
                null,
                this.updates()
            )
        );
    }
}
class Card extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "card" },
            React.createElement(Photo, { photo: person.photo }),
            React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation }),
            React.createElement(Updates, { updates: person.updates })
        );
    }
}
ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));