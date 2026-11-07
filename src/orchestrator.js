// orchestrator.js — Orchestration de l'orchestration
//
// L'orchestrateur orchestre un méta-orchestrateur, qui orchestre
// l'orchestrateur. C'est ce qu'on appelle une architecture agentique
// récursive. Nous avons déposé le terme.

const PROFONDEUR_MAX = 3; // au-delà, même nous on ne comprend plus

function orchestrer(niveau = 0) {
  if (niveau >= PROFONDEUR_MAX) {
    return { statut: "orchestré", valeur: 0 };
  }
  return orchestrer(niveau + 1);
}

module.exports = { orchestrer };
