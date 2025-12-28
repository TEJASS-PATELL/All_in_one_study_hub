const ProgressBar = ({ value, getColor }) => {
  return (
    <div style={{ width: '100%', marginTop: '20px', padding: '0 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontWeight: '600', color: 'black', fontSize: '1rem' }}>Task Progress</span>
        <span style={{ fontWeight: '700', color: '#111827', fontSize: '1rem' }}>{value}%</span>
      </div>
      <div style={{ 
        width: '100%', 
        backgroundColor: '#e5e7eb', 
        borderRadius: '10px', 
        height: '14px',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          width: `${value}%`, 
          backgroundColor: getColor(value), 
          height: '100%', 
          borderRadius: '10px',
          transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)' 
        }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;