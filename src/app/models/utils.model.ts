export interface AccordionItem {
    title: string,
    isOpen?: boolean
}

export interface QuestionsStats {
    id: number,
    name: string,
    qtd_questions: number,
    right: number,
    error: number,
    unfulfilled: number
}