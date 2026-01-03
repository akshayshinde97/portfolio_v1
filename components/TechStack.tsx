import React from 'react';

const stackData = [
  {
    name: 'Framer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlkcc2-oV0UtqguvNBZVdTy-K8yX32aSMRoOEf4Yyj6rS1P08dKBpqyEQuAVKOlisXA7Fh3tdaDx7QkTVvwrig_xgrvJtpW33qn5Y1WHeG_f6fCt-c_VhDkCOsyMo1XHSwlc3ErtQfGY2WRcmZ2kwOJw62-r0PHntrGLZKKEpCPRTo9OP3-i9DcqNX8GlZp6v3Em0Zr0yDOPG6KQFw9ZuDtNkf81_cwKqbt0PJ3a711RnRtVfpaSlEWlRxDFK4C1IwKuLb7FD9lD62',
  },
  {
    name: 'Raycast',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlVCVslltB1H98CdzBZXNXWzpxd9ozFW_urRJG0VlD0ubn8PUkEzayyGohMjp_14B5kEAzd6Sv6V5Njv_fKeYB05bPKPE9ShHJHatgZdH0OJnjUsySLFpXD0oUCQ7CBGBC1J0K4CZ41-EClyz3xdsV4XMUb6kXPxunixLOY4m8qa1EYYToKN7EID4fCAlAC1W8Bl7PCHmQt8yO8iujW3KKdMosnawlGY78n3kHrC04eu-l_NlJvxp9lsRmWj6zFJAwPAowo77WiHSd',
  },
  {
    name: 'Typefully',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC72sEhJHiM_BqZk5MudMMugcff1VbAYGR1RO-5nz-KIB9ifHzCl_uue0tRBy2QkXu52oAOJqo3Kqiq9s5wakh5giy5w8JC8uYGVyfkozgA8vkeRtsIoPw65GkCKyYmZPjvBL9Jw6c7k4176rGJGjTM7eD3y0P9Vyp2ZrunmV8n3jO6CJlMerve8VL1nGMsNmGsy0aQXZ3zHwhc4nj2xhhnGLhkS7XwPDYZBchD-TFn3UbXBBeLwbSacyT2g30_TaUkZq1-BPW4VacL',
  },
  {
    name: 'Arc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMNzt395Zjy5i2HFqc1vfsoqNRB1yT0fVqi_O3wIDSNkhV8YcPm_DO6SSSObmdcQ9gAoIWsHf0TWLBE7vcOAr3zlW3R6JzjnShXymHGuLboEvT08UR261gDhfNNPyPfMSXAjCRbiFzK2TMP2s8DZo-g_XJimoz6Erbc1HwKgG0-ETd3PEg3rQXg7J7Fn41r_W-HU3hs7hPQJhbktMpjqrX8zHW-ufWDi6-F1k2wAMh4OI75qb0HGrp8qqRMlCVcjDDRtP2mG3YbyEQ',
  },
  {
    name: 'Figma',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8OWX6RLtnB0CZVmVVplD83YaTRw9yUQAlZmQAAPT6gv6-0o0BqLxHGeLyAtK4Ow5YmAwH7ttTV_Jdw4AaGYevMRbrfk4W5VDVpAUXtqjgoR4pF3X9ek-o6BzXLfPZDe4Ah742bOUSw4DL_WfOn3FT7ZWtLqKEK9ZjeoVAVd4B90Zcjw64H3IpfFpfE8ZOPIupDZz1HPrXbKDzzqk6am6FimQiE-ftdiRZ0xMtIff3yJgS1ZeFjivkWsuMYrYyW2z8JcXfda_VkqIW',
  },
  {
    name: 'Screen Studio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq8BHuN34Rj4PwPEwYZwONnisuLkZNmctxMhe8zInkcexnqbSZpc058_3CfBcK_64V0Cv8Yyrhl3C_9h0zQN--Rn33mZkkEChr1MkReEhX8t2JM_n3tAvjQ8PtKVLC8VETqvuwlsAb23nrn4AmYwCcf6UZCrbEHbUS0WdmMmyZaDW5mIjNZkDiBVA-xlHSgzRLKXsCBwsxP13k9jImcGuRR8ze5ljMYvPKytQs4x_xwqYx_C7jcewRutGmkf6JQ3LV02lk-bdOe_Jz',
  },
  {
    name: 'Superhuman',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGic3jzXXT0HIhynToLQmA7EVHV2Ki5WdklBtvoTE9OPAVpjQFR_BGdMsBpHyiWD_R9lnv2DIcgj4U135CEAbqVuWh3aQ22x2vF2_4GGOUXuN7goY_ysNMvvOwHawbaJDNVoxQOmD1SHXnuVabjtJhQ_EafdfgVELZUpDKzzShMXcakrBphvEklU_LzAgZzFnqBsUyMx7s7sR6d3H178ZHXKj53xfoEFCPBbqILfFQ6PwvpmpiRwthMkKa1xTBArJTMkTBwSL3zw-c',
  },
  {
    name: 'LemonSqueezy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3L1SgIMhKHroatCWC7lBQ12OBaXnA98nywDuXKd4PwJZnaUKirjRcFOZ_g3ySxT5GvrbnW8wOnKvzmWkPDy3jgy-ybFfeV1j2kdrxpV4hK5HMG8voamXAAsBxtHSbBjMJaXui8zmk2wYTNxxElUwz50nxIhYAhCURFly-XUMDPA7OGdyTuxuAT9ZWKOdDO04jnoV4HkXXMuhoe_KbDexbsiN3Q9CXqOlRCfEvcHHG-Puskl8nWFjm_QrNMaMYaBAf230STy-D-eGA',
  },
  {
    name: 'Things',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABDxI7sXkitrtS5giEsJgmzHcRDzFKHeouLD4yxr0bjlqq6hAXUkJfrvei6SW8zmoDdY5F-kzHJP5Aa7QXQyjVivgTxkVtiZ_VojBq0vA4AIirsQNUrVqqIEv5LX9nM9U7Pre-n_E43bHEO00oYhruRbRXB-Ez-C94S_ZZKPKnFh9c_XJ1LRpsbW5vbvCG6_P2nyS6qwTnt4FbgvGBAhUI772lTozTkGSxxxrrUPXVXenxw2Q3LJHTOuOa3XAYwGIyR5obV1FamnOO',
  },
];

export const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stackData.map((item, index) => (
        <div
          key={index}
          className="flex items-center p-4 space-x-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
        >
          <img
            src={item.image}
            alt={`${item.name} logo`}
            className="w-12 h-12 rounded-lg object-contain"
          />
          <span className="font-medium text-gray-900 dark:text-white">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};