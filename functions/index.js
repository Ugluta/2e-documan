const {onCall} = require("firebase-functions/v2/https");
const {GoogleGenerativeAI} = require("@google-generative-ai/frontend");

// Deep Agent Motoru
exports.deepAgentAnalyze = onCall(async (request) => {
    const genAI = new GoogleGenerativeAI("AIzaSyD8_Xd2wmTN8RmVuTLbzPkJaWq0okbQBuU");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Bu dökümanı öğretmenler için özetle ve 2e-documan formatına uygun başlık çıkar.";
    const result = await model.generateContent([prompt, request.data.fileContent]);
    return { summary: result.response.text() };
});