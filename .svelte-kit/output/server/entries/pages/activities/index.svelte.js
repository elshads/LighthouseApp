import { c as create_ssr_component, d as escape, v as validate_component } from "../../../chunks/index-167532fe.js";
import "../../../chunks/appStore-11ae9d39.js";
import { A as Accordion, a as AccordionItem } from "../../../chunks/heatmap-7e194927.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import "../../../chunks/ChevronRight16-1783b04e.js";
const pageName = "Activities";
const Activities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Lighthouse - ${escape(pageName)}</title>`, ""}`, ""}

<h1 class="${"pb-8"}">Placeholder</h1>

${validate_component(Accordion, "Accordion").$$render($$result, { align: "start" }, {}, {
    default: () => {
      return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        title: () => {
          return `<div>Stage 1</div>
		`;
        },
        default: () => {
          return `<p>Natural Language Classifier uses advanced natural language processing and machine learning
			techniques to create custom classification models. Users train their data and the service
			predicts the appropriate category for the inputted text.
		</p>`;
        }
      })}
	${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        title: () => {
          return `<div>Stage 2</div>
		`;
        },
        default: () => {
          return `<p>Analyze text to extract meta-data from content such as concepts, entities, emotion, relations,
			sentiment and more.
		</p>`;
        }
      })}
	${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
        title: () => {
          return `<div>Stage 3</div>
		`;
        },
        default: () => {
          return `<p>Translate text, documents, and websites from one language to another. Create industry or
			region-specific translations via the service&#39;s customization capability.
		</p>`;
        }
      })}`;
    }
  })}`;
});
export { Activities as default };
