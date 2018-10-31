const mongoose = require('mongoose');
const Names = mongoose.model('names');

exports.insert = (req, res) => {

    var friends =[
        {id:1,name:'Fleur',friends:'84,10,40'},
        {id:2,name:'Tate',friends:'54,77,57'},
        {id:3,name:'September',friends:'32,57,44'},
        {id:4,name:'Berk',friends:'53,57,56'},
        {id:5,name:'Inga',friends:'22,83,79'},
        {id:6,name:'Carlos',friends:'41,49,59'},
        {id:7,name:'Judith',friends:'72,62,41'},
        {id:8,name:'Ima',friends:'99,94,92'},
        {id:9,name:'Regina',friends:'67,13,39'},
        {id:10,name:'Blake',friends:'43,11,33'},
        {id:11,name:'Magee',friends:'38,68,10'},
        {id:12,name:'Rina',friends:'10,65,22'},
        {id:13,name:'Mohammad',friends:'65,24,46'},
        {id:14,name:'Ahmed',friends:'67,97,50'},
        {id:15,name:'Macy',friends:'44,79,83'},
        {id:16,name:'Cameron',friends:'10,64,44'},
        {id:17,name:'Louis',friends:'35,31,32'},
        {id:18,name:'Irma',friends:'17,56,8'},
        {id:19,name:'Ima',friends:'57,12,91'},
        {id:20,name:'Bo',friends:'99,70,89'},
        {id:21,name:'Tamara',friends:'58,85,26'},
        {id:22,name:'Breanna',friends:'40,96,6'},
        {id:23,name:'Hadley',friends:'88,36,51'},
        {id:24,name:'Mannix',friends:'97,54,26'},
        {id:25,name:'Xavier',friends:'7,1,75'},
        {id:26,name:'Ezekiel',friends:'13,14,75'},
        {id:27,name:'Jana',friends:'5,41,16'},
        {id:28,name:'Leila',friends:'97,18,59'},
        {id:29,name:'Eaton',friends:'10,35,86'},
        {id:30,name:'Cameran',friends:'58,68,24'},
        {id:31,name:'Hoyt',friends:'33,11,59'},
        {id:32,name:'Zane',friends:'68,13,21'},
        {id:33,name:'Beck',friends:'32,31,97'},
        {id:34,name:'John',friends:'93,96,63'},
        {id:35,name:'George',friends:'77,75,36'},
        {id:36,name:'Inez',friends:'29,39,97'},
        {id:37,name:'Kalia',friends:'17,9,78'},
        {id:38,name:'Buffy',friends:'16,22,96'},
        {id:39,name:'Sebastian',friends:'60,95,78'},
        {id:40,name:'Ulric',friends:'52,55,61'},
        {id:41,name:'Hop',friends:'93,67,91'},
        {id:42,name:'Yardley',friends:'83,4,86'},
        {id:43,name:'Benedict',friends:'68,69,59'},
        {id:44,name:'Acton',friends:'1,2,95'},
        {id:45,name:'Jaden',friends:'82,95,20'},
        {id:46,name:'Amery',friends:'81,38,4'},
        {id:47,name:'Forrest',friends:'57,98,40'},
        {id:48,name:'Uriah',friends:'54,64,65'},
        {id:49,name:'Lamar',friends:'91,100,21'},
        {id:50,name:'Sybil',friends:'37,14,78'},
        {id:51,name:'Hollee',friends:'72,41,13'},
        {id:52,name:'Daryl',friends:'70,77,65'},
        {id:53,name:'Hayes',friends:'21,1,20'},
        {id:54,name:'Sade',friends:'22,59,14'},
        {id:55,name:'Baxter',friends:'1,66,11'},
        {id:56,name:'Tanisha',friends:'7,23,51'},
        {id:57,name:'Summer',friends:'48,47,28'},
        {id:58,name:'Louis',friends:'79,84,92'},
        {id:59,name:'Ross',friends:'33,61,74'},
        {id:60,name:'Deirdre',friends:'14,42,43'},
        {id:61,name:'Flynn',friends:'93,98,63'},
        {id:62,name:'Ora',friends:'57,58,89'},
        {id:63,name:'Michelle',friends:'16,78,95'},
        {id:64,name:'Scott',friends:'43,44,75'},
        {id:65,name:'Katelyn',friends:'25,57,49'},
        {id:66,name:'Alexandra',friends:'21,62,71'},
        {id:67,name:'Priscilla',friends:'65,45,10'},
        {id:68,name:'Cameran',friends:'81,92,9'},
        {id:69,name:'Kamal',friends:'31,5,79'},
        {id:70,name:'Risa',friends:'14,60,50'},
        {id:71,name:'Duncan',friends:'62,99,83'},
        {id:72,name:'Emmanuel',friends:'86,19,81'},
        {id:73,name:'Giacomo',friends:'59,14,96'},
        {id:74,name:'Lee',friends:'97,13,78'},
        {id:75,name:'Frances',friends:'38,59,94'},
        {id:76,name:'Malcolm',friends:'77,8,80'},
        {id:77,name:'Matthew',friends:'11,67,69'},
        {id:78,name:'Farrah',friends:'95,81,90'},
        {id:79,name:'Kenyon',friends:'95,54,9'},
        {id:80,name:'Madaline',friends:'26,42,48'},
        {id:81,name:'Josiah',friends:'73,13,56'},
        {id:82,name:'Fleur',friends:'18,55,90'},
        {id:83,name:'Julian',friends:'90,29,70'},
        {id:84,name:'Perry',friends:'80,81,69'},
        {id:85,name:'Darius',friends:'72,73,61'},
        {id:86,name:'Tashya',friends:'60,57,80'},
        {id:87,name:'Moana',friends:'35,94,53'},
        {id:88,name:'Petra',friends:'96,36,21'},
        {id:89,name:'Dexter',friends:'79,2,12'},
        {id:90,name:'Azalia',friends:'78,13,24'},
        {id:91,name:'Leslie',friends:'9,53,92'},
        {id:92,name:'Nomlanga',friends:'40,99,10'},
        {id:93,name:'Lionel',friends:'96,81,21'},
        {id:94,name:'Erin',friends:'31,13,59'},
        {id:95,name:'Barbara',friends:'61,78,75'},
        {id:96,name:'Coby',friends:'40,98,3'},
        {id:97,name:'Catherine',friends:'54,6,4'},
        {id:98,name:'Fulton',friends:'32,8,10'},
        {id:99,name:'Yael',friends:'87,5,4'},
        {id:100,name:'Iona',friends:'19,24,67'}];
/*
  friends.forEach( function(value){
    const names = new Names({name:value.name,friends:value.friends,id:value.id});
    names.save();
});
*/

res.render('done');




    /*
    var values = [
'BMM47BMF3LO',
'YJH46ISK9VO',
'TAZ54IZO8LO',
'KCD25YCN1XX',
'VWQ33MGV0CM',
'GDK07BOI5QR',
'INS25LDF9PH',
'MSJ55FUH3AB',
'OIM73EBP7JJ',
'QCO17LHE5DI',
'ESN69FBR0NK',
'VVI65KWQ2XY',
'QMC05VDY3HG',
'GMH16EXZ3VQ',
'JIE12PCM7VO',
'JNX59PZM9FT',
'OTK78CVW9RR',
'CNM14QRG3AE',
'BRE92VYD2TV',
'KWO29UKW7CQ',
'AVX41OFS0SY',
'BGV40HEA7ZY',
'QKI35DOZ7SW',
'JGI09WAT8MO',
'XQE09NPP8FR',
'IGJ96ZJG3LL',
'LHM89MPV1GD',
'OXJ93NEE7GG',
'WPP98FTC6FA',
'JIU41TYN0HW',
'TDK40XWZ0UQ',
'RQF92EYJ0DC',
'VOD03QOV7UK',
'DWK44YTD1TQ',
'XZR48YUV0EH',
'EHF71FRW3ET',
'ATX74KMT3YT',
'COX13FZN7PX',
'ANP84KUF0PQ',
'DOP29TSQ0QR',
'DVU05KHF8OD',
'FYG85XRD7GD',
'HQO06ORV5JN',
'MHU54GSA5EP',
'LFO77CKC4WO',
'QCT57DFI5BE',
'WFY40VIR0HQ',
'WOF71NCG8OV'];

*/
/*
    values.forEach( function(value){
        const fv = new Fv({value:value});
        fv.save();
    });
*/





  };
