import { Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import PostListItem from "../../components/PostListItem";

import posts from "../../../assets/data/posts.json";

const PostDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <Text>Post Not found!</Text>;
  }

  return (
    <ScrollView>
      <PostListItem post={post} />
    </ScrollView>
  );
};
export default PostDetailScreen;
