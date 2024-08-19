/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1724090243", {
    template: `
    <section class="py-8 bg-white pl-4">
        <h2 class="text-lg font-semibold mb-5">Frequently Asked Questions About Our Lizard Marketplace</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" :class="[{ 'expanded': term.expanded }]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8 fill-slate-400 dark:fill-slate-500" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="text-slate-500 dark:text-slate-400 grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            terms: [
                { title: "What types of lizards are available on your marketplace?", description: "Our marketplace offers a wide variety of lizards, including geckos, iguanas, chameleons, and bearded dragons. We work with reputable breeders to ensure a diverse selection of species and morphs.", expanded: false },
                { title: "How do I ensure the lizard I purchase is healthy?", description: "All lizards on our marketplace come with health guarantees and are thoroughly checked by veterinarians before listing. We also provide detailed care information and support to ensure your new pet thrives in its new home.", expanded: false },
                { title: "What's included with my lizard purchase?", description: "Each lizard comes with a starter care kit, including feeding guidelines, habitat recommendations, and a health certificate. We also offer optional add-ons such as terrariums, heating equipment, and food supplies.", expanded: false },
                { title: "How does shipping work for live lizards?", description: "We use specialized, insulated packaging and express shipping methods to ensure the safe and comfortable transport of your lizard. All shipments are tracked and insured, and we coordinate delivery times to minimize stress on the animal.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
