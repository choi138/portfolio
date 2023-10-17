import { Text, TextContainer } from '@choi138/react-text';

import { colors } from 'src/styles';

export interface TagProps {
  tagList: string[];
}

export const Tag: React.FC<TagProps> = ({ tagList }) => {
  return (
    <TextContainer columnGap={0.4} style={{ flexWrap: 'wrap' }}>
      {tagList.map((item) => (
        <Text size={0.8} color={colors.gray} weight={400} key={item}>
          #{item}
        </Text>
      ))}
    </TextContainer>
  );
};
