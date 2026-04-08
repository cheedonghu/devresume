import { useTranslation } from "react-i18next";
import { ResponsibilityAchievement } from "../../types";
import { EventHighlightItem } from "../events-section";
import { RichText } from "../rich-text";
import { Section } from "../section";
import { VStack } from "../stack";
import { Theme } from "../theme";

type Props = {
  items: Array<ResponsibilityAchievement | null>;
  theme: Theme;
};

export function ResponsibilitiesAndAchievementsSection({
  items,
  theme,
}: Props) {
  const { t } = useTranslation();

  return (
    <Section
      theme={theme}
      title={t("responsibilitiesAndAchievements", {
        defaultValue: "核心职责与成果",
      })}
    >
      <VStack gap={theme.space[6]}>
        {items.map(
          (item, index) =>
            item && (
              <VStack key={`${index}-${item.title || "group"}`} gap={theme.space[2]}>
                {item.title && <RichText>{item.title}</RichText>}
                {item.highlights &&
                  item.highlights.map(
                    (highlight, highlightIndex) =>
                      highlight && (
                        <EventHighlightItem key={`${highlightIndex}-${highlight}`}>
                          {highlight}
                        </EventHighlightItem>
                      )
                  )}
              </VStack>
            )
        )}
      </VStack>
    </Section>
  );
}
