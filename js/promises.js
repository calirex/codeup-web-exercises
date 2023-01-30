// (async () => {
//
//
//     async function getUserAsync(username) {
//         try {
//             let response = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.github}`}})
//             // console.log(response)
//             let data = await response.json();
//             // console.log(data)
//             return data;
//         } catch (error) {
//             console.log(error)
//         }
//     }
//
//     async function lastCommit(username) {
//         try {
//             let response = await getUserAsync(username);
//             // console.log(response)
//             let commit = response[0].created_at;
//             // console.log(commit)
//             return commit;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//
//     let answer = await lastCommit(`calirex`);
//     console.log(answer)
//
// })();

(async ()=> {

    async function getUserAsync(username) {
        try {
            let response = await fetch(`https//:api.github.com/users/${userName}/events`, {headers: {`Authorization`: `token ${keys.github}`}})
            //console.log(response)
            let data = await response.json();
            //console.log(data)
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    async function lastCommit(username) {
        try {
            let response = await getUserAsync(username);
            //console.log(commit)
            return commit;
        } catch (error) {
            console.log(error)
    }
    }
});