export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Marina ${codigo}`,
        email: `marina${codigo}@email.com`
    })
}