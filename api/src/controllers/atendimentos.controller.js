/**
 * Descrição: arquivo com os métodos para manipulação do BD.
 * Data: 20/12/2021
 * Author: Maria Sakis
 */

const db = require("../config/database");

// ==> Criar um novo Atendimento:

exports.criarAtendimento = async (req, res) => {
  const {codigo_paciente, tipo_atendimento, data, local, id_servico } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO atendimento (codigo_paciente, tipo_atendimento, data, local, id_servico) VALUES ($1, $2, $3, $4, $5)",
    [codigo_paciente, tipo_atendimento, data, local, id_servico]
    );
    res.status(201).send({
      message: "Atendimento Cadastrado com sucesso!",
      body: {
       atendimento: {codigo_paciente, tipo_atendimento, data, local, id_servico}
      },
    });
  } catch (error) {
    console.error('criarAtendimento', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Listar um atendimento por Id do paciente:
exports.listarAtendimentosCod = async (req, res) => {
  const { codigo_paciente } = req.params;
  try {
    const { rows } = await db.query(`SELECT 
                                      a.codigo_paciente, a.tipo_atendimento, a.data, s.descricao, s.valor
                                    FROM atendimento_maria a
                                    INNER JOIN servico_maria s ON s.codigo =  a.id_servico
                                    WHERE codigo_paciente = $1`,
      [codigo_paciente]
    );
    if (!rows.length) {
      throw 'atendimento_n_existe';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('listarAtendimentosCod', error);
    if (error == 'atendimento_n_existe') {
      res.status(404).send({
        message: "atendimento não existe."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

// ==> Atualizar um atendimento por Id do paciente:
exports.alterarAtendimento = async (req, res) => {
  const { id } = req.params;
  try {
    const { codigo_paciente, tipo_atendimento, data, id_servico} = req.body;
    const { rows } = await db.query(`UPDATE atendimento_maria 
                                    SET codigo_paciente = $1, 
                                    tipo_atendimento = $2, 
                                    data = $3,
                                    id_servico = $4

                                    WHERE id = $5`,

      [codigo_paciente, tipo_atendimento, data, id_servico, id]
    );
    res.status(200).send({ message: "Atualizado com sucesso!" });
  } catch (error) {
    console.error('updateErro', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Deletar atendimento por Id:
exports.cancelarAtendimento = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM atendimento_maria WHERE id = $1", [id]);
    res.status(200).send({ message: "Atendimento excluído!" });
  } catch (error) {
    console.error('deletar', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};