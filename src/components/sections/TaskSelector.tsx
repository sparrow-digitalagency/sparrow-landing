import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getService } from "@/config/services";
import {
  taskOptions,
  type TaskChoiceItem,
  type TaskOptionItem,
} from "@/config/task-selector";
import { Section } from "@/components/ui/Section";
import { chipClass } from "@/components/ui/Chip";
import { leadHref, serviceSectionHref } from "@/lib/lead/intent";

function choiceHref(choice: TaskChoiceItem) {
  return choice.kind === "service"
    ? serviceSectionHref(getService(choice.service).anchor)
    : leadHref(choice.intent);
}

/**
 * "С какой задачей вам помочь?" — structural skeleton.
 * Every option links to the relevant service block or to the lead form.
 * The interactive / visual behaviour is designed in Stage 2.
 */
export function TaskSelector() {
  const t = useTranslations();

  const renderOption = (option: TaskOptionItem) => {
    const label = t(`taskSelector.options.${option.messageKey}`);
    const { target } = option;

    if (target.kind === "choice") {
      return (
        <details className="group">
          <summary className={chipClass(false, "cursor-pointer list-none")}>
            {label}
          </summary>
          <ul className="mt-3 flex flex-wrap gap-2">
            {target.choices.map((choice) => (
              <li key={choice.id}>
                <Link href={choiceHref(choice)} className={chipClass()}>
                  {t(`taskSelector.choices.${choice.messageKey}`)}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      );
    }

    const href =
      target.kind === "service"
        ? serviceSectionHref(getService(target.service).anchor)
        : leadHref(target.intent);

    return (
      <Link href={href} className={chipClass()}>
        {label}
      </Link>
    );
  };

  return (
    <Section id="task-selector" title={t("sections.taskSelector.title")}>
      <ul className="mt-10 flex flex-wrap gap-3">
        {taskOptions.map((option) => (
          <li key={option.id}>{renderOption(option)}</li>
        ))}
      </ul>
    </Section>
  );
}
