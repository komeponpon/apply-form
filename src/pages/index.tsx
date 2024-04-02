import ExcelForm from "@/components/ExcelForm";

const IndexPage = () => {
  const handleSubmit = async (formData: any) => {
    const res = await fetch ('/api/generate-excel',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const blob = await res.blob();
    const fileName = `data_${Date.now()}.xlsx`;
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <ExcelForm onSubmit={handleSubmit} />;
};

export default IndexPage;