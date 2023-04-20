const {TwitterRepository,HashtagRepository} =  require('../repository/index');

class TweetService{
    constructor(){
        this.tweetRepo = new TwitterRepository();
        this.hashtagRepo = new HashtagRepository();
    }

    async create(data){
        try {
            const content = data.content;
            const tweet = await this.tweetRepo.create(data);            
            let tags = content.match(/#[a-zA-Z0-9_]+/g);
            tags = tags.map( tag => tag.substring(1).toLowerCase());   
            let presentTags =  await this.hashtagRepo.searchAllTags(tags);  
            let titleOfPresentTags= presentTags.map(tag => tag.title);
            let newTags =  tags.filter(tag => !titleOfPresentTags.includes(tag));
            newTags = newTags.map(tag =>  ({title: tag, tweets:[tweet.id] }));
            await this.hashtagRepo.bulkcreate(newTags);
            presentTags.map(tag =>{
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateTweetTag(tweetId,data){
        try {
            const response = await this.tweetRepo.update(tweetId,data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TweetService;