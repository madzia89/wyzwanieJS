// Your friend saw the great work you did with keeping your user-names at bay in
// now he'd like you to do (nearly) the same thing for his website, but as always, the devil is in the details.
//
// He has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs, like so:
//
//     [ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]
// He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. For the above array, the correct return-array would be
//
//     // [ "food@bar.com" ]

function searchNames( logins ){
    var members = []

    logins.filter(function(e, i, a){
        if ( e.startsWith('.') || e.endsWith('.')) {
            members.push(a[i+1])
        }
    })
    return members
}



