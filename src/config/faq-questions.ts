type FAQQuestion = {
    question: string,
    answer: string
}

const FAQQuestions: FAQQuestion[] = [
    { question: "What does the Products Manager app do?", answer: "It manages products: view, add, delete, and sort them." },
    { question: "How can I view the product list?", answer: "Open the Products page." },
    { question: "How do I add a new product?", answer: "Click the 'Add new product' button." },
    { question: "How can I delete a product?", answer: "Use the delete button or select it with a checkbox." },
    { question: "Can I delete multiple products at once?", answer: "Yes, select several products and click 'Delete selected'." },
    { question: "How can I sort products?", answer: "You can sort by ID or by quantity." },
    { question: "Where can I see product details?", answer: "Click on a product to open the details panel." },
    { question: "How do I edit a product?", answer: "Edit it in the selected product panel." },
    { question: "What is shown on the home page?", answer: "Introductory information about the application." },
    { question: "Where can I find help information?", answer: "On the FAQ page." }
]

export default FAQQuestions