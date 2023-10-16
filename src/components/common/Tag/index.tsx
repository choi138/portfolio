import { Text, TextContainer } from '@choi138/react-text';

export interface TagProps {
  tagList: string[];
}

export const Tag: React.FC<TagProps> = ({ tagList }) => {
  return (
    <TextContainer columnGap={0.4} style={{ flexWrap: 'wrap' }}>
      {tagList.map((item) => (
        <Text size={0.8} color="#9e9e9e" weight={400} key={item}>
          #{item}
        </Text>
      ))}
    </TextContainer>
  );
};
