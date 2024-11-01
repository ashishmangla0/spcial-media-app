import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Title from "../../components/Title/Title";
import globalStyle from "../../assets/styles/globalStyle";
import FontAwesomeicons from "@expo/vector-icons/FontAwesome6";
import UserStory from "../../components/UserStory/UserStory";
import UserPost from "../../components/UserPost/UserPost";
import styles from "./styles";
import {Routes} from '../../navigation/Routes';

//data

export type userStoriesType = {
  firstName: String,
    id: Number | String
    profileImage: String ,
}

export type userPostsType = {
  firstName: String,
    lastName: String,
    location: String,
    likes: Number
    comments: Number
    bookmarks: Number,
    image: String,
    profileImage: String,
    id: Number | String
}



const userStories:userStoriesType[] = [
  {
    firstName: "Joseph",
    id: 1,
    profileImage: require("../../assets/images/default_profile.png"),
  }, //0
  {
    firstName: "Angel",
    id: 2,
    profileImage: require("../../assets/images/default_profile.png"),
  },
  {
    firstName: "White",
    id: 3,
    profileImage: require("../../assets/images/default_profile.png"),
  },
  {
    firstName: "Olivier",
    id: 4,
    profileImage: require("../../assets/images/default_profile.png"),
  },
  {
    firstName: "Nata",
    id: 5,
    profileImage: require("../../assets/images/default_profile.png"),
  },
  {
    firstName: "Nicolas",
    id: 6,
    profileImage: require("../../assets/images/default_profile.png"),
  },
  {
    firstName: "Nino",
    id: 7,
    profileImage: require("../../assets/images/default_profile.png"),
  },
  {
    firstName: "Nana",
    id: 8,
    profileImage: require("../../assets/images/default_profile.png"),
  },
  {
    firstName: "Adam",
    id: 9,
    profileImage: require("../../assets/images/default_profile.png"),
  },
];

//data
const userPosts:userPostsType[] = [
  {
    firstName: "Allison",
    lastName: "Becker",
    location: "Boston, MA",
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 1,
  },
  {
    firstName: "Jennifer",
    lastName: "Wilkson",
    location: "Worcester, MA",
    likes: 1301,
    comments: 25,
    bookmarks: 70,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 2,
  },
  {
    firstName: "Adam",
    lastName: "Spera",
    location: "Worcester, MA",
    likes: 100,
    comments: 8,
    bookmarks: 3,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 3,
  },
  {
    firstName: "Nata",
    lastName: "Vacheishvili",
    location: "New York, NY",
    likes: 200,
    comments: 16,
    bookmarks: 6,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 4,
  },
  {
    firstName: "Nicolas",
    lastName: "Namoradze",
    location: "Berlin, Germany",
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 5,
  },
  {
    firstName: "Nicolas",
    lastName: "Namoradze",
    location: "Berlin, Germany",
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 6,
  },
  {
    firstName: "Nicolas",
    lastName: "Namoradze",
    location: "Berlin, Germany",
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 7,
  },
  {
    firstName: "Nicolas",
    lastName: "Namoradze",
    location: "Berlin, Germany",
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 8,
  },
  {
    firstName: "Nicolas",
    lastName: "Namoradze",
    location: "Berlin, Germany",
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    image: require("../../assets/images/default_post.png"),
    profileImage: require("../../assets/images/default_profile.png"),
    id: 9,
  },
];

const Home = ({navigation}) => {
  const userPostPerPage = 4;
  const [userPostsCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostLoading, setUserPostLoading] = useState(false);
  const [userPostsRenderData, setUserPostRenderData] = useState([]);

  const userStoryPerPage = 4;
  const [userStoryCurrentPage, setUserStoryCurrentPage] = useState(1);
  const [userStoryLoading, setUserStoryLoading] = useState(false);
  const [userStoryRenderData, setUserStoryRenderData] = useState([]);

  //Pagination code
  const pagination = (database: any, currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setUserPostLoading(true);
    setUserStoryLoading(true);
    setUserPostRenderData(pagination(userPosts, 1, userPostPerPage));
    setUserStoryRenderData(pagination(userStories, 1, userStoryPerPage));
    setUserPostLoading(false);
    setUserStoryLoading(false);
  }, []);

  const renderFooter = () => {
    return (
      (userPostLoading || userStoryLoading) && (
        <View style={styles.footer}>
          <ActivityIndicator size={"large"} />
        </View>
      )
    );
  };

  const appendData = () => {
    setUserPostLoading(true);
    const contentToAppend = pagination(
      userPosts,
      userPostsCurrentPage + 1,
      userPostPerPage
    );
    if (contentToAppend.length > 0) {
      setUserPostCurrentPage(userPostsCurrentPage + 1);
      setUserPostRenderData((prev) => [...prev, ...contentToAppend]);
    }
    setUserPostLoading(false);
  };

  const userStoriesAppendData = () => {
    setUserStoryLoading(true);
    const contentToAppend = pagination(
      userStories,
      userStoryCurrentPage + 1,
      userStoryPerPage
    );
    if (contentToAppend.length > 0) {
      setUserStoryCurrentPage(userStoryCurrentPage + 1);
      setUserStoryRenderData((prev) => [...prev, ...contentToAppend]);
    }
    setUserStoryLoading(false);
  };

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar />
      <FlatList
        initialNumToRender={userPostPerPage}
        ListHeaderComponent={
          <>
            <View style={globalStyle.header}>
              <Title title={"Let’s Explore"} />
              <TouchableOpacity
               style={styles.messageIcon}
              //  onPress={() => {
              //       navigation.navigate(Routes.Profile);
              //     }}
                  >
                <FontAwesomeicons name="envelope" size={20} color={"#898DAE"} />
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                initialNumToRender={4}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={userStoryRenderData}
                onEndReachedThreshold={0.5}
                onEndReached={() => userStoriesAppendData()}
                renderItem={({ item, index }) => {
                  const isEnd = index === userStoryRenderData?.length - 1;
                  return (
                    <UserStory
                      isEnd={isEnd}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  );
                }}
              />
            </View>
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => appendData()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={userPostsRenderData}
        renderItem={({ item }) => (
          <View style={globalStyle.userPostContainer}>
            <UserPost
              key={"userStory" + item?.id}
              firstName={item?.firstName}
              lastName={item?.lastName}
              image={item?.image}
              likes={item?.likes}
              comments={item?.comments}
              bookmarks={item?.bookmarks}
              profileImage={item?.profileImage}
              location={item?.location}
              id={item?.id}
            />
          </View>
        )}
        keyExtractor={(item) => item?.id?.toString()} // Unique key for each item
        ListFooterComponent={renderFooter} // Display loading spinner when fetching more data
      />
    </SafeAreaView>
  );
};

export default Home;
