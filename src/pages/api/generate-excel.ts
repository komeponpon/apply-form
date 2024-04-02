import ExcelJS from 'exceljs';

export default async function handler(req: { method: string; body: { name: any; email: any; }; }, res: { setHeader: (arg0: string, arg1: string) => void; send: (arg0: ExcelJS.Buffer) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }){
  if(req.method === 'POST'){
    const {name, email} = req.body;

    //Excelファイルの作成
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');
    worksheet.addRow([name, email]);

    //Excelファイルの出力
    const excelBuffer = await workbook.xlsx.writeBuffer();
    res.setHeader('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');
    res.send(excelBuffer);
  } else {
    res.status(405).json({message: 'Method Not Allowed'});
  }
}