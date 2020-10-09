//connection for mongodb
const mongoose = require('mongoose');
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mongoose.connect('mongodb://localhost:27017/play-ground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected successfully');
});

const podcastSchema = new mongoose.Schema({
    name: String,
    age: Number,
    status:String,
    groups: [String],
});

const Podcast = mongoose.model('Podcast', podcastSchema);

const podcast=new Podcast();
let answers = [];
var i = 3;

async function createPodcast() {
    rl.question('name? age? status? groups? ', answer => {
        answers = answer.split(',');
        console.log(answers);
        podcast.set({name: answers[0]});
        podcast.set({age: answers[1]});
        podcast.set( {status: answers[2]});
        podcast.set( {groups: answers[3].split(' ')});
        podcast.save();
        rl.close();
    });
}

async function getPodcasts()
{
    let result = await Podcast.find();
    console.log('display all the Podcasts',result);

}

async function run()
{
    getPodcasts().then(function(){
        console.log('calling the run ');
    }).catch(error => {
        console.log(error.message);
    })
}
run().then(function () {
    console.log('finish running');

}).catch(error => {
    console.log(error.message);

});

async function findPodcastByID(id)
{
    await Podcast.findById(id).then(function (result) {
        console.log('Podcast found with ID:',result);

    }).catch(error => {
        console.log('Error finding with this ID: ',id);
    });
}

findPodcastByID('5a68fdc3615eda645bc6bdec').then(()=>{
    console.log('found podcast by id')

}).catch(reason => {
    console.log('Error')
});



async function findPodcastByName(name)
{

    await Podcast.find({name:name}).then(function (result) {
        console.log('Podcast found');

    }).catch(error => {
        console.log('Error while finding');
    });
}

findPodcastByName('Dravid').then(()=>{
    console.log(`found name successfully`)

}).catch(reason => {
    console.log('Error finding the Name')
});


async function findPodcastByAge(age)
{
    await Podcast.find({age:age}).then(function (result) {
        console.log('Podcast found');

    }).catch(error => {
        console.log('Error');
    });
}

findPodcastByAge(21).then(()=>{
    console.log(`found age successfully`)

}).catch(reason => {
    console.log('Error')
});

async function findPodcastByGroup(group)
{
    await Podcast.find({groups: group}).then(function (result) {
        console.log('Podcast found',result);

    }).catch(error => {
        console.log('Error');
    });
}

findPodcastByGroup('Politics').then(()=>{
    console.log('found')

}).catch(reason => {
    console.log('Error')
});


async function findPodcastByStatus(status)
{
    await Podcast.find({status:status}).then(function (result) {
        console.log('found');

    }).catch(error => {
        console.log('Error');
    });
}

findPodcastByStatus("Allowed").then(()=>{
    console.log(`finished finding`)

}).catch(reason => {
    console.log('Error')
});

async function updatePodcastById(id)
{

    const podcast = await Podcast.findById(id);
    console.log(podcast);
    if (!podcast) return;
    podcast.set({ name: 'Dravid',age: '17'});
    podcast.save();
    console.log(podcast);


}

updatePodcastById('5a68fdf95db93f6477053ddd').then(()=>{
    console.log('');
});


async function updatePodcast()
{
    const result = await Podcast.updateMany({ age: 25 }, {
        $set: { status: 'Allowed'}
    });
    console.log('podcast sucessfully updated');
}

updatePodcast().then(() =>{
    console.log('success');
} );

async function removePodcast()
{

    const result = await Podcast.remove({name:'Dravid'});
    console.log(result);
}
removePodcast().then(() =>{
    console.log('success');
} );
