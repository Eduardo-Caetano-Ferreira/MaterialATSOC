/* =====================================================
   DADOS DO TREINAMENTO ATSOC
   Para adicionar um atendimento: copie um bloco { ... }
   dentro de ATENDIMENTOS e preencha os campos.
   (Os arquivos de áudio ficam na pasta do atendimento.)
   ===================================================== */

const ATENDIMENTOS = [
  {
    titulo: "Verificação de Sinal – Cliente sem acesso às câmeras",
    categoria: "Verificação de Sinal",
    operador: "Douglas Cruz",
    audio: "Verificação de Sinal/Ligacao Douglas - Sem acesso - censurado.mp3",
    abertura: {
      relato: "Mora em SP - sem internet",
      telefone: "(11) 9****-**52",   // mascarado: não colocar dado completo do cliente
      operador: "Douglas Cruz"
    },
    finalizacao: [
      "Cliente mora em SP e está sem acesso às câmeras pois houve uma queda de conexão (normalizada).",
      "Reiniciei o roteador para ver se, após o reboot, as câmeras se conectavam automaticamente, mas não funcionou.",
      "Como o cliente relata ter os mesmos problemas referentes às câmeras, ficou um pouco incomodado por ter que entrar em contato conosco sempre para resolver isso. Afinal, ele não pode sair de SP para ir ao local sempre que o problema ocorre.",
      "Para evitar cancelamento e reter o cliente, informei a respeito do cabeamento da câmera para ter maior estabilidade. O cliente disse que veria a respeito e retornaria o contato assim que pudesse."
    ],
    dicas: [
      "Antes de testar qualquer coisa, consulte o status da conexão no sistema e confirme se o sinal da fibra está dentro do padrão.",
      "Se houve queda recente, avise o cliente que ela pode ter derrubado as câmeras e reinicie o equipamento remotamente.",
      "Informe o tempo estimado do reinício e avise o cliente quando a conexão voltar, pedindo que teste o dispositivo.",
      "Com cliente irritado por problema recorrente, reconheça o incômodo e ofereça uma solução definitiva (cabeamento da câmera), explicando o custo com clareza."    ]
  },
  {
    titulo: "Sem acesso – ONU desligada",
    categoria: "Sem acesso",
    operador: "Lucas",
    audio: "Sem acesso/Lucas - Sem acesso - censurado.mp3",
    abertura: {
      relato: "Cliente informa que está sem acesso.",
      telefone: "(11) 9****-**98",
      operador: "Lucas"
    },
    finalizacao: [
      "Cliente sem acesso mediante ONU desligada.",
      "Após verificar o botão power e apertá-lo, a conexão voltou e está funcionando normalmente.",
      "Cliente ciente de que não pode mexer neste botão, pois ele desliga e liga o equipamento."
    ],
    dicas: [
      "Pergunte quais luzes estão acesas e apagadas em cada equipamento: isso já indica onde está o problema.",
      "Conduza o cliente passo a passo (localizar o botão, apertar e aguardar) e confirme o que ele vê em cada etapa.",
      "Antes de concluir, confira no sistema se houve queda ou oscilação nos últimos dias para descartar outra causa.",
      "Confirme com o cliente que a conexão voltou ao normal antes de encerrar."
    ]
  },
  {
    titulo: "Lentidão e Oscilação – Ajuste de DNS e reinício do roteador",
    categoria: "Lentidão e Oscilação",
    operador: "Ana Beatriz P.",
    audio: "Lentidao e Oscilação/ana pereira - oscilacao - censurado.mp3",
    abertura: {
      relato: "Oscilação",
      telefone: "(11) 9****-**15",
      operador: "Ana Beatriz P."
    },
    finalizacao: [
      "Cliente entrou em contato relatando problemas de oscilação em sua conexão, tanto em celulares quanto em seu TV Box.",
      "Realizei as seguintes tratativas: alterei o DNS para o da Cloudflare e reiniciei o roteador.",
      "Após os procedimentos, solicitei que o cliente testasse sua conexão. O mesmo testou e informou que havia melhorado.",
      "Referente ao TV Box, reforcei que não garantimos a estabilidade nesse serviço e os motivos, onde o cliente entendeu normalmente."
    ],
    dicas: [
      "Explique ao cliente o que você vai fazer no roteador e avise que a conexão vai cair por alguns instantes.",
      "Peça que o cliente teste a conexão e os aplicativos depois do procedimento, e confirme o resultado com ele.",
      "Para o TV Box, deixe claro que não garantimos a estabilidade do serviço e explique os motivos.",
      "Oriente o cliente a monitorar durante o dia e a retornar o contato se o problema voltar."    ]
  },
  {
    titulo: "Informação e verificação de atendimento já aberto – Ponto adicional",
    categoria: "Informação e verificação de atendimento já aberto",
    operador: "Luiz Guilherme",
    audio: "informação e verificação de atendimento já aberto/luiz - ponto adicional - censurado.mp3",
    abertura: {
      relato: "Cliente relata perda de alcance do sinal.",
      telefone: "(13) 9****-**48",
      operador: "Luiz Guilherme"
    },
    finalizacao: [
      "Sem finalização do atendimento até o momento por conta que foi gerado O.S."
    ],
    dicas: [
      "Ao receber um cliente com atendimento já aberto, confira no sistema o histórico e o que foi combinado antes.",
      "Informe o número do protocolo e resuma o que foi constatado na visita técnica anterior.",
      "Apresente todas as opções ao cliente com os valores (aumento de plano ou compra de roteador próprio) e deixe-o escolher."    ]
  },
  {
    titulo: "Troca de senha do Wi-Fi",
    categoria: "Troca de senha",
    operador: "Ana Beatriz",
    audio: "troca de senha/ana beatriz jesus - troca de senha - censurado.mp3",
    abertura: {
      relato: "Atendimento já foi aberto pelo sistema com o relato do cliente; a operadora só resgatou o atendimento que já estava aberto. Relato: quero trocar a senha do meu Wi-Fi.",
      telefone: "Não informado",
      operador: "Ana Beatriz"
    },
    finalizacao: [
      "Cliente solicitou alteração da senha do Wi-Fi para a nova senha informada (omitida neste material). Após isso, reconectou o celular e confirmou normalização."
    ],
    dicas: [
      "Confirme o titular antes de alterar a senha da rede.",
      "Confirme com o cliente o nome da rede Wi-Fi que terá a senha alterada.",
      "Soletre a nova senha e confirme letras maiúsculas e minúsculas antes de salvar.",
      "Avise que, após a troca, todos os dispositivos serão desconectados e precisarão da nova senha.",
      "Peça que o cliente conecte um dispositivo para confirmar que a nova senha funcionou.",
      "Registre a senha nova em texto aberto na finalização do atendimento."
    ]
  }
];
