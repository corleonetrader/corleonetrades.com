/**
 * propfirms-data.js — Corleone Trades
 * Datos de prop firms para el comparador interactivo.
 *
 * CÓMO ACTUALIZAR PRECIOS O DESCUENTOS:
 *   1. Edita el campo challengeFee o discount que haya cambiado
 *   2. Sube el archivo a GitHub (reemplaza el anterior)
 *   3. El comparador se actualiza automáticamente
 *
 * TRUE COST se calcula en JS, no aquí:
 *   trueCost = challengeFee × (1 - discount / 100) + activationFee
 */

const PROPFIRMS_DATA = [

  // ════════════════════════════════════════════════════
  //  APEX TRADER FUNDING
  //  Suscripción mensual · Activation fee = pago único PA
  //  Sin daily loss limit · Profit split 100% primeros $25K, luego 90%
  //  Drawdown trailing EOD (se congela al alcanzar el umbral)
  //  ⚠️ Verifica precios en apextraderfunding.com antes de publicar
  // ════════════════════════════════════════════════════

  {
    id:            "apex-25k",
    firm:          "Apex Trader Funding",
    logo:          "assets/logos/apex.png",
    plan:          "EOD",
    accountSize:   25000,
    type:          "Challenge",
    challengeFee:  177,
    activationFee: 130,
    profitTarget:  1500,
    drawdown:      1500,
    drawdownType:  "EOD",
    dailyLoss:     null,
    discount:      85,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://apextraderfunding.com/member/aff/go/corleone",
    profitSplit:   "100% first $25K, then 90%",
    maxAccounts:   20,
    payoutSpeed:   "Every 8 trading days"
  },

  {
    id:            "apex-50k",
    firm:          "Apex Trader Funding",
    logo:          "assets/logos/apex.png",
    plan:          "EOD",
    accountSize:   50000,
    type:          "Challenge",
    challengeFee:  197,
    activationFee: 140,
    profitTarget:  3000,
    drawdown:      2500,
    drawdownType:  "EOD",
    dailyLoss:     null,
    discount:      85,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://apextraderfunding.com/member/aff/go/corleone",
    profitSplit:   "100% first $25K, then 90%",
    maxAccounts:   20,
    payoutSpeed:   "Every 8 trading days"
  },

  {
    id:            "apex-100k",
    firm:          "Apex Trader Funding",
    logo:          "assets/logos/apex.png",
    plan:          "EOD",
    accountSize:   100000,
    type:          "Challenge",
    challengeFee:  279,
    activationFee: 220,
    profitTarget:  6000,
    drawdown:      3000,
    drawdownType:  "EOD",
    dailyLoss:     null,
    discount:      85,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://apextraderfunding.com/member/aff/go/corleone",
    profitSplit:   "100% first $25K, then 90%",
    maxAccounts:   20,
    payoutSpeed:   "Every 8 trading days"
  },

  {
    id:            "apex-150k",
    firm:          "Apex Trader Funding",
    logo:          "assets/logos/apex.png",
    plan:          "EOD",
    accountSize:   150000,
    type:          "Challenge",
    challengeFee:  397,
    activationFee: 260,
    profitTarget:  9000,
    drawdown:      5000,
    drawdownType:  "EOD",
    dailyLoss:     null,
    discount:      85,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://apextraderfunding.com/member/aff/go/corleone",
    profitSplit:   "100% first $25K, then 90%",
    maxAccounts:   20,
    payoutSpeed:   "Every 8 trading days"
  },

  // ════════════════════════════════════════════════════
  //  TRADEIFY — PLAN GROWTH
  //  EOD trailing drawdown · Sin activation fee
  //  Daily loss limit activo · Consistencia 35% en funded
  //  Mínimo 1 día de trading para pasar
  //  ⚠️ Verifica precios en tradeify.co antes de publicar
  // ════════════════════════════════════════════════════

  {
    id:            "tradeify-growth-50k",
    firm:          "Tradeify",
    logo:          "assets/logos/tradeify.png",
    plan:          "Growth",
    accountSize:   50000,
    type:          "Challenge",
    challengeFee:  97,
    activationFee: 0,
    profitTarget:  3000,
    drawdown:      2000,
    drawdownType:  "EOD",
    dailyLoss:     1250,
    discount:      40,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://tradeify.co/?ref=2LMROY3S",
    profitSplit:   "90% from dollar one",
    maxAccounts:   5,
    payoutSpeed:   "24-48h after approval"
  },

  {
    id:            "tradeify-growth-100k",
    firm:          "Tradeify",
    logo:          "assets/logos/tradeify.png",
    plan:          "Growth",
    accountSize:   100000,
    type:          "Challenge",
    challengeFee:  197,
    activationFee: 0,
    profitTarget:  6000,
    drawdown:      3000,
    drawdownType:  "EOD",
    dailyLoss:     2500,
    discount:      40,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://tradeify.co/?ref=2LMROY3S",
    profitSplit:   "90% from dollar one",
    maxAccounts:   5,
    payoutSpeed:   "24-48h after approval"
  },

  {
    id:            "tradeify-growth-150k",
    firm:          "Tradeify",
    logo:          "assets/logos/tradeify.png",
    plan:          "Growth",
    accountSize:   150000,
    type:          "Challenge",
    challengeFee:  297,
    activationFee: 0,
    profitTarget:  9000,
    drawdown:      5000,
    drawdownType:  "EOD",
    dailyLoss:     3750,
    discount:      40,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://tradeify.co/?ref=2LMROY3S",
    profitSplit:   "90% from dollar one",
    maxAccounts:   5,
    payoutSpeed:   "24-48h after approval"
  },

  // ════════════════════════════════════════════════════
  //  TRADEIFY — PLAN SELECT (lanzado dic 2025)
  //  EOD drawdown · Sin activation fee · SIN daily loss limit
  //  Consistencia 40% solo en evaluación, desaparece en funded
  //  Mínimo 3 días de trading para pasar
  //  ⚠️ Verifica precios en tradeify.co antes de publicar
  // ════════════════════════════════════════════════════

  {
    id:            "tradeify-select-50k",
    firm:          "Tradeify",
    logo:          "assets/logos/tradeify.png",
    plan:          "Select",
    accountSize:   50000,
    type:          "Challenge",
    challengeFee:  159,
    activationFee: 0,
    profitTarget:  2500,
    drawdown:      2000,
    drawdownType:  "EOD",
    dailyLoss:     null,
    discount:      40,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://tradeify.co/?ref=2LMROY3S",
    profitSplit:   "90% from dollar one",
    maxAccounts:   5,
    payoutSpeed:   "24-48h after approval"
  },

  {
    id:            "tradeify-select-100k",
    firm:          "Tradeify",
    logo:          "assets/logos/tradeify.png",
    plan:          "Select",
    accountSize:   100000,
    type:          "Challenge",
    challengeFee:  259,
    activationFee: 0,
    profitTarget:  6000,
    drawdown:      3000,
    drawdownType:  "EOD",
    dailyLoss:     null,
    discount:      40,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://tradeify.co/?ref=2LMROY3S",
    profitSplit:   "90% from dollar one",
    maxAccounts:   5,
    payoutSpeed:   "24-48h after approval"
  },

  {
    id:            "tradeify-select-150k",
    firm:          "Tradeify",
    logo:          "assets/logos/tradeify.png",
    plan:          "Select",
    accountSize:   150000,
    type:          "Challenge",
    challengeFee:  359,
    activationFee: 0,
    profitTarget:  9000,
    drawdown:      5000,
    drawdownType:  "EOD",
    dailyLoss:     null,
    discount:      40,
    couponCode:    "CORLEONE",
    affiliateUrl:  "https://tradeify.co/?ref=2LMROY3S",
    profitSplit:   "90% from dollar one",
    maxAccounts:   5,
    payoutSpeed:   "24-48h after approval"
  }

];
