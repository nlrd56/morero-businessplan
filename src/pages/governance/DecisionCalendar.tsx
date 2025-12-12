import { useState } from 'react';

export const title = "Calendar";
export const lastUpdated = "23/05/2025 14:30";

export default function DecisionCalendar() {
  const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const months = [
    { 
      name: 'January', 
      days: 31,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 15, type: 'strategic', text: 'Annual Strategic Review' },
        { date: 20, type: 'data', text: '5-year plan update' }
      ]
    },
    { 
      name: 'February', 
      days: 28,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 28, type: 'budget', text: 'Budget approval' }
      ]
    },
    { 
      name: 'March', 
      days: 31,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 25, type: 'review', text: 'Q1 review' },
        { date: 31, type: 'planning', text: 'Q2 planning' }
      ]
    },
    { 
      name: 'April', 
      days: 30,
      decisions: [
        { date: 5, type: 'data', text: 'ONS data import' },
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 10, type: 'targets', text: 'Q2 targets' }
      ]
    },
    { 
      name: 'May', 
      days: 31,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 15, type: 'strategic', text: 'Mid-year review' },
        { date: 20, type: 'planning', text: 'Strategy adjustment' }
      ]
    },
    { 
      name: 'June', 
      days: 30,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 25, type: 'review', text: 'Q2 review' },
        { date: 30, type: 'planning', text: 'Q3 planning' }
      ]
    },
    { 
      name: 'July', 
      days: 31,
      decisions: [
        { date: 5, type: 'data', text: 'ONS data import' },
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 10, type: 'targets', text: 'Q3 targets' }
      ]
    },
    { 
      name: 'August', 
      days: 31,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 10, type: 'review', text: 'Summer review' },
        { date: 15, type: 'performance', text: 'Performance check' }
      ]
    },
    { 
      name: 'September', 
      days: 30,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 25, type: 'review', text: 'Q3 review' },
        { date: 30, type: 'planning', text: 'Q4 planning' }
      ]
    },
    { 
      name: 'October', 
      days: 31,
      decisions: [
        { date: 5, type: 'data', text: 'ONS data import' },
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 10, type: 'targets', text: 'Q4 targets' }
      ]
    },
    { 
      name: 'November', 
      days: 30,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 15, type: 'planning', text: 'Year-end planning' },
        { date: 20, type: 'budget', text: 'Budget preparation' }
      ]
    },
    { 
      name: 'December', 
      days: 31,
      decisions: [
        { date: 7, type: 'review', text: 'Monthly Strategic Review' },
        { date: 15, type: 'review', text: 'Q4 review' },
        { date: 20, type: 'strategic', text: 'Annual assessment' }
      ]
    }
  ];

  const getMonthIndex = (monthName: string) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(monthName);
  };

  return (
    <div>
      {/* Custom Tooltip */}
      {hoveredCircle && (
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x + 10,
            top: mousePosition.y - 30,
            backgroundColor: 
              hoveredCircle === 'Monthly Review' ? '#10B981' :
              hoveredCircle === 'Quarterly Review' ? '#10B981' :
              hoveredCircle === 'Annual Review' ? '#D65D12' :
              hoveredCircle === 'Monthly Plan' ? '#3B82F6' :
              hoveredCircle === 'Quarterly Plan' ? '#3B82F6' :
              hoveredCircle === 'Annual Plan' ? '#D65D12' :
              hoveredCircle === 'ONS Data' ? '#8B5CF6' : '#1f2937',
            color: '#0d0d0d',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600',
            zIndex: 1000,
            pointerEvents: 'none',
            border: `1px solid ${
              hoveredCircle === 'Monthly Review' ? '#10B981' :
              hoveredCircle === 'Quarterly Review' ? '#10B981' :
              hoveredCircle === 'Annual Review' ? '#D65D12' :
              hoveredCircle === 'Monthly Plan' ? '#3B82F6' :
              hoveredCircle === 'Quarterly Plan' ? '#3B82F6' :
              hoveredCircle === 'Annual Plan' ? '#D65D12' :
              hoveredCircle === 'ONS Data' ? '#8B5CF6' : '#374151'
            }`
          }}
        >
          {hoveredCircle}
        </div>
      )}
      
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {[
            { type: 'data', color: '#8B5CF6' },
            { type: 'review', color: '#10B981' },
            { type: 'plan', color: '#3B82F6' },
            { type: 'annual', color: '#D65D12' }
          ].map(({ type, color }) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: color
              }} />
              <span style={{ color: '#9ca3af', fontSize: '0.9rem', textTransform: 'capitalize' }}>
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2.5rem',
        marginBottom: '0.5rem'
      }}>
        {months.map((month, index) => (
          <div key={index} style={{ textAlign: 'center', padding: '0 0.05rem' }}>
            {/* Month/Year Title */}
            <div style={{ fontSize: '0.75rem', fontWeight: 500, color: '#fff', marginBottom: '0.25rem', marginTop: '0.1rem' }}>
              {month.name} 2026
            </div>
            {/* Divider */}
            <div className="bg-orange-500 mx-auto my-2" style={{ width: '60px', height: '0.5px' }} />
            {/* Day of week row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', color: '#e5e7eb', fontSize: '0.5rem', marginBottom: '0.25rem', letterSpacing: 0.2 }}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
                <div key={i}>{day}</div>
              ))}
            </div>
            {/* 6x7 grid of days */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', color: '#9ca3af', fontSize: '0.6rem', rowGap: '0.5rem', columnGap: 0 }}>
              {(() => {
                // Calculate the first day of the month (0 = Sunday, 1 = Monday, etc.)
                const firstDay = new Date(2026, getMonthIndex(month.name), 1).getDay();
                const mondayFirst = firstDay === 0 ? 6 : firstDay - 1; // Convert to Monday=0, Tuesday=1, etc.
                const days = [];
                
                // Add empty cells for days before the first day of the month
                for (let i = 0; i < mondayFirst; i++) {
                  days.push(<div key={`empty-${i}`}></div>);
                }
                
                // Add the actual days of the month
                for (let day = 1; day <= month.days; day++) {
                  const dayIndex = mondayFirst + day - 1;
                  
                  // Calculate data, review, and plan dates for specific months
                  let isDataDay = false;
                  let isReviewDay = false;
                  let isPlanDay = false;
                  let isAnnualReviewDay = false;
                  let isAnnualPlanDay = false;
                  
                  if (month.name === 'April' || month.name === 'July' || month.name === 'October' || month.name === 'January') {
                    // Find the Sunday in the 2nd week (days 8-14)
                    const dataSunday = 7 + (7 - mondayFirst) % 7; // Sunday of 2nd week
                    if (dataSunday >= 8 && dataSunday <= 14) {
                      isDataDay = day === dataSunday;
                      isReviewDay = day === dataSunday + 2; // Tuesday after data
                      isPlanDay = day === dataSunday + 4; // Thursday of same week
                    }
                  } else {
                    // For months without data, review and plan on 2nd week
                    const dayIndex = mondayFirst + day - 1;
                    const isSecondWeekTuesday = dayIndex % 7 === 1 && day > 7 && day <= 14; // Tuesday of 2nd week
                    const isSecondWeekThursday = dayIndex % 7 === 3 && day > 7 && day <= 14; // Thursday of 2nd week
                    
                    isReviewDay = isSecondWeekTuesday;
                    isPlanDay = isSecondWeekThursday;
                  }
                  
                  // Annual review and plan on 4th week of January
                  if (month.name === 'January') {
                    // Find the Tuesday and Thursday of the 4th week (days 22-28)
                    const fourthWeekTuesday = 21 + (9 - mondayFirst) % 7; // Tuesday of 4th week
                    const fourthWeekThursday = fourthWeekTuesday + 2; // Thursday of 4th week
                    
                    isAnnualReviewDay = day === fourthWeekTuesday;
                    isAnnualPlanDay = day === fourthWeekThursday;
                  }
                  
                  days.push(
                    <div key={day} style={{ 
                      color: (dayIndex % 7 === 5 || dayIndex % 7 === 6) ? '#4b5563' : '#9ca3af',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {isReviewDay && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#10B981',
                            opacity: 0.6,
                            zIndex: 1
                          }}
                        />
                      )}
                      {isPlanDay && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#3B82F6',
                            opacity: 0.6,
                            zIndex: 1
                          }}
                        />
                      )}
                      {isAnnualReviewDay && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#D65D12',
                            opacity: 0.6,
                            zIndex: 1
                          }}
                        />
                      )}
                      {isAnnualPlanDay && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#D65D12',
                            opacity: 0.6,
                            zIndex: 1
                          }}
                        />
                      )}
                      {isDataDay && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#8B5CF6',
                            opacity: 0.6,
                            zIndex: 1
                          }}
                        />
                      )}
                      <span 
                        style={{ 
                          position: 'relative', 
                          zIndex: 2,
                          color: (isReviewDay || isPlanDay || isDataDay || isAnnualReviewDay || isAnnualPlanDay) ? '#0d0d0d' : (dayIndex % 7 === 5 || dayIndex % 7 === 6) ? '#4b5563' : '#9ca3af',
                          cursor: (isReviewDay || isPlanDay || isDataDay || isAnnualReviewDay || isAnnualPlanDay) ? 'pointer' : 'default',
                          fontWeight: (isReviewDay || isPlanDay || isDataDay || isAnnualReviewDay || isAnnualPlanDay) ? 'bold' : 'normal'
                        }}
                        onMouseEnter={(e) => {
                          if (isReviewDay) {
                            setHoveredCircle(month.name === 'April' || month.name === 'July' || month.name === 'October' || month.name === 'January' ? 'Quarterly Review' : 'Monthly Review');
                            setMousePosition({ x: e.clientX, y: e.clientY });
                          } else if (isPlanDay) {
                            setHoveredCircle(month.name === 'April' || month.name === 'July' || month.name === 'October' || month.name === 'January' ? 'Quarterly Plan' : 'Monthly Plan');
                            setMousePosition({ x: e.clientX, y: e.clientY });
                          } else if (isDataDay) {
                            setHoveredCircle('ONS Data');
                            setMousePosition({ x: e.clientX, y: e.clientY });
                          } else if (isAnnualReviewDay) {
                            setHoveredCircle('Annual Review');
                            setMousePosition({ x: e.clientX, y: e.clientY });
                          } else if (isAnnualPlanDay) {
                            setHoveredCircle('Annual Plan');
                            setMousePosition({ x: e.clientX, y: e.clientY });
                          }
                        }}
                        onMouseLeave={() => setHoveredCircle(null)}
                        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
                      >
                        {day}
                      </span>
                    </div>
                  );
                }
                
                // Fill remaining cells to complete 6x7 grid
                while (days.length < 42) {
                  days.push(<div key={`empty-end-${days.length}`}></div>);
                }
                
                return days;
              })()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 